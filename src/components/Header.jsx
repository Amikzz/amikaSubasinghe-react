import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { FaVolumeUp, FaVolumeMute, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import musicFile from "../assets/backgroundmusic.mp3";

const RotatedText = ({ text }) => {
  return (
    <div className="relative overflow-hidden cursor-pointer group">
      <div className="flex transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </div>
      <div className="absolute top-0 left-0 flex transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // --- Audio Logic ---
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.log("Autoplay blocked", error);
          setIsPlaying(false);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Playground", path: "/codeplayground" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 p-4 md:p-8 pt-[1.5rem] md:pt-[3rem] font-syne 
             bg-transparent md:bg-transparent mix-blend-normal md:mix-blend-difference"
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <NavLink to="/" className="z-50 mix-blend-difference">
          <img
            src="/icon.webp"
            alt="Logo"
            className="w-[1.7rem] lg:w-[1.9rem] cursor-pointer mix-blend-difference"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <span className="hidden font-bold text-xl mix-blend-difference text-white">
            A.
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 justify-end w-full mix-blend-difference"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-lg font-medium overflow-hidden text-white mix-blend-difference"
            >
              <RotatedText text={link.name} />
            </NavLink>
          ))}

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="ml-2 text-white hover:text-main transition-colors mix-blend-difference opacity-80 hover:opacity-100"
            title={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
            aria-label={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          {/* Music Toggle (Desktop) */}
          <button
            onClick={togglePlay}
            className="ml-4 text-white hover:text-main transition-colors mix-blend-difference opacity-80 hover:opacity-100"
            title={isPlaying ? "Mute" : "Unmute"}
            aria-label={isPlaying ? "Mute music" : "Play music"}
          >
            {isPlaying ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
          </button>
        </nav>

        {/* Mobile Controls (Menu + Music + Theme) */}
        <div className="md:hidden z-50 flex items-center gap-6">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="text-white mix-blend-difference"
            aria-label={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          {/* Music Toggle (Mobile) */}
          <button
            onClick={togglePlay}
            className="text-white mix-blend-difference"
            aria-label={isPlaying ? "Mute music" : "Play music"}
          >
            {isPlaying ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white mix-blend-difference"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white dark:bg-[#111] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-4xl font-righteous text-white mix-blend-difference"
                onClick={() => {
                  if (location.pathname === link.path) {
                    setIsOpen(false);
                  }
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
