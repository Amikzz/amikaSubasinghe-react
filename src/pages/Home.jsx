import { motion } from "framer-motion";
import { FaLayerGroup, FaDesktop, FaServer, FaCloud } from "react-icons/fa";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Content from "../components/Content";
import Badges from "../components/Badges";
import SelectedProjects from "../components/SelectedProjects";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Home = () => {
  const experiences = [
    {
      id: "01",
      title: "Full Stack Development",
      description:
        "Building scalable and high-performance web applications using modern tech stacks.",
      icon: <FaLayerGroup />,
    },
    {
      id: "02",
      title: "UI/UX & Frontend",
      description:
        "Creating immersive and responsive web experiences with robust frontend and backend integration.",
      icon: <FaDesktop />,
    },
    {
      id: "03",
      title: "API Development",
      description:
        "Designing secure and efficient RESTful and GraphQL APIs for seamless data communication.",
      icon: <FaServer />,
    },
    {
      id: "04",
      title: "Cloud Engineering",
      description:
        "Deploying and managing scalable cloud infrastructure using AWS and modern DevOps practices.",
      icon: <FaCloud />,
    },
  ];

  return (
    <main className="w-full bg-[#111111] text-white">
      <SEO
        title="Portfolio"
        description="Amika Subasinghe, a Full Stack Developer and Software Engineer from Sri Lanka, builds scalable and high-performance web and mobile applications using modern technologies like React, Node.js, Laravel, Flutter, and AWS. Explore his portfolio showcasing projects in web development, API integration, cloud engineering, and responsive UI/UX design."
        keywords="Amika Subasinghe, Full Stack Developer Sri Lanka, Software Engineer, Web Developer, Mobile App Developer, C#, PHP, Laravel, Flutter, React, Node.js, JavaScript, HTML, CSS, MySQL, SQL Server, REST API, API Development, Object-Oriented Programming, CRUD Applications, Cloud Computing, AWS, Git, Agile, Scrum, Frontend Development, Backend Development, UI/UX Design, Responsive Design, Jetstream, Blade, Tailwind CSS, Alpine.js, System Architecture, Project Management, Portfolio, Software Projects"
      />

      <h1 className="sr-only">
        Amika Subasinghe - Software Engineer & Full-Stack Developer
      </h1>

      <div className="sticky top-0 h-screen z-0">
        <Hero />
      </div>

      {/* About Section */}
      <section className="relative w-full py-20 lg:py-40 px-4 flex flex-col items-center justify-center z-30 bg-[#111111] text-white rounded-t-[3rem] lg:rounded-t-[5rem] -mt-10 overflow-hidden">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-main/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[95vw] lg:max-w-[85vw] mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-cabinetGrotesk font-bold uppercase tracking-tighter leading-[0.85] text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] text-zinc-400 text-center mix-blend-lighten"
          >
            BUILDING <span className="text-white">SCALABLE</span> APPS,{" "}
            ENGINEERED FOR <span className="text-main">PERFORMANCE</span>,{" "}
            MASTERING THE <span className="text-white">FULL STACK</span> FROM{" "}
            <span className="text-main">SRI LANKA</span> TO THE WORLD.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 max-w-3xl text-zinc-400 font-syne text-lg md:text-2xl md:leading-relaxed"
          >
            I specialize in crafting high-performance web and mobile
            applications utilizing modern technologies including{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Node.js</span>,{" "}
            <span className="text-white font-medium">Laravel</span>,{" "}
            <span className="text-white font-medium">Flutter</span>, and{" "}
            <span className="text-white font-medium">AWS</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14"
          >
            <Link to="/about">
              <button className="px-10 py-5 rounded-full bg-main text-white text-xl font-bold font-cabinetGrotesk hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,170,255,0.3)] lg:cursor-pointer">
                About Me
                <span className="text-2xl leading-none relative -top-[2px]">
                  &rarr;
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Experience / Services Section */}
      <section className="relative w-full py-20 lg:py-32 bg-[#111111] text-white z-30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-syne mb-6">
            My Experience
          </h2>
          <div className="w-full h-[1px] bg-zinc-800"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl 
                   hover:border-main/50 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-full bg-main/10 flex items-center justify-center text-main text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-zinc-500 font-syne text-xl">
                  {item.id}
                </span>
              </div>

              <h3 className="text-3xl font-bold font-cabinetGrotesk mb-6 group-hover:text-main transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-zinc-400 font-syne leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience / Timeline */}
      <Content />

      {/* Selected Projects */}
      <SelectedProjects />

      {/* Badges Section */}
      <Badges />
    </main>
  );
};

export default Home;
