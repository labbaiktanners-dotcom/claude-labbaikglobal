import { Mail } from "lucide-react";

const quick = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const products = ["Bovine Wet Blue", "Buffalo Wet Blue", "Goat & Sheep Splits"];

const socials = [
  { d: "M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.99L4.6 22H1.34l8.02-9.17L1 2h7.02l4.84 6.4L18.244 2zm-1.2 18h1.89L7.05 4H5.04l12.004 16z", l: "X (Twitter)", href: "https://x.com/labbaikintl" },
  { d: "__EMAIL__", l: "Email", href: "mailto:info@labbaikglobal.in" },
  { d: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z", l: "Facebook", href: "https://www.facebook.com/labbaikintl/" },
  { d: "M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z", l: "YouTube", href: "https://www.youtube.com/@LABBAIK-INTERNATIONAL" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 leather-grain">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Labbaik International" className="h-14 w-14 rounded-full object-cover ring-1 ring-bronze/40" />
                <div>
                  <div className="font-display text-2xl">Labbaik International</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Your Trustworthy Partner in Growth</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
                Premium Wet Blue Supplier for Tanneries across the country. Chrome-tanned hides, hands-on quality, end-to-end coordination.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.l}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.l} (opens in new tab)`}
                    title={`${s.l} (opens in new tab)`}
                    
                    className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10 hover:text-bronze transition"
                  >
                    {s.l === "Email" ? (
                      <Mail size={16} strokeWidth={1.75} />
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-bronze mb-4">Quick Links</div>
              <ul className="space-y-2">
                {quick.map((q) => (
                  <li key={q.href}><a href={q.href} className="text-sm text-muted-foreground hover:text-bronze transition">{q.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-bronze mb-4">Products</div>
              <ul className="space-y-2">
                {products.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground">{p}</li>
                ))}
              </ul>
              <div className="text-[11px] uppercase tracking-[0.25em] text-bronze mb-3 mt-6">Contact</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>info@labbaikglobal.in</li>
                <li>+91 9600 20 7777</li>
                <li>26, Tannery Street, Peria Agraharam, Erode - 638 005, Tamil Nadu, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Labbaik International. All rights reserved.</div>
            <div>Premium Wet Blue Supplier for Tanneries Across the Country</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
