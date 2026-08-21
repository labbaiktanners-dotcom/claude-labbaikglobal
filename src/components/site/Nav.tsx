import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo.jpg.asset.json";
const logo = logoAsset.url;

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-strong" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Labbaik International" className="h-10 w-10 rounded-full object-cover ring-1 ring-bronze/40" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg tracking-wide">Labbaik</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">International</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-foreground/80 hover:text-bronze transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-br from-bronze to-tan px-5 py-2 text-sm font-medium text-espresso shadow-[0_8px_24px_-8px_oklch(0.68_0.11_60/0.6)] hover:brightness-110 transition">
              Request Quote
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden glass rounded-full p-2" aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} /></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3 animate-fade-up">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-2 border-b border-white/5 last:border-0">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
