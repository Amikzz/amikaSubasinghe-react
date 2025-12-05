import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Playground", path: "/codeplayground" },
    { name: "About", path: "/about" },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-4 md:mx-10 rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled || isOpen ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
            <img
              src="/icon.png"
              alt="Logo"
              className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block text-zinc-100 group-hover:text-white transition-colors">
            Amika<span className="text-zinc-500">.dev</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-800/50 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white bg-zinc-700/80 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                isActive
                  ? "bg-zinc-100 text-zinc-900 border-zinc-100 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500 hover:text-white hover:bg-zinc-800"
              }`
            }
          >
            Let's Talk
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-20 left-4 right-4 p-4 rounded-2xl glass border border-zinc-800 shadow-2xl md:hidden flex flex-col gap-2 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="h-px bg-zinc-800 my-2" />
            <NavLink
              to="/contact"
              className="px-4 py-3 rounded-xl text-base font-semibold bg-zinc-100 text-zinc-900 text-center hover:bg-white transition-colors"
            >
              Let's Talk
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
