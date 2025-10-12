import { Navbar } from "./components/NavBar";

export function App() {
  return (
    <div className="min-h-screen bg-[#efede3]  before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-40 before:pointer-events-none">
      <header>
        <Navbar />
      </header>
    </div>
  );
}
