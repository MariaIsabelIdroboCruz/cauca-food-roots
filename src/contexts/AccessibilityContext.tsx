import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Font = "default" | "legible";
type State = {
  highContrast: boolean;
  textScale: number;
  font: Font;
  captions: boolean;
  setHighContrast: (v: boolean) => void;
  setTextScale: (v: number) => void;
  setFont: (v: Font) => void;
  setCaptions: (v: boolean) => void;
  reset: () => void;
};

const Ctx = createContext<State | null>(null);
const KEY = "a11y-settings-v1";

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [textScale, setTextScale] = useState(1);
  const [font, setFont] = useState<Font>("default");
  const [captions, setCaptions] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const v = JSON.parse(raw);
        setHighContrast(!!v.highContrast);
        setTextScale(typeof v.textScale === "number" ? v.textScale : 1);
        setFont(v.font === "legible" ? "legible" : "default");
        setCaptions(!!v.captions);
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify({ highContrast, textScale, font, captions }));
    const root = document.documentElement;
    root.classList.toggle("a11y-contrast", highContrast);
    root.classList.toggle("a11y-font-legible", font === "legible");
    root.style.setProperty("--a11y-text-scale", String(textScale));
  }, [highContrast, textScale, font, captions]);

  const reset = () => {
    setHighContrast(false);
    setTextScale(1);
    setFont("default");
    setCaptions(false);
  };

  return (
    <Ctx.Provider
      value={{ highContrast, textScale, font, captions, setHighContrast, setTextScale, setFont, setCaptions, reset }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useA11y() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useA11y must be inside AccessibilityProvider");
  return v;
}
