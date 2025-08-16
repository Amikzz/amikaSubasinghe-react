import { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 transition-colors duration-300 ${
      isActive ? "text-cyan-400 font-semibold" : "text-white hover:text-cyan-400"
    }`;

  const desktopLinkClasses = ({ isActive }) =>
    `transition-colors duration-300 ${
      isActive ? "text-cyan-400 font-semibold" : "text-white hover:text-cyan-400"
    }`;

  // Scroll to top handler for the logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to home page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="w-full flex items-center justify-between h-20 bg-transparent backdrop-blur-lg px-6 md:px-20 transition-all duration-300">
        
        {/* Logo */}
        <NavLink to="/" onClick={handleLogoClick} className="flex items-center">
          <img src="/icon.png" alt="Logo" width={40} height={40} />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 text-white font-medium">
          <NavLink to="/" className={desktopLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={desktopLinkClasses}>About</NavLink>
          <NavLink to="/blog" className={desktopLinkClasses}>Blog</NavLink>
          <NavLink to="/projects" className={desktopLinkClasses}>Projects</NavLink>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full transition-all duration-300 shadow-md w-fit font-semibold ${
                isActive
                  ? "bg-cyan-400 text-zinc-900 shadow-cyan-500/50"
                  : "bg-cyan-500/80 text-zinc-900 hover:bg-cyan-400/80 hover:shadow-cyan-500/50"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-rounded text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"
        className="origin-top"
      >
        <div className="md:hidden w-full bg-transparent backdrop-blur-lg rounded-b-xl flex flex-col gap-4 text-white font-medium px-6 py-4">
          <NavLink to="/" className={linkClasses} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Home</NavLink>
          <NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={linkClasses} onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" className={linkClasses} onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300 shadow-md w-fit font-semibold ${
                isActive
                  ? "bg-cyan-400 text-zinc-900 shadow-cyan-500/50"
                  : "bg-cyan-500/80 text-zinc-900 hover:bg-cyan-400/80 hover:shadow-cyan-500/50"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
