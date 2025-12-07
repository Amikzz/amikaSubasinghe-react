import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const SelectedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(2); // Default center open

  // Select the first 5 projects
  const selectedProjects = projects.slice(0, 5);

  return (
    <section className="w-full bg-[#111111] py-20 md:py-32 -mt-1 overflow-hidden relative font-syne z-30">
      {/* Background Title "PROJECTS" */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none opacity-5">
        <h1 className="text-[15vw] font-bold text-white font-cabinetGrotesk leading-none tracking-tighter">
          PROJECTS
        </h1>
      </div>

      <div className="max-w-[95rem] mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl md:text-7xl font-bold font-cabinetGrotesk text-white mb-6 leading-none">
            WHAT UP <br />
            <span className="font-syne italic font-light">PROJECTS</span>
          </h2>
        </div>

        {/* Horizontal Accordion Container */}
        <div className="w-full flex flex-col md:flex-row h-[800px] md:h-[600px] gap-2 md:gap-4">
          {selectedProjects.map((project, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.id}
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer ease-spring-smooth transition-all duration-500
                  w-full h-[180px] md:w-auto md:h-auto
                  ${
                    isHovered
                      ? "md:flex-[2.5]" // Expanded state (Desktop only)
                      : "md:flex-[0.5] opacity-100 md:opacity-60 md:hover:opacity-100" // Collapsed state (Opacity full on mobile)
                  }
                `}
                style={{
                  minHeight: "100px", // Ensure visibility on mobile
                }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="block w-full h-full relative"
                >
                  {/* Image Background */}
                  <motion.img
                    layoutId={`img-${project.id}`}
                    src={project.screenshots?.[0] || project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                    style={{
                      scale: isHovered ? 1.05 : 1,
                      filter: isHovered
                        ? "brightness(1)"
                        : window.innerWidth < 768
                        ? "brightness(0.7)"
                        : "brightness(0.5) grayscale(50%)", // Brighter on mobile by default
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 pointer-events-none transition-opacity"
                    style={{
                      opacity: isHovered || window.innerWidth < 768 ? 0.8 : 0.6,
                    }}
                  />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Collapsed Vertical Title (Desktop Only) */}
                    {!isHovered && (
                      <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-70 pointer-events-none">
                        <h3 className="text-4xl font-bold text-transparent font-cabinetGrotesk whitespace-nowrap -rotate-90 tracking-widest uppercase border-text">
                          {/* Outline Text Effect handled by CSS or standard text for now */}
                          <span
                            style={{
                              WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                            }}
                          >
                            {project.title.substring(0, 15)}...
                          </span>
                        </h3>
                      </div>
                    )}

                    {/* Content Wrapper (Desktop Expanded Only) */}
                    <AnimatePresence mode="popLayout">
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="hidden md:block relative z-10"
                        >
                          {/* Project ID/Index */}
                          <span className="block text-white/50 text-sm font-mono mb-2">
                            0{index + 1}
                          </span>

                          <h3 className="text-3xl md:text-5xl font-bold text-white font-cabinetGrotesk leading-none mb-4">
                            {project.title}
                          </h3>

                          <p className="text-white/80 font-syne text-sm md:text-base max-w-lg mb-6 line-clamp-2 md:line-clamp-none">
                            {project.subtitle ||
                              "A cutting-edge digital experience designed for impact."}
                          </p>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.slice(0, 4).map((t, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs text-white/90"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 group/btn">
                            <span className="text-white font-bold font-syne uppercase tracking-wider text-sm">
                              View Case Study
                            </span>
                            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transform -rotate-45"
                              >
                                <path
                                  d="M1 6H11M11 6L6 1M11 6L6 11"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile Static Content (Visible on Mobile Only) */}
                    <div className="md:hidden">
                      <h3 className="text-2xl font-bold text-white font-cabinetGrotesk drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/70 font-syne text-sm mt-1">
                        {project.subtitle || "Digital Experience"}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-20">
          <Link to="/projects">
            <button className="px-8 py-4 rounded-full border border-white/20 text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 font-syne group">
              View All Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
