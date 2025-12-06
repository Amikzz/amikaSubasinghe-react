import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

// Text Reveal Animation Variant
const reveal = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  // Find next project for the footer navigation
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
    window.scrollTo(0, 0);
  }, [id, project, navigate]);

  if (!project) return null;

  return (
    <div className="bg-[#111111] text-white min-h-screen font-cabinet overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        {/* Title */}
        <div className="mb-12 lg:mb-24">
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 leading-none"
          >
            <div className="overflow-hidden pb-4">
              <motion.span variants={reveal} className="block leading-tight">
                {project.title}
              </motion.span>
            </div>
          </motion.h1>

          <div className="mt-12 border-t border-zinc-800 pt-8">
            <h2 className="text-xl md:text-2xl font-medium mb-8 text-zinc-400">
              Overview
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="overflow-hidden md:w-2/3">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="max-w-full"
                >
                  <p className="text-lg md:text-xl leading-relaxed text-zinc-200 text-justify">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              <div className="overflow-hidden md:w-1/3">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col gap-4"
                >
                  {(project.demo || project.github) && (
                    <div className="flex flex-wrap gap-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105"
                        >
                          Live Site <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-2 border border-zinc-700 hover:border-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
                        >
                          GitHub <FaGithub size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.screenshots &&
            project.screenshots.map((shot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
              >
                <img
                  src={shot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
        </div>
      </section>

      {/* --- INFO / TECH --- */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Tech Stack */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 font-syne"
            >
              Tech Stack
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300 text-sm md:text-base hover:border-zinc-600 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Role / Description Extension */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 font-syne"
            >
              Role &amp; Context
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-zinc-400 leading-relaxed"
            >
              This project highlights modern web development practices.
              {project.licensed
                ? " Developed as a licensed commercial product."
                : " A personal or open-source initiative."}{" "}
              Focusing on performance, scalability, and user experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- NEXT PROJECT NAV --- */}
      <section className="py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="text-zinc-500 mb-6 text-xl">Next Project</p>
          <Link
            to={`/project/${nextProject.id}`}
            className="group inline-block overflow-visible" // Ensure letters aren’t clipped
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold group-hover:text-zinc-400 transition-colors duration-300 font-syne leading-[1.05]">
              {nextProject.title}
            </h2>
            <div className="w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-4 origin-center"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
