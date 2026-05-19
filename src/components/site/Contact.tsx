import { useState } from "react";
import { Reveal } from "./Reveal";

const cards = [
  { label: "Email", value: "info@labbaikglobal.in", href: "mailto:info@labbaikglobal.in", icon: "M4 6h16v12H4zM4 6l8 7 8-7" },
  { label: "Phone", value: "+91 8637 67 8637", href: "tel:+918637678637", icon: "M22 16.92V21a1 1 0 01-1.11 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.18 4.11 1 1 0 014.18 3h4.09a1 1 0 011 .75c.12.96.37 1.9.74 2.79a1 1 0 01-.22 1.05l-1.73 1.73a16 16 0 006 6l1.73-1.73a1 1 0 011.05-.22c.89.37 1.83.62 2.79.74a1 1 0 01.75 1.01z" },
  { label: "Address", value: "26, Tannery Street, Peria Agraharam, Erode – 638005, Tamil Nadu", icon: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const subject = `Wet Blue Inquiry — ${fd.get("company") || fd.get("name") || "Website"}`;
    const body = [
      `Name: ${fd.get("name")}`,
      `Company: ${fd.get("company")}`,
      `Country: ${fd.get("country")}`,
      `Email: ${fd.get("email")}`,
      `Requirement: ${fd.get("requirement")}`,
      "",
      `${fd.get("message")}`,
    ].join("\n");
    const mailto = `mailto:info@labbaikglobal.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => { setLoading(false); setSent(true); }, 600);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at 50% 100%, oklch(0.30 0.06 50 / 0.4), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">Contact</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Interested in a quote or want to discuss your requirements? Reach out to our export team and we will respond within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a href={c.href ?? "#"} className="block glass-strong rounded-2xl p-6 leather-grain hover:bg-white/10 transition group">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-bronze to-tan text-espresso grid place-items-center shrink-0 group-hover:scale-110 transition">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon}/></svg>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-bronze">{c.label}</div>
                      <div className="mt-1 text-foreground leading-relaxed">{c.value}</div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="glass-strong rounded-2xl overflow-hidden h-64">
                <iframe
                  title="Labbaik International location"
                  src="https://www.google.com/maps?q=Labbaik+International,Erode&ll=11.3672126,77.7035434&z=17&output=embed"
                  loading="lazy"
                  className="w-full h-full grayscale-[40%] contrast-110"
                  style={{ filter: "invert(0.85) hue-rotate(180deg) saturate(0.7)" }}
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 sm:p-9 leather-grain space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="name" label="Name" required />
                  <Field name="company" label="Company" />
                  <Field name="country" label="Country" />
                  <Field name="email" label="Email" type="email" required />
                </div>
                <Field name="requirement" label="Requirement (e.g. Bovine Wet Blue, 500 hides)" />
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Message</label>
                  <textarea name="message" rows={5} className="w-full rounded-2xl bg-white/5 border border-white/10 focus:border-bronze/60 focus:bg-white/[0.07] outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition" placeholder="Tell us about your sourcing needs..." />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-bronze to-tan px-8 py-3.5 font-medium text-espresso shadow-[0_20px_60px_-15px_oklch(0.68_0.11_60/0.6)] hover:scale-[1.02] transition disabled:opacity-60"
                >
                  {loading ? "Opening…" : sent ? "Sent ✓" : "REQUEST QUOTE"}
                  {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}
                </button>
                <p className="text-xs text-muted-foreground">
                  By submitting you agree to be contacted by our export team. Your details are not shared.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full bg-white/5 border border-white/10 focus:border-bronze/60 focus:bg-white/[0.07] outline-none px-5 py-3 text-foreground placeholder:text-muted-foreground/60 transition"
        placeholder={label}
      />
    </div>
  );
}
