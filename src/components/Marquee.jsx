import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-main py-10 lg:py-20 text-black">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-10 text-[3rem] md:text-[6rem] lg:text-[8rem] font-bold font-cabinetGrotesk uppercase leading-none"
          variants={marqueeVariants}
          animate="animate"
        >
          <span className="flex items-center gap-10">
            FULL-STACK DEVELOPER <span className="text-4xl">✦</span> SOFTWARE
            ENGINEER <span className="text-4xl">✦</span>
          </span>
          <span className="flex items-center gap-10">
            AI ENGINEER <span className="text-4xl">✦</span> SOFTWARE ARCHITECT{" "}
            <span className="text-4xl">✦</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
