import { useState, useEffect, lazy, Suspense } from "react";
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

import PageTransition from "./components/PageTransition";

// Lazy-loaded route components for Code Splitting
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const CodePlayground = lazy(() => import("./pages/Codeplayground"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));

// Wrapper to handle location-based logic for Footer
const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      <Cursor />
      <Header /> {/* Fixed navbar across pages */}
      <PageTransition />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/codeplayground" element={<CodePlayground />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
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
