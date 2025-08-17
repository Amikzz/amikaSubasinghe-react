// About.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa";
import profilePic from "/src/assets/profile.jpg"; // replace with your profile image path
import cvFile from "/src/assets/Amika Indusara Lelwala Subasinghe.pdf"; // place your CV in assets
import Game from "/src/components/Game"; // Import the Game component

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const [isGameOpen, setIsGameOpen] = useState(false);


  return (
  <main className="w-full min-h-screen bg-zinc-900 text-zinc-50 flex flex-col items-center justify-start pt-40 px-6 md:px-20 relative">
      
      {/* Header Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full mb-16 gap-10"
        initial="hidden"
        animate="show"
        variants={fadeInUp}
      >
        <motion.img
          src={profilePic}
          alt="Amika Subasinghe"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          whileHover={{ scale: 1.05 }}
        />

        <div className="flex flex-col text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Amika Indusara Lelwala Subasinghe
          </h1>

          <ul className="text-lg leading-relaxed text-zinc-300 max-w-3xl space-y-2">
            <li>💻 Full-stack developer with hands-on experience in C#, Laravel, Flutter, and React.</li>
            <li>🚀 Passionate about building scalable applications and innovative digital solutions.</li>
            <li>🎯 Thrives in problem-solving, team collaboration, and continuous learning.</li>
            <li>🌍 Based in Colombo, Sri Lanka, aiming to make a global impact through technology.</li>
          </ul>

          {/* Integrated Game Button */}
          <div className="mt-4">
            <button
              className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg font-mono text-sm flex items-center gap-2 transition-all hover:scale-105 hover:from-cyan-500 hover:to-blue-600"
              onClick={() => setIsGameOpen(true)}
            >
              <span className="text-green-400">{`>`}</span>
              <span>Challenge Yourself</span>
              <span className="text-green-400">{`_`}</span>
            </button>
          </div>

        </div>
      </motion.div>

      {/* Game Modal */}
      <Game isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />


      {/* Sections */}
      <div className="max-w-6xl w-full flex flex-col gap-10">
        {/* Profile */}
       <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
      >
        <h2 className="text-xl font-semibold text-cyan-400 mb-6">Profile</h2>

        <p className="text-zinc-300 leading-relaxed mb-4">
          I’m a passionate <span className="font-semibold text-white">Software Engineering undergraduate</span> from Colombo, Sri Lanka, with a strong foundation in full-stack development. I love turning ideas into practical digital solutions and have hands-on experience across desktop, web, and mobile applications.
          I thrive in collaborative environments, constantly learning and applying new technologies to build efficient, user-friendly, and impactful solutions. My long-term goal is to become a professional software engineer and eventually start my own company, delivering innovative applications that make a real difference.
        </p>
      </motion.div>

        {/* Experience */}
        <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
      >
        <h2 className="text-xl font-semibold text-cyan-400 mb-6">Professional Experience</h2>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Software Management Trainee</h3>
            <p className="text-cyan-400 font-medium">Rangiri Holdings | 2024 - 2025</p>
          </div>
          <span className="mt-2 md:mt-0 text-sm bg-cyan-500 text-white px-3 py-1 rounded-full font-medium shadow-sm">
            Full-Stack Development
          </span>
        </div>

        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <p>Implemented 3 custom software solutions improving efficiency by 20%.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <p>Ensured 99% uptime of ERP systems and optimized system performance.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">•</span>
            <p>Resolved 95% of IT issues within SLA timelines, ensuring smooth operations.</p>
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-zinc-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">C#</span>
          <span className="bg-zinc-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Laravel</span>
          <span className="bg-zinc-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">React</span>
          <span className="bg-zinc-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
        </div>
      </motion.div>

       {/* Education */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
      >
        <h2 className="text-xl font-semibold text-cyan-400 mb-6">Education</h2>

        <ul className="space-y-6 text-zinc-300">
          <li className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div className="flex flex-col">
              <span className="font-semibold text-white">BEng. Software Engineering</span>
              <span className="text-zinc-400">Staffordshire University</span>
            </div>
            <span className="text-sm text-cyan-400 md:mt-0 mt-1">(2023 - Present)</span>
          </li>

          <li className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div className="flex flex-col">
              <span className="font-semibold text-white">CIMA Professional Qualification</span>
              <span className="text-zinc-400">CIMA</span>
            </div>
            <span className="text-sm text-cyan-400 md:mt-0 mt-1">(2023 - Present)</span>
          </li>

          <li className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div className="flex flex-col">
              <span className="font-semibold text-white">NCUK International Foundation Year</span>
              <span className="text-zinc-400">NCUK</span>
            </div>
            <span className="text-sm text-cyan-400 md:mt-0 mt-1">(2023)</span>
          </li>

          <li className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
            <div className="flex flex-col">
              <span className="font-semibold text-white">High School</span>
              <span className="text-zinc-400">Ananda College Colombo 10</span>
            </div>
            <span className="text-sm text-cyan-400 md:mt-0 mt-1">(2021 - 2024)</span>
          </li>
        </ul>
      </motion.div>

        {/* Skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">Skills</h2>

          <ul className="space-y-4 text-zinc-300">
            {/* Programming Languages */}
            <li className="flex flex-wrap gap-2">
              <span className="font-semibold text-white w-full">Programming Languages:</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">C#</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">PHP</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Java</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Python</span>
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">Dart</span>
            </li>

            {/* Frameworks */}
            <li className="flex flex-wrap gap-2">
              <span className="font-semibold text-white w-full">Frameworks & Libraries:</span>
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">Laravel</span>
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
            </li>

            {/* Tools & Platforms */}
            <li className="flex flex-wrap gap-2">
              <span className="font-semibold text-white w-full">Tools & Platforms:</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">AWS</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Git</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Linux</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">IntelliJ</span>
            </li>

            {/* Testing & Databases */}
            <li className="flex flex-wrap gap-2">
              <span className="font-semibold text-white w-full">Testing & Databases:</span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Cypress</span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">SQL</span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">QuickBooks</span>
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">Docker</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">Projects</h2>

          <ul className="space-y-4 text-zinc-300">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Bus Management System</span>
              <span className="text-zinc-400 text-sm">Flutter + Laravel + MySQL with real-time tracking and ticketing.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Invoicing & Order Management System</span>
              <span className="text-zinc-400 text-sm">Laravel-based, reduced processing time by 70%.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Menu Management System</span>
              <span className="text-zinc-400 text-sm">Automated menu planning, reduced time from 1 day to minutes.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Stock & Library Management Systems</span>
              <span className="text-zinc-400 text-sm">CRUD apps with C# and SQL Server.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Portfolio Website</span>
              <span className="text-zinc-400 text-sm">Built with HTML, CSS, JS showcasing frontend expertise.</span>
            </li>
          </ul>

          {/* Button to Projects Page */}
          <div className="mt-6">
            <a
              href="/projects"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl shadow-lg font-medium transition-colors duration-200"
            >
              View All Projects
            </a>
          </div>
        </motion.div>


        {/* Certificates */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">Certificates</h2>

          <ul className="space-y-4 text-zinc-300">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">What is Generative AI?</span>
              <span className="text-zinc-400 text-sm">LinkedIn</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Streamlining your work with Microsoft Copilot</span>
              <span className="text-zinc-400 text-sm">LinkedIn</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Spoken English</span>
              <span className="text-zinc-400 text-sm">Wendy Whatmore Academy</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Presentation Merit Award</span>
              <span className="text-zinc-400 text-sm">National Convention of Student’s Quality Circle</span>
            </li>
          </ul>
        </motion.div>

        {/* Interests */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">Interests & Initiatives</h2>

          <ul className="space-y-4 text-zinc-300">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Assistant Secretary</span>
              <span className="text-zinc-400 text-sm">Full Stack Computer Society (APIIT)</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Cohort Leader</span>
              <span className="text-zinc-400 text-sm">APIIT</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Captain</span>
              <span className="text-zinc-400 text-sm">U16 Football Team</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Past Member</span>
              <span className="text-zinc-400 text-sm">Leo Club of Mahanama College</span>
            </li>
          </ul>
        </motion.div>

        {/* References */}
       <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="bg-zinc-800 p-6 rounded-2xl shadow-xl border-l-4 border-cyan-400"
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-6">References</h2>

          <ul className="space-y-4 text-zinc-300">
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Mr. Vipula Anandapiya</span>
              <span className="text-zinc-400 text-sm">Director - Adlux Software</span>
              <span className="text-sm text-cyan-400">+94 778 833 795</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Mr. Alan Kumar</span>
              <span className="text-zinc-400 text-sm">Academic Administrator - APIIT</span>
              <span className="text-sm text-cyan-400">+94 717 356 488</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold text-white">Mr. Nihal Pathirage</span>
              <span className="text-zinc-400 text-sm">CEO - Rangiri Holdings</span>
              <span className="text-sm text-cyan-400">+94 777 079 697</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Social + Download */}
      <motion.div className="flex flex-col items-center gap-6 mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <a href={cvFile} download className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg">
          <FaDownload /> Download CV
        </a>
      </motion.div>
    </main>
  );
};

export default About;
