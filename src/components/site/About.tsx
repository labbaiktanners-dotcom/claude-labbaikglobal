import { Reveal } from "./Reveal";

const steps = [
  { t: "Raw Hide Sourcing", d: "Direct procurement from trusted market suppliers." },
  { t: "Chrome Tanning", d: "Processed at reputable partner tanneries." },
  { t: "Quality Inspection", d: "Each hide graded and verified personally." },
  { t: "Storage & Ready Supply", d: "Held in our own facility, inspected, graded, and maintained ready for supply to leather manufacturers across the country." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at 70% 30%, oklch(0.30 0.06 50 / 0.3), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">About Us</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            From Raw Hide to <span className="text-gradient-bronze italic">Ready-to-Use</span> Wet Blue
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              At Labbaik International, we source raw hides directly from the market, have them chrome-tanned at trusted tanneries, and store the finished wet blue hides in our own facility — ready for prompt dispatch to buyers.
            </p>
            <p>
              This hands-on process gives us full control over quality at every stage — from selection of raw hides to the final grading before sale. What reaches you is a product we have personally overseen, not just passed along.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div aria-hidden className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-bronze/40 to-transparent" />
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <li className="relative pl-16 group">
                  <div className="absolute left-0 top-1 h-12 w-12 rounded-2xl glass-strong grid place-items-center font-display text-bronze text-lg group-hover:scale-110 transition">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="glass rounded-2xl p-5 group-hover:bg-white/10 transition leather-grain">
                    <div className="font-display text-xl text-foreground">{s.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
