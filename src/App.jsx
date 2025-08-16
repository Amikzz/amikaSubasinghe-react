import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Loader from "./components/Loader";
import Techstack from "./components/Techstack";

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
          <main className="flex flex-col items-center justify-center bg-zinc-900 text-zinc-50">
            <Hero />
            <Content />
            <Techstack />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
