import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Content from "../components/Content";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-full bg-[#111111] text-white overflow-hidden">
      <Hero />

      {/* About Section */}
      <section className="relative w-full py-20 lg:py-40 px-4 flex flex-col items-center justify-center z-30 bg-white text-black rounded-t-[3rem] lg:rounded-t-[5rem] -mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold font-cabinetGrotesk leading-tight mb-10"
          >
            I'm Amika — a Full Stack Developer crafting fast, scalable, and
            immersive digital experiences.
          </motion.h2>
          <Link to="/about">
            <button className="px-8 py-4 rounded-full border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-all duration-300">
              About Me
            </button>
          </Link>
        </div>
      </section>

      <Marquee />

      {/* Works Preview */}
      <section className="w-full py-20 lg:py-40 px-4 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-bold font-syne">
              Selected Works
            </h2>
            <Link
              to="/projects"
              className="hidden md:block text-lg underline hover:text-main"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Real Project Cards */}
            <Link to="/projects" className="group cursor-pointer block">
              <div className="w-full aspect-video bg-zinc-800 rounded-2xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="text-white text-xl font-bold">
                    View Project
                  </span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                  alt="SkillSwap Platform"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-main transition-colors">
                SkillSwap Platform
              </h3>
              <p className="text-zinc-400">Full Stack Development</p>
            </Link>

            <Link
              to="/projects"
              className="group cursor-pointer block md:mt-20"
            >
              <div className="w-full aspect-video bg-zinc-800 rounded-2xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="text-white text-xl font-bold">
                    View Project
                  </span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
                  alt="Bus Management System"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-main transition-colors">
                Bus Management System
              </h3>
              <p className="text-zinc-400">Java Application</p>
            </Link>
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link to="/projects" className="text-lg underline hover:text-main">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Experience / Timeline */}
      <Content />
    </main>
  );
};

export default Home;
