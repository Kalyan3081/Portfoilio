import { useState, useEffect } from "react";
import { SiFiverr } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-xl"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">PK</span>
          <span className="text-slate-300 ml-1.5 text-base font-medium">· Kalyan</span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.fiverr.com/kalyan_vijay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold hover:bg-green-500/20 transition-all"
          >
            <SiFiverr size={13} /> Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800 px-6 pb-5">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-slate-300 hover:text-white text-sm border-b border-slate-800/50 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.fiverr.com/kalyan_vijay"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            <SiFiverr size={13} /> Hire Me on Fiverr
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
