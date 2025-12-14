import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./components/Cursor";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import ProjectDetail from "./pages/ProjectDetail";

import CodePlayground from "./pages/Codeplayground";
import PageTransition from "./components/PageTransition";

// Wrapper to handle location-based logic for Footer
const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      <Cursor />
      <Header /> {/* Fixed navbar across pages */}
      <PageTransition />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/codeplayground" element={<CodePlayground />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {/* Footer is hidden only on Privacy page */}
      {location.pathname !== "/privacy" && <Footer />}
    </>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { isVideoLoaded } = useLoading();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Minimum load time for branding (2s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isHome = location.pathname === "/";
    // Hide loader only when BOTH time has passed AND video is loaded (only strictly required for home)
    if (!loading) {
      if (isHome && !isVideoLoaded) {
        // If on home page and video not loaded, keep showing loader
        return;
      }
      // Otherwise (not home, or home+video loaded), hide loader
      setShowLoader(false);
    }
  }, [loading, isVideoLoaded, location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && <Loader key="loader" />}
      </AnimatePresence>

      <ScrollToTop />
      <AppWrapper />
    </>
  );
};

const App = () => (
  <LoadingProvider>
    <Router>
      <AppContent />
    </Router>
  </LoadingProvider>
);

export default App;
