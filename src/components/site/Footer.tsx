import logo from "@/assets/logo.jpg";

const quick = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const products = ["Bovine Wet Blue", "Buffalo Wet Blue", "Goat & Sheep Splits"];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 leather-grain">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Labbaik International" className="h-14 w-14 rounded-full object-cover ring-1 ring-bronze/40" />
                <div>
                  <div className="font-display text-2xl">Labbaik International</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Your Trustworthy Partner in Growth</div>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
                Premium Wet Blue Supplier for Global Tanneries. Chrome-tanned hides, hands-on quality, end-to-end export coordination.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { d: "M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.7 1A4.2 4.2 0 0011 9.3a11.9 11.9 0 01-8.6-4.4 4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.5 8.5 0 012 18.6a12 12 0 006.5 1.9c7.8 0 12-6.5 12-12v-.5A8.6 8.6 0 0022 5.8z", l: "Twitter" },
                  { d: "M4 4h16v16H4zM4 4l8 8 8-8", l: "Email" },
                  { d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z", l: "LinkedIn" },
                ].map((s) => (
                  <a key={s.l} href="#" aria-label={s.l} className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10 hover:text-bronze transition">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d={s.d}/></svg>
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
                <li>+91 8637 67 8637</li>
                <li>Erode, Tamil Nadu</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} Labbaik International. All rights reserved.</div>
            <div>Premium Wet Blue Supplier for Global Tanneries</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
