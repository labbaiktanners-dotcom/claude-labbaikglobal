import bovine from "@/assets/product-bovine.jpg";
import buffalo from "@/assets/product-buffalo.jpg";
import goat from "@/assets/product-goat.jpg";
import { Reveal } from "./Reveal";

const items = [
  { img: bovine, title: "Bovine Wet Blue", tag: "Grade A / Grade B", desc: "Full and half hides from prime cattle. Available in various weights and sizes." },
  { img: buffalo, title: "Buffalo Wet Blue", tag: "Export Grade", desc: "Heavy-duty buffalo hides suitable for industrial leather and upholstery applications." },
  { img: goat, title: "Goat & Sheep Splits", tag: "Fine Grade", desc: "Smaller hides and splits for footwear, garments, and accessories manufacturers." },
];

export function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">What We Supply</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Our Wet Blue Range</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Three categories of chrome-tanned hides — selected, graded, and dispatched with consistency.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group relative glass-strong rounded-3xl overflow-hidden leather-grain hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_oklch(0.68_0.11_60/0.4)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-bronze">{p.tag}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-bronze hover:gap-3 transition-all">
                    Inquire about availability
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
