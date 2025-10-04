import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "SkillSwap Platform",
    description:
      "SkillSwap is a comprehensive skill-sharing platform built with Flutter for the frontend and Laravel for the backend. The system enables users to offer their skills and book sessions with others securely. Integrated with a third-party payment API, it ensures safe financial transactions and includes secure authentication, a booking system, and a responsive dashboard for users to track their engagements. The project demonstrates my ability to build a scalable, cross-platform application while leveraging modern frameworks and best practices in full-stack development.",
    image: "/assets/skillswap.jpg",
    tech: ["Flutter", "Laravel", "MySQL", "API Integration"],
    github: "https://github.com/Amikzz/project_skillswap.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Bus Management System",
    description:
      "The Bus Management System is a full-stack application developed to manage bus operations efficiently. Built using Laravel and Flutter, it handles bus schedules, live location tracking using Google Maps API, and ticket bookings for passengers. The system includes QR code-based ticket validation, a conductor panel for issuing tickets, and a safety alert feature for passengers. With this project, I implemented robust backend logic, secure database interactions, and a seamless cross-platform interface, demonstrating practical skills in building enterprise-grade transport solutions.",
    image: "/assets/bus.jpg",
    tech: ["Laravel", "Flutter", "Google Maps API"],
    github: "https://github.com/Amikzz/rideeasyback.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Stock Management System",
    description:
      "The Stock Management System is a desktop-based application designed to streamline inventory management for small and medium-sized businesses. Developed using C# and SQL Server, it provides full CRUD operations, advanced search filters, reporting capabilities, and role-based authentication for secure access. The system improves operational efficiency by automating stock updates, tracking inventory levels, and generating insightful reports, showcasing my ability to design reliable and maintainable software solutions in a Windows environment.",
    image: "/assets/stock.jpeg",
    tech: ["C#", "SQL Server", "WinForms"],
    github: "https://github.com/Amikzz/Stock-Management-System.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Library Management System",
    description:
      "This Library Management System is a desktop application built in C# with SQL Server backend to manage the operations of a modern library efficiently. It supports full CRUD functionality for books and users, advanced search filters, automated report generation, and secure authentication. The system simplifies administrative tasks, optimizes resource allocation, and enhances user experience for both librarians and library members, reflecting my expertise in designing practical, user-centric software solutions.",
    image: "/assets/library.jpg",
    tech: ["C#", "SQL Server", "WinForms"],
    github: "https://github.com/Amikzz/Library-Mananagement-System.git",
    demo: "#",
    licensed: false,
  },
  {
    title: "Personal Portfolio",
    description:
      "My Personal Portfolio is a modern, fully responsive website built with React and Vite to showcase my projects, skills, and professional experience. The platform features smooth animations powered by Framer Motion, an optimized UI with Tailwind CSS, and seamless navigation. It highlights my development capabilities and demonstrates proficiency in frontend design, component-based architecture, and interactive UI experiences, providing visitors with an engaging overview of my work and technical expertise.",
    image: "/assets/portfolio.jpg",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Amikzz/amikaSubasinghe-react.git",
    demo: "https://amikasubasinghe.com",
    licensed: false,
  },
  {
    title: "Invoice Management System",
    description:
      "A customized invoice management system developed for Nisu Creations using Laravel and MySQL. It streamlines invoice and delivery note generation, tracks orders, and manages client interactions efficiently. The system provides dashboards and reports to monitor sales and financial transactions, ensuring operational transparency and improved business workflows. This enterprise-grade solution highlights my ability to deliver secure, scalable, and highly functional software tailored for client-specific needs.",
    image: "/assets/invoice.jpg",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
    github: null,
    demo: null,
    licensed: true,
  },
  {
    title: "Vehicle Management System",
    description:
      "A comprehensive vehicle management system developed for Rangiri Holdings using Laravel and MySQL. It manages service and maintenance records, monitors expenses, and provides interactive dashboards and reporting features for informed decision-making. This enterprise-level project showcases my skills in building robust business systems with secure database handling, user role management, and dynamic visualizations to improve operational efficiency.",
    image: "/assets/vehicle.jpg",
    tech: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "Chart.js"],
    github: null,
    demo: null,
    licensed: true,
  },
  {
    title: "Rangiri Aqua Website",
    description:
      "A modern, responsive company website designed for Rangiri Aqua using HTML, CSS, and JavaScript. The site features smooth animations, an intuitive user interface, and a clean layout to showcase company products and services effectively. This project demonstrates my ability to deliver high-quality frontend solutions that combine design aesthetics with usability, providing an engaging user experience.",
    image: "/assets/rangiri.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: null,
    licensed: true,
  },
  {
    title: "Stretctec Production Management System",
    description:
      "An enterprise-grade system developed for Stretctec, a leading apparel raw material manufacturer. Built with Laravel and MySQL, it manages the entire production line and sample development process. The system streamlines customer inquiries, sample approvals, order tracking, and production workflows while providing dashboards and reporting for operational efficiency. This is the largest hands-on project I have developed, showcasing my ability to build scalable, real-world business solutions.",
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
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="bg-zinc-800 rounded-2xl shadow-lg overflow-hidden flex flex-col w-full"
    >
      {/* Image wrapper with fade-in */}
      <div className="relative w-full h-64 bg-zinc-700">
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.05 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
        />
        {/* Optional: Skeleton placeholder */}
        {!loaded && (
          <div className="absolute inset-0 bg-zinc-600 animate-pulse"></div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={`${
                project.licensed
                  ? "bg-zinc-700 text-gray-400"
                  : "bg-zinc-700 text-cyan-300"
              } text-xs px-3 py-1 rounded-full`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {!project.licensed && (
          <div className="flex space-x-4 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg text-sm"
            >
              <FaGithub /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-cyan-400 text-zinc-900 hover:bg-cyan-500 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <FaExternalLinkAlt /> Docs
            </a>
          </div>
        )}
        {project.licensed && (
          <div className="mt-auto text-zinc-400 italic text-sm">
            Licensed Project – Code & Docs Restricted
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="w-full min-h-screen bg-zinc-900 text-zinc-50 flex flex-col items-center justify-start pt-32 px-6 md:px-20 relative">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 text-center"
      >
        My Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-zinc-400 text-center mb-12 max-w-3xl"
      >
        Here are some of the projects I’ve worked on recently. Some are personal
        projects, while others are licensed enterprise solutions developed for companies.
      </motion.p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-6 md:px-12 lg:px-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
