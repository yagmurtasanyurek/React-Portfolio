import { Navbar } from "./components/NavBar";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="relative">
      <div className="min-h-screen bg-[#efede3]  before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-40 before:pointer-events-none">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}
