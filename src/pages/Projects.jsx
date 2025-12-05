import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "SkillSwap Platform",
    description:
      "SkillSwap is a comprehensive skill-sharing platform built with Flutter for the frontend and Laravel for the backend. The system enables users to offer their skills and book sessions with others securely. Integrated with a third-party payment API, it ensures safe financial transactions and includes secure authentication, a booking system, and a responsive dashboard.",
    image: "/assets/skillswap.jpg",
    tech: ["Flutter", "Laravel", "MySQL", "API Integration"],
    github: "https://github.com/Amikzz/project_skillswap.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Bus Management System",
    description:
      "The Bus Management System is a full-stack application developed to manage bus operations efficiently. Built using Laravel and Flutter, it handles bus schedules, live location tracking using Google Maps API, and ticket bookings for passengers. The system includes QR code-based ticket validation and a conductor panel.",
    image: "/assets/bus.jpg",
    tech: ["Laravel", "Flutter", "Google Maps API"],
    github: "https://github.com/Amikzz/rideeasyback.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Stock Management System",
    description:
      "The Stock Management System is a desktop-based application designed to streamline inventory management for small and medium-sized businesses. Developed using C# and SQL Server, it provides full CRUD operations, advanced search filters, reporting capabilities, and role-based authentication for secure access.",
    image: "/assets/stock.jpeg",
    tech: ["C#", "SQL Server", "WinForms"],
    github: "https://github.com/Amikzz/Stock-Management-System.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Library Management System",
    description:
      "This Library Management System is a desktop application built in C# with SQL Server backend to manage the operations of a modern library efficiently. It supports full CRUD functionality for books and users, advanced search filters, automated report generation, and secure authentication.",
    image: "/assets/library.jpg",
    tech: ["C#", "SQL Server", "WinForms"],
    github: "https://github.com/Amikzz/Library-Mananagement-System.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Personal Portfolio",
    description:
      "My Personal Portfolio is a modern, fully responsive website built with React and Vite to showcase my projects, skills, and professional experience. The platform features smooth animations powered by Framer Motion, an optimized UI with Tailwind CSS, and seamless navigation.",
    image: "/assets/portfolio.jpg",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amikzz/amikaSubasinghe-react.git",
    demo: "https://amikasubasinghe.com",
    licensed: false,
  },
  {
    title: "Invoice Management System",
    description:
      "A customized invoice management system developed for Nisu Creations using Laravel and MySQL. It streamlines invoice and delivery note generation, tracks orders, and manages client interactions efficiently. The system provides dashboards and reports to monitor sales and financial transactions.",
    image: "/assets/invoice.jpg",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
    github: null,
    demo: null,
    licensed: true,
  },
  {
    title: "Vehicle Management System",
    description:
      "A comprehensive vehicle management system developed for Rangiri Holdings using Laravel and MySQL. It manages service and maintenance records, monitors expenses, and provides interactive dashboards and reporting features for informed decision-making.",
    image: "/assets/vehicle.jpg",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "Chart.js"],
    github: null,
    demo: null,
    licensed: true,
  },
  {
    title: "Rangiri Aqua Website",
    description:
      "A modern, responsive company website designed for Rangiri Aqua using HTML, CSS, and JavaScript. The site features smooth animations, an intuitive user interface, and a clean layout to showcase company products and services effectively.",
    image: "/assets/rangiri.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: null,
    licensed: true,
  },
  {
    title: "Stretctec Production Management System",
    description:
      "An enterprise-grade system developed for Stretctec, a leading apparel raw material manufacturer. Built with Laravel and MySQL, it manages the entire production line and sample development process. The system streamlines customer inquiries, sample approvals, order tracking, and production workflows.",
    image: "/assets/production.jpg",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "Chart.js"],
    github: null,
    demo: null,
    licensed: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-[#1a1a1a] rounded-3xl overflow-hidden flex flex-col w-full group border border-white/5 hover:border-main/50 transition-all duration-300"
    >
      {/* Image wrapper */}
      <div className="relative w-full h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-zinc-800 animate-pulse"
          style={{ display: loaded ? "none" : "block" }}
        />
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover transition-transform duration-500"
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />

        {/* Tech Stack Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="bg-black/50 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/10"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="bg-black/50 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/10">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-main transition-colors font-syne">
            {project.title}
          </h3>
          {project.licensed && (
            <div
              className="bg-amber-500/10 text-amber-500 p-1.5 rounded-lg"
              title="Licensed Project"
            >
              <FaLock size={12} />
            </div>
          )}
        </div>

        <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-white/5 flex gap-3">
          {!project.licensed ? (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-main hover:text-black py-2.5 rounded-xl text-sm font-bold transition-colors"
              >
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            </>
          ) : (
            <div className="w-full py-2.5 text-center text-zinc-500 text-xs font-medium bg-zinc-900/50 rounded-xl border border-zinc-800/50">
              Enterprise Project • Private Codebase
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="w-full min-h-screen bg-[#111111] text-white flex flex-col items-center justify-start pt-32 px-6 md:px-12 lg:px-20 pb-20 relative overflow-hidden font-syne">
      <div className="max-w-7xl w-full z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-white">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A collection of my work ranging from personal experiments to
            enterprise-grade solutions.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
