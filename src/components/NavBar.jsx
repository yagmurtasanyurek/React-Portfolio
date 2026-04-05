import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navIcon from "../icons/16.svg";

const navLinks = [
  { label: "About", href: "#aboutme" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(({ href }) =>
      document.querySelector(href)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#efede3]/80 backdrop-blur-md shadow-sm border-b border-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-16 md:h-20 px-6 md:px-10 max-w-7xl mx-auto">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#aboutme")}
          aria-label="Home"
        >
          <img src={navIcon} alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 font-bold uppercase text-lg lg:text-xl">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative pb-1 transition-colors duration-200 ${
                    isActive ? "text-pink-900" : "hover:text-pink-900"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-pink-900"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black origin-center transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black origin-center transition-all"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#efede3]/95 backdrop-blur-md border-b border-black/10"
          >
            <ul className="flex flex-col items-center gap-6 py-8 font-bold uppercase text-xl">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="hover:text-pink-900 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
