import { Navbar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <div className="relative">
      <div
        className="relative min-h-screen bg-[#efede3]  before:absolute before:inset-0 
      before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-40 before:pointer-events-none before:z-0"
      >
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
        </main>
        <Projects />
      </div>
    </div>
  );
}
