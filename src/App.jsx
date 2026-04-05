import { Navbar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <div
      className="relative bg-[#efede3]
        before:fixed before:inset-0
        before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        before:opacity-40 before:pointer-events-none before:z-0"
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
