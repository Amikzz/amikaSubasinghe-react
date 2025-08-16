import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import rocketAnimation from "../assets/rocket.json";

const timelineData = [
  { year: "2020", title: "Completed Ordinary Level Exams" },
  { year: "2022", title: "Completed NCUK Program" },
  { year: "2023", title: "Started BEng in Software Engineering at APIIT" },
  { year: "2024", title: "Software Engineering Intern at Rangiri Holdings" },
  { year: "2025", title: "Software Developer & Analyst at Rangiri Holdings" },
];

const TimelineItem = ({ year, title, isRight, refProp }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  if (inView) controls.start("visible");

  const variants = {
    hidden: { opacity: 0, x: isRight ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={(el) => {
        ref(el); // Intersection observer
        if (refProp) refProp.current = el; // Store reference for rocket limits
      }}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`mb-16 flex items-start w-full ${isRight ? "justify-end" : "justify-start"}`}
    >
      <div className={`w-1/2 px-4 ${isRight ? "text-left" : "text-right"}`}>
        <p className="text-cyan-400 font-semibold text-lg mb-2">{year}</p>
        <p className="text-white font-medium text-base md:text-lg">{title}</p>
      </div>
    </motion.div>
  );
};

const Content = () => {
  const timelineRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const [rocketLimits, setRocketLimits] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const calculateLimits = () => {
      if (firstItemRef.current && lastItemRef.current && timelineRef.current) {
        const top = firstItemRef.current.offsetTop;
        const bottom = lastItemRef.current.offsetTop;
        setRocketLimits({ top, bottom });
      }
    };
    calculateLimits();
    window.addEventListener("resize", calculateLimits);
    return () => window.removeEventListener("resize", calculateLimits);
  }, []);

  return (
    <section className="w-full bg-zinc-900 text-zinc-50 py-15 px-6 md:px-12 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
        My Journey
      </h2>

      <div ref={timelineRef} className="relative max-w-5xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-cyan-500 transform -translate-x-1/2" />

        {/* Rocket moving only between first and last timeline items */}
        {rocketLimits.bottom > rocketLimits.top && (
          <motion.div
            className="absolute left-1/2 w-12 h-12 transform -translate-x-1/2"
            animate={{ y: [rocketLimits.top, rocketLimits.bottom, rocketLimits.top] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lottie animationData={rocketAnimation} loop />
          </motion.div>
        )}

        {/* Timeline items */}
        {timelineData.map((item, idx) => (
          <TimelineItem
            key={idx}
            year={item.year}
            title={item.title}
            isRight={idx % 2 === 0}
            refProp={idx === 0 ? firstItemRef : idx === timelineData.length - 1 ? lastItemRef : null}
          />
        ))}
      </div>
    </section>
  );
};

export default Content;
