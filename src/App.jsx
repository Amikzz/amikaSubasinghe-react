import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Loader from "./components/Loader";
import Techstack from "./components/Techstack";
import Code from "./components/Code";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />
          <main className="w-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-50">
  <section id="hero" className="w-full"><Hero /></section>
  <section id="code" className="w-full"><Code /></section>
  <section id="content" className="w-full"><Content /></section>
  <section id="techstack" className="w-full"><Techstack /></section>
</main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
