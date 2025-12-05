import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

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
    <footer className="w-full bg-[#111111] text-white py-20 px-6 md:px-12 relative overflow-hidden font-syne">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-10">
        {/* Big Text */}
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter opacity-20 select-none">
          Let's Create
        </h2>

        {/* Socials */}
        <div className="flex gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-zinc-400 hover:text-main transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm md:text-base text-zinc-400">
          <Link
            to="/"
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            Works
          </Link>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-zinc-600 text-xs mt-10">
          © {new Date().getFullYear()} Amika Subasinghe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
