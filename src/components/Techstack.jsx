import { motion } from "framer-motion";

// Full tech stack data
const techStacks = {
  languages: [
    "PHP",
    "Dart",
    "Csharp",
    "Java",
    "Python",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Go",
    "Ruby",
    "Swift",
    "Kotlin",
  ].map((name) => ({
    name,
    src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name.toLowerCase()}/${name.toLowerCase()}-original.svg`,
  })),
  frameworks: [
    {
      name: "Laravel",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfitrjP8RaSyij0rDzOFvzl92--bwK-uGsw&s",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Flutter",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Spring Boot",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Angular",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "Vue.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "TailwindCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
  ],
  databases: [
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "SQLite",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "SQL Server",
      src: "https://cdn.freebiesupply.com/logos/large/2x/microsoft-sql-server-logo-svg-vector.svg",
    },
  ],
  cloud: [
    {
      name: "Azure",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Google Cloud",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ],
  os: [
    {
      name: "Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Kali Linux",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg",
    },
    {
      name: "Ubuntu",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png",
    },
    {
      name: "Debian",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg",
    },
    {
      name: "Windows Server",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "macOS",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png",
    },
    {
      name: "Android",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitLab",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "VSCode",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Visual Studio",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    },
    {
      name: "IntelliJ IDEA",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    },
    {
      name: "PhpStorm",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg",
    },
    {
      name: "PyCharm",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    },
    {
      name: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "NPM",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Yarn",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    },
    {
      name: "Composer",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Techstack = () => {
  return (
    <section className="w-full bg-[#111111] text-white py-20 px-6 md:px-20 relative overflow-hidden font-syne">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cabinetGrotesk">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main to-white">
              Stack
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with.
          </p>
        </motion.div>

        <div className="space-y-16">
          {Object.entries(techStacks).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3 capitalize font-syne">
                <span className="w-8 h-1 bg-main rounded-full" />
                {category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6"
              >
                {items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-[#1a1a1a] group flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 hover:border-main/50 hover:bg-main/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-main/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-full h-full object-contain relative z-10 drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors text-center">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;
