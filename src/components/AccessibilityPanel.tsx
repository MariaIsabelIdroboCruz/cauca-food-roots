import { useState } from "react";
import { Accessibility, X, Type, Contrast, Captions, RotateCcw, Plus, Minus } from "lucide-react";
import { useA11y } from "@/contexts/AccessibilityContext";

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const a = useA11y();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir opciones de accesibilidad"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-leaf text-primary-foreground shadow-xl hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/40"
      >
        <Accessibility className="h-5 w-5" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-label="Opciones de accesibilidad"
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-card border-l border-border shadow-2xl overflow-y-auto"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-border bg-card px-6 py-4">
              <div className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-leaf" />
                <h2 className="font-display text-lg font-semibold text-earth">Accesibilidad</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="p-2 rounded-full hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-7">
              {/* Text size */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Type className="h-4 w-4 text-clay" />
                  <h3 className="text-sm font-semibold text-earth">Tamaño de texto</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => a.setTextScale(Math.max(0.9, +(a.textScale - 0.1).toFixed(2)))}
                    aria-label="Reducir texto"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border hover:bg-muted"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="flex-1 text-center">
                    <div className="font-display text-2xl text-earth tabular-nums">
                      {Math.round(a.textScale * 100)}%
                    </div>
                  </div>
                  <button
                    onClick={() => a.setTextScale(Math.min(1.4, +(a.textScale + 0.1).toFixed(2)))}
                    aria-label="Aumentar texto"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border hover:bg-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">90% – 140%</p>
              </section>

              {/* Font */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Type className="h-4 w-4 text-clay" />
                  <h3 className="text-sm font-semibold text-earth">Tipografía</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => a.setFont("default")}
                    aria-pressed={a.font === "default"}
                    className={`rounded-lg border p-3 text-left transition-colors ${
                      a.font === "default"
                        ? "border-leaf bg-leaf/10"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <div className="font-display text-base text-earth">Editorial</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Fraunces · Inter</div>
                  </button>
                  <button
                    onClick={() => a.setFont("legible")}
                    aria-pressed={a.font === "legible"}
                    className={`rounded-lg border p-3 text-left transition-colors ${
                      a.font === "legible"
                        ? "border-leaf bg-leaf/10"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <div className="text-base font-semibold text-earth" style={{ fontFamily: "Atkinson Hyperlegible, system-ui" }}>
                      Legible
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Atkinson Hyperlegible</div>
                  </button>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  La opción “Legible” mejora la lectura para personas con baja visión o dislexia.
                </p>
              </section>

              {/* High contrast */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Contrast className="h-4 w-4 text-clay" />
                  <h3 className="text-sm font-semibold text-earth">Alto contraste</h3>
                </div>
                <button
                  onClick={() => a.setHighContrast(!a.highContrast)}
                  aria-pressed={a.highContrast}
                  className={`flex w-full items-center justify-between rounded-lg border p-3 transition-colors ${
                    a.highContrast ? "border-leaf bg-leaf/10" : "border-border hover:bg-muted"
                  }`}
                >
                  <span className="text-sm text-earth">Activar alto contraste</span>
                  <span
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      a.highContrast ? "bg-leaf" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        a.highContrast ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </span>
                </button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Aumenta el contraste de fondo y texto para mayor legibilidad.
                </p>
              </section>

              {/* Captions */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Captions className="h-4 w-4 text-clay" />
                  <h3 className="text-sm font-semibold text-earth">Subtítulos del video</h3>
                </div>
                <button
                  onClick={() => a.setCaptions(!a.captions)}
                  aria-pressed={a.captions}
                  className={`flex w-full items-center justify-between rounded-lg border p-3 transition-colors ${
                    a.captions ? "border-leaf bg-leaf/10" : "border-border hover:bg-muted"
                  }`}
                >
                  <span className="text-sm text-earth">Activar subtítulos por defecto</span>
                  <span
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      a.captions ? "bg-leaf" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        a.captions ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </span>
                </button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Reemplace <code className="font-mono">public/subtitles.vtt</code> con los subtítulos reales en formato WebVTT.
                </p>
              </section>

              <button
                onClick={a.reset}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Restablecer todo
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
