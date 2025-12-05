import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
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
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
      rotateX: 90,
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

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden z-20">
      {/* Social Links & Lines */}
      <div className="z-50 flex-col flex lg:h-[80vh] h-[85vh] px-5 lg:px-9 pt-[5rem] lg:-mt-3 xl:mt-10 py-5 lg:py-10 items-center left-0 top-0 absolute justify-end lg:justify-between">
        <div className="hidden lg:block lg:mb-14 h-[40vh] w-[1px] bg-gray-700 relative">
          <div className="absolute bottom-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-black rounded-[50%] w-[.3rem]"></div>
          <div className="absolute top-0 right-[50%] transform translate-x-[50%] h-[.3rem] bg-black rounded-[50%] w-[.3rem]"></div>
        </div>
        <div className="flex z-50 w-full flex-col gap-6 lg:gap-5 xl:gap-8">
          <a
            href="#"
            className="text-white hover:text-main transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-white hover:text-main transition-colors text-2xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href="#"
            className="text-white hover:text-main transition-colors text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center z-50">
        <div className="overflow-hidden pb-2">
          <AnimatedText
            text="Hi! i’m Amika"
            variants={letterAnimationFade}
            className="font-syne text-[1.2rem] xs:text-[1.5rem] sm:text-[1.6rem] md:text-[1.65rem] lg:text-[1.6rem] text-center mb-1 text-white leading-[1.3] flex justify-center" // added flex justify-center for proper centering
          />
        </div>

        <div className="overflow-hidden pb-3">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.05, delayChildren: 0.8 }, // Delayed start for second line
              },
            }}
            className="font-syne text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] text-center text-white leading-[1.15] flex justify-center flex-wrap"
          >
            {"Software Engineer".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden pb-3">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.05, delayChildren: 1.5 }, // Delayed start for third line
              },
            }}
            className="font-syne text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] text-center text-white leading-[1.15] flex justify-center flex-wrap"
          >
            {"Full-stack Developer.".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                style={{
                  display: "inline-block",
                  transformStyle: "preserve-3d",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Vertical Name */}
      <div className="absolute hidden lg:block -rotate-90 top-[40%] -right-[6.5%] transform -translate-y-1/2 text-white font-syne tracking-wider pr-5">
        <span>AMIKA SUBASINGHE</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
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
