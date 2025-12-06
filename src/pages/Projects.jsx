import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

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
      {/* Semantic/Text Header */}
      <div className="mb-6 flex flex-col gap-1">
        <h3 className="text-3xl md:text-4xl font-medium text-white group-hover:text-main transition-colors duration-300 font-syne">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm md:text-base font-light tracking-wide uppercase font-syne">
          {project.tech.slice(0, 3).join(" • ")}
        </p>
      </div>

      {/* Image Container */}
      <Link
        to={`/project/${project.id}`}
        className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-zinc-900"
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <div className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 font-syne">
            View Details <FaExternalLinkAlt size={12} />
          </div>
        </div>
      </Link>
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
            <div key={index} className={`${index % 2 === 1 ? "md:mt-32" : ""}`}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
