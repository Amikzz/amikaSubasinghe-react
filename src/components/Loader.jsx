import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa6";
import Robot from "./Robot";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-zinc-900 dark:bg-[#111111] dark:text-white overflow-hidden"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Main Hello Text */}
      <motion.div
        className="relative z-50 text-6xl md:text-8xl lg:text-9xl font-righteous text-center mb-8"
        initial={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        }}
        animate={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        }}
      >
        Hello!
      </motion.div>

      {/* Interactive Robot */}
      <motion.div
        className="relative z-50 mb-12 pointer-events-auto cursor-default"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <Robot onButtonClick={() => console.log("Robot clicked!")} />
      </motion.div>

      {/* Bottom Branding */}
      <motion.div
        className="absolute bottom-12 flex flex-col items-center gap-2 z-50 text-zinc-500 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
        }}
      >
        <FaCrown className="text-xl text-[#00aaff]" />
        <span className="text-s font-megrim tracking-[0.2em] font-bold">
          LOAD AMIKA
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
