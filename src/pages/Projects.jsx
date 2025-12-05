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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group w-full mb-12 sm:mb-0"
    >
      {/* Semantic/Text Header - Placed above image for 'editorial' feel */}
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-3xl md:text-4xl font-medium text-white group-hover:text-main transition-colors duration-300 font-syne">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide uppercase font-syne">
          {project.tech.slice(0, 3).join(" • ")}
        </p>
      </div>

      {/* Image Container - Minimalist, no borders */}
      <a
        href={project.demo || project.github || "#"}
        target={project.demo || project.github ? "_blank" : "_self"}
        rel="noreferrer"
        className={`block relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 ${
          !project.demo && !project.github ? "cursor-default" : ""
        }`}
      >
        <div
          className="absolute inset-0 bg-zinc-800 animate-pulse z-10"
          style={{ display: loaded ? "none" : "block" }}
        />
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onLoad={() => setLoaded(true)}
        />

        {/* Subtle overlay for better text contrast if we needed text inside, but here just for depth */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Hover Action Overlay */}
        {(project.demo || project.github) && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <div className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 font-syne">
              View Project <FaExternalLinkAlt size={12} />
            </div>
          </div>
        )}
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="w-full min-h-screen bg-[#111111] text-white pt-32 px-6 md:px-12 lg:px-24 pb-20 relative overflow-hidden font-syne">
      {/* Large Minimal Header */}
      <div className="max-w-[1400px] mx-auto w-full z-10 mb-20 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9] font-syne">
            Featured <br />
            <span className="text-zinc-600">Projects.</span>
          </h1>
          <div className="w-full h-[1px] bg-zinc-800 mt-12" />
          <div className="flex justify-between items-start mt-6 text-zinc-400 text-sm md:text-base font-light">
            <p>Selected Works (2023-2025)</p>
            <p className="hidden md:block">Scroll to explore</p>
          </div>
        </motion.div>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${index % 2 === 1 ? "md:mt-32" : ""}`} // Stagger effect like the reference often has
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
