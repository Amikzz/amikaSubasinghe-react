import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import codingAnimation from "../assets/coding.json";
import { motion } from "framer-motion";

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
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  const accentOpacity = Math.max(0, 0.1 - scrollY / 400);

  // Prevent horizontal scrolling
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-zinc-900 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-24 md:pt-0 relative overflow-hidden">
      
      {/* Left Side: Lottie Animation */}
      <motion.div
        className="flex-1 flex items-center justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-72 md:w-96 lg:w-[28rem] xl:w-[32rem] h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] relative rounded-3xl overflow-hidden">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Right Side: Introduction */}
      <div className="flex-1 w-full max-w-full text-center md:text-left text-zinc-50">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I&apos;m Amika
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium text-cyan-400 mb-6 min-h-[2.5rem]"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <Typewriter
            words={["Software Engineer", "Full Stack Developer", "Tech Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          className="text-zinc-300 text-base md:text-lg max-w-md text-justify mx-auto md:mx-0"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          A full-stack developer with a passion for crafting efficient, interactive, and scalable applications. 
          From backend systems in Laravel and C# to dynamic frontends in Flutter and React, I merge technical skill with creativity to bring ideas to life. 
          Explore my projects to see how I transform concepts into real-world solutions.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center md:justify-start"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-cyan-500 text-zinc-900 font-semibold rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 w-full sm:w-auto text-center"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-cyan-500 rounded-full blur-[200px] animate-pulse-slow"
          style={{ opacity: accentOpacity }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-pink-500 rounded-full blur-[200px] animate-pulse-slow"
          style={{ opacity: accentOpacity }}
        />
      </div>
    </section>
  );
};

export default Hero;
