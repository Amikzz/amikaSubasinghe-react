import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Amikzz", label: "GitHub" },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/amika-subasinghe-a52b6a1a9",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/amikasubasinghe",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:amikasubasinghe@gmail.com",
      label: "Email",
    },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center gap-2 group"
            >
              <img
                src="/icon.png"
                alt="Logo"
                className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Amika<span className="text-blue-400">.Dev</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Crafting digital experiences with code and creativity. Specialized
              in building scalable web applications and modern user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-zinc-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Let's Work Together
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Have a project in mind? Let's turn your ideas into reality.
            </p>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-400 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Amika Subasinghe. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-500 hover:text-blue-400 text-xs transition-colors"
          >
            Back to Top
            <span className="p-1.5 rounded-full bg-zinc-900 border border-white/10 group-hover:border-blue-400 transition-colors">
              <FaArrowUp size={10} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
