import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Robot from "./Robot";

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

  return (
    <footer className="w-full bg-[#111111] text-white pt-16 pb-8 relative overflow-hidden font-syne flex flex-col justify-between min-h-[50vh]">
      {/* Decorative Grid/Lines (Optional subtle background) */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Main Content: Robot & Big Text */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full">
        {/* Intro Text */}
        <h2 className="text-lg md:text-2xl font-syne font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 opacity-80 select-none">
          Let's Create
        </h2>

        {/* Robot Container - Floating slightly above or intertwined */}
        <div className="relative z-20 mb-[-1vw] md:mb-[-0.5vw]">
          <Robot />
        </div>
      </div>

      {/* Bottom Bar: Links & Copyright */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 mt-10">
        {/* Socials */}
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-zinc-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm text-zinc-500 font-mono uppercase tracking-wider">
          <Link
            to="/"
            onClick={scrollToTop}
            className="hover:text-main transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={scrollToTop}
            className="hover:text-main transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={scrollToTop}
            className="hover:text-main transition-colors"
          >
            Works
          </Link>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="hover:text-main transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-zinc-600 text-xs text-center md:text-right font-mono">
          © {new Date().getFullYear()} Amika Subasinghe.
          <br className="hidden md:block" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
