import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaGamepad,
} from "react-icons/fa";
import profilePic from "/assets/profile.jpg";
import cvFile from "/assets/Amika Indusara Lelwala Subasinghe.pdf";
import Game from "../components/Game";
import Techstack from "../components/Techstack";

const About = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Animation Variants
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <main className="w-full min-h-screen bg-[#111111] text-white flex flex-col pt-32 pb-20 relative overflow-hidden font-syne">
      {/* Background Ambience */}
      {/* Background Ambience Removed */}

      {/* Content Container - Hero */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 z-10">
        {/* HERO SECTION */}
        <motion.div
          className="flex flex-col mb-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Huge Title */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-[12vw] leading-[0.85] font-bold tracking-tighter text-white font-cabinetGrotesk uppercase"
              variants={textRevealVariants}
            >
              About Me
            </motion.h1>
          </div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            {/* Left: Profile Image & Actions */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div
                className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden group"
                variants={textRevealVariants}
              >
                <motion.img
                  src={profilePic}
                  alt="Amika Subasinghe"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  onLoad={() => setLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={textRevealVariants}
              >
                <a
                  href={cvFile}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-main transition-colors"
                >
                  <FaDownload size={14} /> Download CV
                </a>
                <button
                  onClick={() => setIsGameOpen(true)}
                  className="flex-none flex items-center justify-center w-14 h-14 bg-[#1a1a1a] text-main border border-zinc-800 rounded-lg hover:border-main transition-colors"
                >
                  <FaGamepad size={20} />
                </button>
              </motion.div>
            </div>

            {/* Right: Text Content */}
            <div className="lg:col-span-8 flex flex-col justify-end">
              <div className="overflow-hidden">
                <motion.p
                  className="text-3xl md:text-5xl font-light text-zinc-300 leading-[1.1] mb-12"
                  variants={textRevealVariants}
                >
                  I'm{" "}
                  <span className="text-white font-semibold">
                    Amika Indusara
                  </span>
                  , a full-stack developer & AI enthusiast based in Sri Lanka.
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  variants={textRevealVariants}
                  className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
                >
                  <p>
                    Currently an undergraduate at Staffordshire University, I
                    blend technical expertise with creative design to build
                    immersive web experiences.
                  </p>
                  <p>
                    My journey involves mastering everything from React &
                    Node.js to API interactions. My passion is in Backend
                    Development. I strongly believe in creating software that
                    not only functions perfectly but feels alive.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MARQUEE SECTION - Full Width */}
      <div className="w-full overflow-hidden py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm mb-24 z-10 relative">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold text-transparent px-8 font-cabinetGrotesk"
              style={{ WebkitTextStroke: "1px #333" }}
            >
              FULL-STACK DEV <span className="text-main mx-4">•</span> UI/UX
              DESIGN <span className="text-main mx-4">•</span> CREATIVE CODER{" "}
              <span className="text-main mx-4">•</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Content Container - Experience & Tech */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 z-10">
        {/* EXPERIENCE & EDUCATION LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 font-cabinetGrotesk">
              <span className="w-3 h-3 bg-main rounded-full" /> Experience
            </h2>

            <div className="space-y-0">
              {/* Item 1 */}
              <div className="group border-t border-zinc-800 py-6 hover:bg-zinc-900/30 transition-colors px-2">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-main transition-colors">
                    Junior Software Developer
                  </h3>
                  <span className="text-sm font-mono text-zinc-500">
                    2025 - Present
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Rangiri Holdings</p>
                  <span className="text-xs border border-zinc-800 px-2 py-1 rounded text-zinc-500">
                    React / Laravel
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group border-t border-zinc-800 py-6 hover:bg-zinc-900/30 transition-colors px-2">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-main transition-colors">
                    Trainee Developer
                  </h3>
                  <span className="text-sm font-mono text-zinc-500">
                    2024 - 2025
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-zinc-400">Rangiri Holdings</p>
                  <span className="text-xs border border-zinc-800 px-2 py-1 rounded text-zinc-500">
                    ERP Systems
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 font-cabinetGrotesk">
              <span className="w-3 h-3 bg-white rounded-full" /> Education
            </h2>

            <div className="space-y-0">
              {/* Item 1 */}
              <div className="group border-t border-zinc-800 py-6 hover:bg-zinc-900/30 transition-colors px-2">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    BEng. Software Engineering
                  </h3>
                  <span className="text-sm font-mono text-zinc-500">
                    2023 - Present
                  </span>
                </div>
                <p className="text-zinc-400">Staffordshire University</p>
              </div>

              {/* Item 2 */}
              <div className="group border-t border-zinc-800 py-6 hover:bg-zinc-900/30 transition-colors px-2">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    Trainee Full Stack Dev
                  </h3>
                  <span className="text-sm font-mono text-zinc-500">
                    2025 - Present
                  </span>
                </div>
                <p className="text-zinc-400">University of Moratuwa</p>
              </div>

              {/* Item 3 */}
              <div className="group border-t border-zinc-800 py-6 hover:bg-zinc-900/30 transition-colors px-2">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    CIMA Professional
                  </h3>
                  <span className="text-sm font-mono text-zinc-500">
                    2023 - Present
                  </span>
                </div>
                <p className="text-zinc-400">CIMA</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TECH STACK */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center font-cabinetGrotesk text-white/40 uppercase tracking-widest">
            Technical Toolkit
          </h2>
          <Techstack />
        </div>
      </div>

      <Game isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </main>
  );
};

export default About;
