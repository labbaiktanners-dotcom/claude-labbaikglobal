import hero from "@/assets/hero-leather.jpg";
import logo from "@/assets/logo.jpg";
import { Particles } from "./Particles";

const checks = ["International Supply", "Reliable Grading", "Export Documentation", "Quality Assured"];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* gradient + glow background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 opacity-70" style={{ background: "var(--gradient-glow)" }} />
      {/* leather texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay animate-drift"
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}
      />
      <Particles />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-bronze">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze animate-pulse" />
            Leather Wet Blue Supplier
          </div>

          <h1 className="mt-6 font-display font-medium leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <span className="block text-gradient-bronze">LABBAIK</span>
            <span className="block text-foreground/90 text-3xl sm:text-4xl lg:text-5xl tracking-[0.25em] mt-2">INTERNATIONAL</span>
          </h1>

          <p className="mt-6 font-display italic text-2xl sm:text-3xl text-cream/90 max-w-2xl">
            Premium Wet Blue Supplier for Global Tanneries
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Labbaik International supplies high-quality chrome-tanned wet blue hides to manufacturers worldwide. Backed by tanners with a strong market reputation — consistent grading, honest dealing, every shipment.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-bronze to-tan px-7 py-3.5 font-medium text-espresso shadow-[0_20px_60px_-15px_oklch(0.68_0.11_60/0.6)] hover:shadow-[0_25px_70px_-10px_oklch(0.68_0.11_60/0.8)] hover:scale-[1.02] transition-all">
              REQUEST A QUOTE
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-foreground hover:bg-white/10 transition-all">
              CONTACT US
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="grid place-items-center h-5 w-5 rounded-full bg-bronze/20 text-bronze">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* right visual */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong leather-grain">
            <img src={hero} alt="Wet blue chrome-tanned hides" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="glass-strong rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Labbaik" className="h-12 w-12 rounded-full object-cover ring-1 ring-bronze/40" />
                  <div>
                    <div className="font-display text-lg leading-none">Labbaik International</div>
                    <div className="text-xs text-muted-foreground mt-1">Your Trustworthy Partner in Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* floating glass card */}
          <div className="hidden sm:block absolute -left-8 top-10 glass-strong rounded-2xl p-4 animate-float">
            <div className="text-3xl font-display text-bronze">15+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Countries Served</div>
          </div>
          <div className="hidden sm:block absolute -right-6 bottom-32 glass-strong rounded-2xl p-4 animate-float-slow">
            <div className="text-3xl font-display text-bronze">100%</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Hands-on Inspected</div>
          </div>
        </div>
      </div>
    </section>
  );
}
