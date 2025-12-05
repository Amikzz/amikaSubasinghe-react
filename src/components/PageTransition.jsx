import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const location = useLocation();

  // Map paths to display names
  // Ensure this runs immediately during render
  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      case "/codeplayground":
        return "Playground";
      case "/privacy":
        return "Privacy";
      default:
        // Handle sub-routes or unknown routes gracefully
        return "";
    }
  };

  /* 
    Restoring transition for Home (`/`), but interacting with the Loader:
     - The Loader runs for 2 seconds (Black screen with "Hello!").
     - Then App unmounts Loader and mounts PageTransition.
     - PageTransition starts Black (seamlessly matching Loader).
     - We want it to SLIDE UP immediately to reveal Home.
     - We do NOT want "HOME" text or a long delay.
  */

  const isHome = location.pathname === "/";
  // If Home, fast transition (reveal immediately). Else, wait for text reading.
  const delay = isHome ? 0.1 : 1.0;

  const title = getPageTitle(location.pathname);

  return (
    <motion.div
      key={location.pathname}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] text-white"
      initial={{ y: "0%" }}
      animate={{
        y: "-100%",
        transition: {
          delay: delay,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      style={{ pointerEvents: "none" }}
    >
      {/* Only show Title if NOT Home */}
      {!isHome && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
            scale: [0.95, 1, 1, 1.05],
          }}
          transition={{
            duration: 0.9,
            times: [0, 0.2, 0.8, 1], // Enter(20%), Hold(60%), Exit(20%)
            ease: "easeInOut",
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-righteous uppercase tracking-tighter"
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  );
};

export default PageTransition;
