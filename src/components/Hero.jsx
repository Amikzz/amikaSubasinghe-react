import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
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
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="font-syne text-[1.2rem] xs:text-[1.5rem] sm:text-[1.6rem] md:text-[1.65rem] lg:text-[1.6rem] text-center mb-1 text-white"
          >
            Hi! i’m Amika
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="font-syne text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] text-center text-white leading-none"
          >
            Software Engineer
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-syne text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] text-center text-white leading-none"
          >
            Full-stack Developer.
          </motion.h1>
        </div>
      </div>

      {/* Vertical Name */}
      <div className="absolute hidden lg:block -rotate-90 top-[40%] -right-[6.5%] transform -translate-y-1/2 text-white font-syne tracking-wider pr-5">
        <span>AMIKA SUBASINGHE</span>
      </div>

      {/* Scroll Down */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="letter-spacing-[1em] font-syne lg:text-2xl text-xl cursor-default absolute z-[100] bottom-[10%] text-white"
      >
        scroll down
      </motion.h1>
    </div>
  );
};

export default Hero;
