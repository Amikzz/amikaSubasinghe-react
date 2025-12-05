import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import rocketAnimation from "../assets/rocket.json";

const timelineData = [
  {
    year: "2020",
    title: "Completed Ordinary Level Exams",
    description:
      "Achieved 9 A passes, laying a strong foundation for my academic journey.",
  },
  {
    year: "2022",
    title: "Completed NCUK Program",
    description:
      "Successfully completed the International Foundation Year with distinction.",
  },
  {
    year: "2023",
    title: "Started BEng in Software Engineering",
    description:
      "Enrolled at APIIT to pursue my passion for software development.",
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    description:
      "Joined Rangiri Holdings, gaining hands-on experience in full-stack development.",
  },
  {
    year: "2025",
    title: "Software Developer & Analyst",
    description:
      "Promoted to a full-time role, leading key projects and system optimizations.",
  },
];

const TimelineItem = ({ item, index, isRight }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex items-center justify-between w-full mb-24 ${
        isRight ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Content Card */}
      <div className={`w-5/12 ${isRight ? "text-right" : "text-left"}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-main/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-main/30 transition-all duration-300">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-white mb-4 block font-cabinetGrotesk">
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-white mb-3 font-syne group-hover:text-main transition-colors">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-syne">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Center Dot - The "Cut" Point */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-4 h-4 bg-[#111111] border-2 border-main rounded-full z-20 relative">
          <div className="absolute inset-0 bg-main blur-md opacity-50" />
        </div>
        {/* Horizontal Line "Cutting" the timeline */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-[2px] bg-main/20 w-24 z-10 ${
            isRight ? "-left-12" : "-right-12"
          }`}
        />
      </div>

      {/* Empty Space for alignment */}
      <div className="w-5/12" />
    </motion.div>
  );
};

const Content = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="w-full bg-[#111111] text-white py-32 px-6 md:px-12 relative overflow-hidden font-syne">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cabinetGrotesk">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-white">
              Journey
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A timeline of my academic and professional milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Line - The "Highlighter" */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 transform -translate-x-1/2">
            <motion.div
              className="w-full bg-main shadow-[0_0_20px_rgba(212,245,52,0.5)]"
              style={{ height: "100%", scaleY, transformOrigin: "top" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-32 py-10">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isRight={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
