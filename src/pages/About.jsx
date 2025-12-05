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

const About = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="w-full min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-start pt-32 px-6 md:px-20 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-[100px]" />
      </div>

      <motion.div
        className="max-w-7xl w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16"
        >
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <motion.img
              src={profilePic}
              alt="Amika Subasinghe"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-zinc-700 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              onLoad={() => setLoaded(true)}
            />
          </div>

          {/* Intro Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Amika Indusara
            </h1>
            <p className="text-xl text-zinc-400 mb-6 font-light">
              Software Engineering Undergraduate & Full Stack Developer
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={cvFile}
                download
                className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
              >
                <FaDownload size={14} /> Download CV
              </a>
              <button
                onClick={() => setIsGameOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white border border-zinc-800 rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                <FaGamepad size={16} className="text-blue-400" /> Play Minigame
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-3xl md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full" /> About Me
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              I’m a passionate Software Engineering undergraduate from Colombo,
              Sri Lanka, with a strong foundation in full-stack development. I
              thrive in collaborative environments, constantly learning and
              applying new technologies to build efficient, user-friendly, and
              impactful solutions. My long-term goal is to become a professional
              software engineer and eventually start my own company.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-violet-500 rounded-full" /> Experience
            </h2>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-lg font-bold text-white">
                  Junior Software Developer
                </h3>
                <p className="text-blue-400 text-sm mb-2">
                  Rangiri Holdings | 2025 - Present
                </p>
                <p className="text-zinc-400 text-sm">
                  Leading large-scale projects enhancing operational efficiency
                  using Laravel, React, and C#.
                </p>
              </div>
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <h3 className="text-lg font-bold text-white">
                  Trainee Developer
                </h3>
                <p className="text-zinc-400 text-sm mb-2">
                  Rangiri Holdings | 2024 - 2025
                </p>
                <p className="text-zinc-400 text-sm">
                  Developed invoicing and vehicle management systems, optimizing
                  ERP platforms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-emerald-500 rounded-full" /> Education
            </h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">
                    BEng. Software Engineering
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    Staffordshire University
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                  2023-Present
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">
                    Trainee Full Stack Dev
                  </h3>
                  <p className="text-zinc-500 text-sm">
                    University of Moratuwa
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                  2025-Present
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">CIMA Professional</h3>
                  <p className="text-zinc-500 text-sm">CIMA</p>
                </div>
                <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                  2023-Present
                </span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-3xl md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-pink-500 rounded-full" /> Technical
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C#",
                    "C++",
                    "TypeScript",
                    "PHP",
                    "Java",
                    "Python",
                    "Dart",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Laravel",
                    "Flutter",
                    "React",
                    "Node.js",
                    "Tailwind CSS",
                    "Angular",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-zinc-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Game Modal */}
      <Game isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </main>
  );
};

export default About;
