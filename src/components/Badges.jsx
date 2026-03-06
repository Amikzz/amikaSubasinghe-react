import { motion } from "framer-motion";

const badges = [
  {
    id: 1,
    name: "GEN AI Practitioner",
    image: "/assets/Badge1.webp",
  },
  {
    id: 2,
    name: "Cloud Practitioner",
    image: "/assets/Badge2.webp",
  },
  {
    id: 3,
    name: "Well Architected Proficient",
    image: "/assets/Badge3.webp",
  },
  { id: 4, name: "Postman Student Expert", image: "/assets/Badge4.webp" },
];

const Badges = () => {
  return (
    <section className="w-full bg-white dark:bg-[#111111] py-20 md:py-32 px-6 md:px-12 -mt-1 relative overflow-hidden">
      {/* Background Title "BADGES" */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0 select-none opacity-5"
      >
        <h1 className="text-[15vw] font-bold text-zinc-900 dark:text-white font-cabinetGrotesk leading-none tracking-tighter">
          BADGES
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-cabinetGrotesk text-zinc-900 dark:text-white mb-6 leading-none">
            HEY THERE <br />
            <span className="font-syne italic font-light">ACHIEVEMENTS</span>
          </h2>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative flex flex-col items-center justify-center"
            >
              {/* Glow Effect behind badge */}
              <div className="absolute inset-0 bg-main/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75" />

              {/* Badge Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 bg-zinc-100/50 dark:bg-zinc-900/50 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-main/50 transition-colors duration-300">
                <img
                  src={badge.image}
                  alt={badge.name}
                  width="192"
                  height="192"
                  loading="lazy"
                  className="w-full h-full object-contain p-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                />

                {/* Floating Particles (Optional polish) */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className="absolute inset-0 rounded-full border border-black/5 dark:border-white/5"
                />
              </div>

              {/* Label */}
              <h3 className="mt-6 text-lg font-syne text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white text-center transition-colors">
                {badge.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
