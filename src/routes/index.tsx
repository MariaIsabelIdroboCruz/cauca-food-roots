import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Grid2x2 } from "lucide-react";
import {
  TitleSlide, TeamSlide, VideoSlide, ArbolExplicacionSlide,
  ArbolImagenSlide, GuiaIntroSlide, GuiaPasoSlide, ConclusionSlide,
} from "@/components/slides";

export const Route = createFileRoute("/")({ component: Presentation });

function Presentation() {
  const [i, setI] = useState(0);
  const [grid, setGrid] = useState(false);

  const slides = [
    { label: "Bienvenida", el: (active: boolean) => <TitleSlide /> },
    { label: "Equipo", el: () => <TeamSlide /> },
    { label: "Video", el: (active: boolean) => <VideoSlide active={active} /> },
    { label: "Árbol — Explicación", el: () => <ArbolExplicacionSlide /> },
    { label: "Árbol — Imagen", el: () => <ArbolImagenSlide /> },
    { label: "Guía Talleres", el: () => <GuiaIntroSlide /> },
    { label: "Paso 1", el: () => <GuiaPasoSlide index={0} /> },
    { label: "Paso 2", el: () => <GuiaPasoSlide index={1} /> },
    { label: "Paso 3", el: () => <GuiaPasoSlide index={2} /> },
    { label: "Cierre", el: () => <ConclusionSlide /> },
  ];

  const next = useCallback(() => setI((v) => Math.min(v + 1, slides.length - 1)), [slides.length]);
  const prev = useCallback(() => setI((v) => Math.max(v - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "g" || e.key === "G") setGrid((v) => !v);
      else if (e.key === "Escape") setGrid(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const fullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  if (grid) {
    return (
      <div className="min-h-screen bg-background p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl text-earth">Vista general</h1>
          <button onClick={() => setGrid(false)} className="text-sm text-muted-foreground hover:text-foreground">Cerrar (Esc)</button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => { setI(idx); setGrid(false); }}
              className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 origin-top-left scale-[0.25] w-[400%] h-[400%] pointer-events-none">
                {s.el(false)}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                <div className="text-xs opacity-70">Diapositiva {idx + 1}</div>
                <div className="text-sm font-medium">{s.label}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <div className="absolute inset-0">{slides[i].el(true)}</div>

      {/* bottom HUD */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur px-3 py-2 shadow-lg">
        <button onClick={prev} disabled={i === 0} className="p-2 rounded-full hover:bg-muted disabled:opacity-30" aria-label="Anterior">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="px-3 text-xs font-medium tabular-nums text-muted-foreground">
          {i + 1} / {slides.length}
        </div>
        <button onClick={next} disabled={i === slides.length - 1} className="p-2 rounded-full hover:bg-muted disabled:opacity-30" aria-label="Siguiente">
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button onClick={() => setGrid(true)} className="p-2 rounded-full hover:bg-muted" aria-label="Vista general (G)">
          <Grid2x2 className="h-4 w-4" />
        </button>
        <button onClick={fullscreen} className="p-2 rounded-full hover:bg-muted" aria-label="Pantalla completa">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* progress */}
      <div className="absolute bottom-0 left-0 h-1 bg-leaf transition-all duration-300" style={{ width: `${((i + 1) / slides.length) * 100}%` }} />
    </div>
  );
}
