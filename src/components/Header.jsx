import { useState } from "react";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="w-full flex items-center justify-between h-20 bg-zinc-900/90 backdrop-blur-sm shadow-md px-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/icon.png" alt="Logo" width={40} height={40} />
        </a>

        {/* Desktop Nav (Full Width) */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-zinc-50 font-medium">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#blog" className="hover:text-cyan-400 transition-colors">Blog</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-cyan-500 text-zinc-900 font-semibold hover:bg-cyan-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-rounded text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-y-[-100%] opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-[-100%] opacity-0"
        >
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 rounded-t-xl shadow-lg p-6 flex flex-col gap-4 text-zinc-50 font-medium">
            <a
            href="#home"
            className="px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            onClick={() => setIsOpen(false)}
            >
            Home
            </a>
            <a
            href="#about"
            className="px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            onClick={() => setIsOpen(false)}
            >
            About
            </a>
            <a
            href="#projects"
            className="px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            onClick={() => setIsOpen(false)}
            >
            Projects
            </a>
            <a
            href="#blog"
            className="px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
            onClick={() => setIsOpen(false)}
            >
            Blog
            </a>
            <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-cyan-500 text-zinc-900 font-semibold hover:bg-cyan-400 transition w-fit"
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
