import { Reveal } from "./Reveal";

const Icon = ({ d }: { d: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

const items = [
  { title: "Quality We Personally Oversee", desc: "We source raw hides ourselves, select trusted tanneries for chrome-tanning, and inspect the finished wet blue before storage.", icon: "M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17.5 6.5 21 8 13.5 3 9l6.5-.5L12 2z" },
  { title: "Consistent Supply", desc: "Ready to supply leather manufacturers across the country through dependable sourcing, grading, and stock readiness.", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" },
  { title: "Reliable Logistics", desc: "Freight and customs documentation handled end-to-end for on-time delivery.", icon: "M3 7h13l3 4h2v6h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V7zM5 7V5h11v2" },
  { title: "Quality Assured", desc: "Every hide is inspected and graded before shipment. REACH compliant and aligned with international leather trade standards.", icon: "M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

export function Why() {
  return (
    <section id="why" className="relative py-32">
      <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "radial-gradient(ellipse at 30% 60%, oklch(0.68 0.11 60 / 0.15), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">Why Choose Us</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Built for Leather Manufacturers</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div className="glass-strong rounded-3xl p-7 h-full leather-grain group hover:-translate-y-1 transition-all duration-500">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-bronze to-tan text-espresso grid place-items-center group-hover:scale-110 transition">
                  <Icon d={it.icon} />
                </div>
                <h3 className="mt-5 font-display text-xl leading-snug">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
