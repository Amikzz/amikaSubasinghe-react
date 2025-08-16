import { motion } from "framer-motion";

// Full tech stack data
const techStacks = {
  languages: [
    "PHP","Dart","Csharp","Java","Python","HTML5","CSS3","JavaScript","TypeScript","Go","Ruby","Swift","Kotlin"
  ].map(name => ({
    name,
    src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name.toLowerCase()}/${name.toLowerCase()}-original.svg`
  })),
  frameworks: [
    { name: "Laravel", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfitrjP8RaSyij0rDzOFvzl92--bwK-uGsw&s" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "TailwindCSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
  ],
  databases: [
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "SQL Server", src: "https://cdn.freebiesupply.com/logos/large/2x/microsoft-sql-server-logo-svg-vector.svg" },
  ],
  cloud: [
    { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  ],
  os: [
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Kali Linux", src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" },
    { name: "Ubuntu", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1024px-UbuntuCoF.svg.png" },
    { name: "Debian", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" },
    { name: "Windows Server", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    { name: "macOS", src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" },
    { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  ],
  tools: [
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "VSCode", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Visual Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    { name: "IntelliJ IDEA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "PhpStorm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg" },
    { name: "PyCharm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "NPM", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Yarn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" },
    { name: "Composer", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" },
  ],
};

// Framer Motion variants
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, type: "spring", stiffness: 150 },
  }),
};

const Techstack = () => {
  return (
<section className="w-full bg-zinc-900 text-zinc-50 py-10 md:py-20 px-6 md:px-20 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
        Tech Stack & Tools
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-cyan-400 capitalize">
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={iconVariants}
                  className="w-full h-20 flex items-center justify-center bg-zinc-700 rounded-lg hover:scale-110 transition-transform shadow-lg"
                >
                  <img src={item.src} alt={item.name} title={item.name} className="w-10 h-10 object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
