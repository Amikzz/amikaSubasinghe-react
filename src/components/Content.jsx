import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const isRight = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        relative flex w-full mb-20
        flex-col md:flex-row 
        ${isRight ? "md:flex-row-reverse" : ""}
        md:items-center md:justify-between
      `}
    >
      {/* CARD */}
      <div
        className={`
          w-full md:w-5/12 
          ${isRight ? "md:text-right" : "md:text-left"}
          text-left
        `}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-main/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-zinc-100 dark:bg-[#1a1a1a] p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-main/30 transition-all duration-300">
            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-main to-white mb-4 block font-cabinetGrotesk">
              {item.year}
            </span>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 font-syne group-hover:text-main transition-colors">
              {item.title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed font-syne">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* DOT - Always Centered */}
      <div className="absolute md:static left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center mt-6 md:mt-0">
        <div className="w-4 h-4 bg-white dark:bg-[#111111] border-2 border-main rounded-full z-20 relative">
          <div className="absolute inset-0 bg-main blur-md opacity-50" />
        </div>

        {/* Horizontal line connecting card to dot */}
        <div
          className={`
            hidden md:block 
            absolute top-1/2 -translate-y-1/2 h-[2px] bg-main/20 w-24 z-10
            ${
              isRight
                ? "left-1/2 md:-translate-x-[100%]"
                : "right-1/2 md:translate-x-[100%]"
            }
          `}
        />
      </div>

      {/* EMPTY SPACER for desktop alignment */}
      <div className="hidden md:block w-5/12" />
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
    <section className="w-full bg-zinc-50 dark:bg-[#111111] text-zinc-900 dark:text-white py-20 md:py-32 px-6 md:px-12 relative overflow-hidden font-syne">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-900/5 rounded-full blur-[120px]" />
      </div>

      {/* Background Title "JOURNEY" */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none opacity-5">
        <h1 className="text-[15vw] font-bold text-white font-cabinetGrotesk leading-none tracking-tighter">
          JOURNEY
        </h1>
      </div>

      <div
        className="max-w-6xl mx-auto relative z-10 flex flex-col items-center"
        ref={containerRef}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-cabinetGrotesk text-zinc-900 dark:text-white mb-6 leading-none">
            WHAT A <br />
            <span className="font-syne italic font-light">JOURNEY</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center Line */}
          <div
            className={`
              absolute 
              left-4 md:left-1/2 
              top-0 bottom-0 
              w-[2px] bg-zinc-300 dark:bg-zinc-800
              transform md:-translate-x-1/2
            `}
          >
            <motion.div
              className="w-full bg-main shadow-[0_0_20px_rgba(212,245,52,0.5)]"
              style={{ height: "100%", scaleY, transformOrigin: "top" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-32 py-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
