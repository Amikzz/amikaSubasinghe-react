import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

if (loading) return <Loader />;

  return (
    <Router>
      <Header /> {/* Fixed navbar across pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer across all pages */}
    </Router>
  );
};

export default App;
