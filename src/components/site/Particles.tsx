export function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + (i % 5);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 7) * 0.8;
        const dur = 10 + (i % 6) * 2;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-bronze/40 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${dur}s ease-in-out ${delay}s infinite`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
