import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

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
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Playground", path: "/codeplayground" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-8 pt-[1.5rem] md:pt-[3rem] font-syne">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <NavLink to="/" className="z-50 text-white mix-blend-difference">
          <img
            src="/icon.png" // Assuming icon.png exists, otherwise use text
            alt="Logo"
            className="w-[1.7rem] lg:w-[1.9rem] cursor-pointer invert"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <span className="hidden text-white font-bold text-xl">A.</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-end gap-10 justify-end w-full mix-blend-difference">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-lg text-white font-medium overflow-hidden"
            >
              <RotatedText text={link.name} />
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50 mix-blend-difference">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#111111] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-4xl font-righteous text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
