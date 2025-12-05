import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] text-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <motion.div
            className="relative z-50 text-6xl md:text-8xl lg:text-9xl font-righteous text-center"
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            animate={{
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
              transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            Hello!
          </motion.div>

          {/* Background Curve Effect (Simplified) */}
          <motion.div
            className="absolute top-0 right-0 w-full h-full bg-[#111111] z-40"
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
