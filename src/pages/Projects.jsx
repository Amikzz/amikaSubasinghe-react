import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FaArrowRight } from "react-icons/fa";

const ProjectListItem = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative border-t border-zinc-800 transition-colors duration-300"
    >
      <Link
        to={`/project/${project.id}`}
        className="block w-full h-full relative overflow-hidden"
      >
        {/* --- CURTAIN IMAGE REVEAL --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="relative w-full h-full overflow-hidden">
            {/* The "Curtain" - initially collapsed height or masked */}
            <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10" />

            {/* Image - reveals with the curtain or just fades/slides in */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          </div>
        </div>

        <div className="relative z-30 px-6 md:px-12 lg:px-24 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Title & Index */}
          <div className="flex items-start md:items-center gap-6 md:gap-12">
            <span className="text-zinc-600 group-hover:text-zinc-400 font-syne text-lg md:text-xl font-light transition-colors duration-300">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-cabinet text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
              {project.title}
            </h2>
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-8 md:gap-16">
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-sm font-syne uppercase tracking-wider">
                Services
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors text-base font-medium">
                {project.tech[0]} &bull; {project.tech[1]}
              </span>
            </div>

            {/* Arrow Icon */}
            <div className="text-white text-2xl md:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="w-full min-h-screen bg-[#111111] text-white pt-32 pb-20 relative font-syne cursor-default">
      {/* --- HEADER --- */}
      <div className="px-6 md:px-12 lg:px-24 mb-20 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9] font-syne">
            Selected <br />
            <span className="text-zinc-600">Projects.</span>
          </h1>
        </motion.div>
      </div>

      {/* --- PROJECT LIST --- */}
      <div className="w-full border-b border-zinc-800">
        {projects.map((project, index) => (
          <ProjectListItem key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 md:px-12 lg:px-24 mt-12 text-zinc-500 text-sm font-light flex justify-between">
        <p>&copy; 2025 Amika Subasinghe</p>
        <p>Scroll to explore</p>
      </div>
    </main>
  );
};

export default Projects;
