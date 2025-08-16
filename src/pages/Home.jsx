import Hero from "../components/Hero";
import Code from "../components/Code";
import Content from "../components/Content";
import Techstack from "../components/Techstack";

const Home = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-50">
      <section id="hero" className="w-full"><Hero /></section>
      <section id="code" className="w-full"><Code /></section>
      <section id="content" className="w-full"><Content /></section>
      <section id="techstack" className="w-full"><Techstack /></section>
    </main>
  );
};

export default Home;
