import { ReactNode } from "react";

export function SlideShell({ children, eyebrow, className = "" }: { children: ReactNode; eyebrow?: string; className?: string }) {
  return (
    <div className={`relative h-full w-full overflow-hidden slide-bg-grain ${className}`}>
      {eyebrow && (
        <div className="absolute top-8 left-10 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          {eyebrow}
        </div>
      )}
      <div className="absolute top-8 right-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-leaf" />
        Cauca · 2026
      </div>
      {children}
    </div>
  );
}
