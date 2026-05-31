import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";

const cards = [
  { label: "Email", value: "info@labbaikglobal.in", href: "mailto:info@labbaikglobal.in", icon: "M4 6h16v12H4zM4 6l8 7 8-7" },
  { label: "Phone", value: "+91 8637 67 8637", href: "tel:+918637678637", icon: "M22 16.92V21a1 1 0 01-1.11 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.18 4.11 1 1 0 014.18 3h4.09a1 1 0 011 .75c.12.96.37 1.9.74 2.79a1 1 0 01-.22 1.05l-1.73 1.73a16 16 0 006 6l1.73-1.73a1 1 0 011.05-.22c.89.37 1.83.62 2.79.74a1 1 0 01.75 1.01z" },
  { label: "Address", value: "26, Tannery Street, Peria Agraharam, Erode – 638005, Tamil Nadu", icon: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  requirement: z.string().trim().max(500).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      country: String(fd.get("country") ?? ""),
      email: String(fd.get("email") ?? ""),
      requirement: String(fd.get("requirement") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMsg("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("loading");

    try {
      const data = parsed.data;
      const subject = `Wet Blue Inquiry — ${data.company || data.name}`;
      const body = [
        `Name: ${data.name}`,
        `Company: ${data.company || "-"}`,
        `Country: ${data.country || "-"}`,
        `Email: ${data.email}`,
        `Requirement: ${data.requirement || "-"}`,
        "",
        "Message:",
        data.message,
      ].join("\n");

      const mailto = `mailto:info@labbaikglobal.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Trigger via anchor click for reliable cross-browser behavior
      const a = document.createElement("a");
      a.href = mailto;
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      await new Promise((r) => setTimeout(r, 500));
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly at info@labbaikglobal.in.");
    }
  };

  const loading = status === "loading";

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at 50% 100%, oklch(0.30 0.06 50 / 0.4), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">Contact</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Interested in a quote or want to discuss your requirements? Reach out to our team and we will respond within 24 hours.
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
              <form onSubmit={onSubmit} noValidate className="glass-strong rounded-3xl p-7 sm:p-9 leather-grain space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field name="name" label="Name" required error={errors.name} />
                  <Field name="company" label="Company" error={errors.company} />
                  <Field name="country" label="Country" error={errors.country} />
                  <Field name="email" label="Email" type="email" required error={errors.email} />
                </div>
                <Field name="requirement" label="Requirement (e.g. Bovine Wet Blue, 500 hides)" error={errors.requirement} />
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    aria-invalid={!!errors.message}
                    className={`w-full rounded-2xl bg-white/5 border ${errors.message ? "border-red-400/60" : "border-white/10"} focus:border-bronze/60 focus:bg-white/[0.07] outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition`}
                    placeholder="Tell us about your sourcing needs..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    disabled={loading}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-bronze to-tan px-8 py-3.5 font-medium text-espresso shadow-[0_20px_60px_-15px_oklch(0.68_0.11_60/0.6)] hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M22 12a10 10 0 00-10-10"/></svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        REQUEST QUOTE
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div role="status" className="text-sm text-emerald-300 flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                      Your email draft is ready — please send it from your mail app.
                    </div>
                  )}
                  {status === "error" && (
                    <div role="alert" className="text-sm text-red-300">{errorMsg}</div>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">
                  By submitting you agree to be contacted by our team. Your details are not shared.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required, error }: { name: string; label: string; type?: string; required?: boolean; error?: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        aria-invalid={!!error}
        className={`w-full rounded-full bg-white/5 border ${error ? "border-red-400/60" : "border-white/10"} focus:border-bronze/60 focus:bg-white/[0.07] outline-none px-5 py-3 text-foreground placeholder:text-muted-foreground/60 transition`}
        placeholder={label}
      />
      {error && <p className="mt-1 text-xs text-red-400 px-2">{error}</p>}
    </div>
  );
}
