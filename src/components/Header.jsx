import { useState } from "react";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Container with True Glass Effect */}
      <div className="w-full flex items-center justify-between h-20 bg-transparent backdrop-blur-lg px-6 md:px-20 transition-all duration-300">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/icon.png" alt="Logo" width={40} height={40} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 text-white font-medium">
          <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#blog" className="hover:text-cyan-400 transition-colors duration-300">Blog</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-cyan-500/80 text-zinc-900 font-semibold hover:bg-cyan-400/80 transition-all duration-300 shadow-md hover:shadow-cyan-500/50"
          >
            Contact
          </a>
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

      {/* Mobile Menu with True Glass Effect */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-y-[-100%] opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-[-100%] opacity-0"
      >
        <div className="md:hidden absolute top-20 left-0 w-full bg-transparent backdrop-blur-lg rounded-b-xl p-6 flex flex-col gap-4 text-white font-medium">
          <a href="#home" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#blog" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300" onClick={() => setIsOpen(false)}>Blog</a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-cyan-500/80 text-zinc-900 font-semibold hover:bg-cyan-400/80 transition-all duration-300 shadow-md hover:shadow-cyan-500/50 w-fit"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
