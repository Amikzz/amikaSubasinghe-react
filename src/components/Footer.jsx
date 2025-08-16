const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left - Logo & Branding */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-3">
            <img src="/icon.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-mono text-blue-400 tracking-wide">
              &lt;Amika.Dev /&gt;
            </span>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs text-center md:text-left">
            Passionate software engineer crafting modern apps, tools, and experiences with React, Tailwind, and love for clean code.
          </p>
        </div>

        {/* Navigation / Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="font-mono text-blue-400 text-sm mb-3">Navigation</h3>
          <nav className="flex flex-col space-y-2 text-sm font-mono">
            <a href="#hero" className="text-zinc-400 hover:text-blue-400 transition" onClick={(e) => scrollToSection(e, "hero")}>Top</a>
            <a href="#code" className="text-zinc-400 hover:text-blue-400 transition" onClick={(e) => scrollToSection(e, "code")}>Code</a>
            <a href="#content" className="text-zinc-400 hover:text-blue-400 transition" onClick={(e) => scrollToSection(e, "content")}>Timeline</a>
            <a href="#techstack" className="text-zinc-400 hover:text-blue-400 transition" onClick={(e) => scrollToSection(e, "techstack")}>Techstack</a>
          </nav>
        </div>

        {/* Resources / Popular Footer Links */}
        <div className="text-center md:text-left">
          <h3 className="font-mono text-blue-400 text-sm mb-3">Resources</h3>
          <ul className="space-y-2 text-sm font-mono">
            <li><a href="#about" className="text-zinc-400 hover:text-blue-400 transition">About</a></li>
            <li><a href="#projects" className="text-zinc-400 hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="text-zinc-400 hover:text-blue-400 transition">Contact</a></li>
            <li><a href="/privacy" className="text-zinc-400 hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right - Social Icons with SVGs */}
        <div className="text-center md:text-left">
          <h3 className="font-mono text-blue-400 text-sm mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5 text-zinc-400">
            {/* GitHub */}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.805 5.625-5.476 5.921.43.37.814 1.096.814 2.21v3.285c0 .319.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.63-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.268c-.828 0-1.5-.674-1.5-1.5s.672-1.5 1.5-1.5 1.5.674 1.5 1.5-.672 1.5-1.5 1.5zm13 10.268h-2.5v-4.5c0-1.079-.022-2.467-1.504-2.467-1.504 0-1.735 1.175-1.735 2.387v4.58h-2.5v-9h2.4v1.233h.034c.334-.635 1.153-1.304 2.373-1.304 2.537 0 3.003 1.67 3.003 3.839v5.232z"/>
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:your@email.com" className="hover:text-blue-400 transition transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.065l-11-6.065v12h22v-12l-11 6.065zm0-1.065l11-6h-22l11 6zm0-10.065l-12 6v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14l-12-6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-xs text-zinc-500 py-4 border-t border-zinc-800 font-mono">
        © {new Date().getFullYear()} Amika Subasinghe • Built with ❤️ using React.
      </div>
    </footer>
  );
};

const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default Footer;
