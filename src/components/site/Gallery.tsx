import { useEffect, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { Reveal } from "./Reveal";

// To add more images later: just push to this array.
const images: { src: string; alt: string; span?: string }[] = [
  { src: g1, alt: "Folded wet blue chrome-tanned hides", span: "md:row-span-2" },
  { src: g2, alt: "Hands inspecting wet blue leather" },
  { src: g3, alt: "Grading a wet blue hide on the workbench" },
  { src: g4, alt: "Rolled wet blue hides ready to dispatch", span: "md:row-span-2" },
  { src: g5, alt: "Tannery drum processing leather" },
  { src: g6, alt: "Macro of chrome-tanned leather grain" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % images.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">Gallery</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Inside Our Process</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A close look at our wet blue hides, grading and tannery process — honest visuals from the bench.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 60} className={img.span ?? ""}>
              <button
                onClick={() => setActive(i)}
                className="group relative w-full h-full overflow-hidden rounded-2xl glass leather-grain"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition" />
                <div className="absolute bottom-3 left-3 right-3 text-left text-xs text-cream/90 opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0 duration-300">
                  {img.alt}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-espresso/90 backdrop-blur-xl p-4 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 glass rounded-full p-3 hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)); }}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a === null ? a : (a + 1) % images.length)); }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
