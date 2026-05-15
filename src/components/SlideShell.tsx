import { ReactNode } from "react";
import logo from "@/assets/gobernacion-cauca.png";

export function SlideShell({
  children,
  eyebrow,
  className = "",
  variant = "light",
}: {
  children: ReactNode;
  eyebrow?: string;
  className?: string;
  variant?: "light" | "dark" | "image";
}) {
  const bg =
    variant === "dark"
      ? "bg-earth text-cream"
      : variant === "image"
      ? "bg-earth"
      : "slide-bg-grain";

  return (
    <div className={`relative h-full w-full overflow-hidden ${bg} ${className}`}>
      {/* Top bar with official logo */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Gobernación del Cauca" className="h-10 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em]">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
          <span className={variant === "dark" ? "text-cream/70" : "text-muted-foreground"}>
            Seguridad & Soberanía Alimentaria · Cauca 2026
          </span>
        </div>
      </div>

      {eyebrow && (
        <div
          className={`absolute top-20 left-10 z-20 text-[11px] font-semibold uppercase tracking-[0.35em] ${
            variant === "dark" ? "text-clay" : "text-clay"
          }`}
        >
          {eyebrow}
        </div>
      )}

      {children}
    </div>
  );
}
