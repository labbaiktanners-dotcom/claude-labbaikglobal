import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col gap-3">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="glass-strong rounded-full h-12 w-12 grid place-items-center hover:bg-white/10 transition animate-fade-up"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      )}
      <a
        href="https://wa.me/918637678637"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group rounded-full h-14 w-14 grid place-items-center bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7 1 3.7 1.5 5.7 1.5h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 012.1 12 9.9 9.9 0 0112 2.1c2.6 0 5.1 1 7 2.9a9.9 9.9 0 012.9 7c0 5.5-4.5 9.8-9.9 9.8zm5.4-7.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1s-1.3-.5-2.4-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.6-.6 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z"/></svg>
      </a>
    </div>
  );
}
