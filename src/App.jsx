import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-zinc-50">
        <Hero />
      </main>
    </div>
  );
}

export default App;