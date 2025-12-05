import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import { motion } from "framer-motion";
import { RiArrowDownLine } from "react-icons/ri";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        {/* Left Side: Introduction */}
        <div className="flex-1 text-center md:text-left mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm"
          >
            <span className="text-zinc-400 text-sm font-medium tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Amika
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-zinc-400 mb-8 h-8"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            I am a{" "}
            <span className="text-zinc-200">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "Tech Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed mb-10"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Crafting efficient, interactive, and scalable applications. From
            backend systems to dynamic frontends, I merge technical skill with
            creativity to bring ideas to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a
              href="/projects"
              className="px-8 py-3.5 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10 w-full sm:w-auto text-center"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side: Lottie Animation */}
        <motion.div
          className="flex-1 flex items-center justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
            {/* Abstract background shape behind animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 rounded-full blur-3xl" />
            <Lottie
              animationData={codingAnimation}
              loop={true}
              className="w-full h-full relative z-10 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <RiArrowDownLine size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
