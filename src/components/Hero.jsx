import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import bgVideo from "../assets/background.mp4";

import { useLoading } from "../context/LoadingContext";

// --- Variants Defined Outside Component ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.23, 1, 0.32, 1],
      duration: 1,
    },
  },
};

const letterAnimationFade = {
  hidden: {
    y: 0,
    opacity: 0,
    filter: "blur(10px)",
    rotateX: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

// --- Extracted AnimatedText Component ---
const AnimatedText = ({ text, className, variants = letterAnimation }) => (
  <motion.h1
    variants={container}
    initial="hidden"
    animate="show"
    className={className}
    style={{ perspective: "1000px" }} // Perspective for 3D effect
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={variants}
        style={{ display: "inline-block", transformStyle: "preserve-3d" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h1>
);

// --- Interactive Letter Component ---
const InteractiveLetter = ({ char, variants, hoverColor = "#3b82f6" }) => (
  <motion.span
    variants={variants}
    whileHover={{
      scale: 1.2,
      y: -10,
      rotate: Math.random() * 10 - 5,
      color: hoverColor,
      transition: { duration: 0.2 },
    }}
    style={{ display: "inline-block", cursor: "default" }}
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

const SocialLinks = () => {
  const [links] = useState([
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/amikasubasinghe",
    },
    { icon: <FaWhatsapp />, href: "https://wa.me/94787564524" },
    { icon: <FaGithub />, href: "https://github.com/Amikzz" },
  ]);

  const refs = useRef([]);

  useEffect(() => {
    let iconCenters = [];

    const calculateCenters = () => {
      iconCenters = refs.current.map((ref) => {
        if (!ref) return null;
        const rect = ref.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      });
    };

    // Delay calculation slightly to ensure DOM is fully laid out
    setTimeout(calculateCenters, 100);
    window.addEventListener("resize", calculateCenters);

    let animationFrameId;

    const handleMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const maxDistance = 120;

        refs.current.forEach((ref, idx) => {
          if (!ref || !iconCenters[idx]) return;

          const center = iconCenters[idx];
          const dx = mouseX - center.x;
          const dy = mouseY - center.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > maxDistance) {
            ref.style.transform = "";
            return;
          }

          const intensity = (maxDistance - distance) / maxDistance;

          ref.style.transform = `
            rotate(${Math.sin(distance) * 10 * intensity}deg)
            translateY(${Math.cos(distance) * 4 * intensity}px)
            scale(${1 + intensity * 0.15})
          `;
        });
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", calculateCenters);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex z-50 w-full flex-col gap-6 lg:gap-5 xl:gap-8">
      {links.map((item, idx) => (
        <a
          key={idx}
          ref={(el) => (refs.current[idx] = el)}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-main transition-transform duration-150 ease-out text-2xl inline-block"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

const Hero = () => {
  const { setIsVideoLoaded } = useLoading();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden z-20">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 -z-10"></div>

      {/* Social Links & Lines */}
      <div className="z-50 flex-col flex lg:h-[80vh] h-[85vh] px-5 lg:px-9 pt-[5rem] lg:-mt-3 xl:mt-10 py-5 lg:py-10 items-center left-0 top-0 absolute justify-end lg:justify-between">
        <div className="hidden lg:block lg:mb-14 h-[40vh] w-[1px] bg-gray-700 relative">
          <div className="absolute bottom-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-black rounded-[50%] w-[.3rem]"></div>
          <div className="absolute top-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-black rounded-[50%] w-[.3rem]"></div>
        </div>

        {/* Dancing Social Links Component */}
        <SocialLinks />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center z-50 mix-blend-difference">
        <div className="pb-4">
          <AnimatedText
            text="Hi! I’m Amika"
            variants={letterAnimationFade}
            className="font-syne text-xl md:text-2xl lg:text-3xl text-zinc-400 tracking-widest uppercase mb-4"
          />
        </div>

        <div className="flex flex-col items-center leading-none">
          {/* Line 1: SOFTWARE */}
          <div className="p-4">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
              }}
              className="flex flex-wrap justify-center font-cabinetGrotesk font-bold text-[12vw] sm:text-[10vw] xl:text-[8vw] text-white tracking-tighter"
            >
              {"SOFTWARE".split("").map((char, index) => (
                <InteractiveLetter
                  key={index}
                  char={char}
                  variants={letterAnimation}
                />
              ))}
            </motion.div>
          </div>

          {/* Line 2: ENGINEER */}
          <div className="-mt-10 md:-mt-14 p-4">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.3 },
                },
              }}
              className="flex flex-wrap justify-center font-cabinetGrotesk font-bold text-[12vw] sm:text-[10vw] xl:text-[8vw] text-zinc-500 tracking-tighter hover:text-white transition-colors duration-500"
            >
              {"ENGINEER".split("").map((char, index) => (
                <InteractiveLetter
                  key={index}
                  char={char}
                  variants={letterAnimation}
                />
              ))}
            </motion.div>
          </div>

          {/* Line 3: Description */}
          <div className="overflow-hidden mt-8 md:mt-12 pb-2">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.5 },
                },
              }}
              className="flex flex-col md:flex-row items-center justify-center font-syne text-sm md:text-xl text-zinc-400 tracking-wide gap-y-4 md:gap-y-0"
            >
              {["FULL-STACK DEVELOPER", "CREATIVE CODER", "AI ENTHUSIAST"].map(
                (role, i, arr) => (
                  <React.Fragment key={i}>
                    <motion.div
                      className="flex flex-wrap justify-center gap-x-1"
                      variants={{
                        hidden: {},
                        show: {
                          transition: { staggerChildren: 0.03 },
                        },
                      }}
                    >
                      {role.split("").map((char, index) => (
                        <InteractiveLetter
                          key={index}
                          char={char}
                          variants={letterAnimationFade}
                          hoverColor="#ffffff"
                        />
                      ))}
                    </motion.div>
                    {i < arr.length - 1 && (
                      <motion.span
                        variants={letterAnimationFade}
                        className="hidden md:inline-block mx-4 text-zinc-400"
                      >
                        •
                      </motion.span>
                    )}
                  </React.Fragment>
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block -rotate-90 top-[40%] -right-[6.5%] transform -translate-y-1/2 text-white font-syne tracking-wider pr-5">
        <span>AMIKA SUBASINGHE</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        className="absolute bottom-[10%] z-[100] flex flex-col items-center text-white"
      >
        {/* Small label */}
        <span className="font-syne text-sm lg:text-base mb-3 tracking-[0.2em]">
          scroll
        </span>

        {/* Mouse icon */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-10 w-6 border-2 border-white rounded-full flex items-start justify-center p-1"
        >
          <div className="h-2 w-1 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
