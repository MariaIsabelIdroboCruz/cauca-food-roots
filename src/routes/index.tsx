import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sprout, Wheat, Users, Leaf, HeartPulse, Scale, FileText, Cpu,
  Menu, X, ArrowRight, Play,
} from "lucide-react";
import logo from "@/assets/gobernacion-cauca.png";
import hero from "@/assets/hero-cauca.jpg";
import crops from "@/assets/crops-cauca.jpg";
import arbol from "@/assets/arbol-problemas.jpeg";
import { useA11y } from "@/contexts/AccessibilityContext";

export const Route = createFileRoute("/")({ component: Portal });

const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "equipo", label: "Equipo" },
  { id: "video", label: "Video" },
  { id: "arbol", label: "Árbol del Problema" },
  { id: "guia", label: "Guía del Taller" },
  { id: "cierre", label: "Cierre" },
];

function Portal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Equipo />
        <Video />
        <ArbolSection />
        <Guia />
        <Cierre />
      </main>
      <Footer />
    </div>
  );
}

/* ============== HEADER ============== */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3">
        <button
          onClick={() => go("inicio")}
          className="flex items-center gap-3 min-w-0 shrink"
          aria-label="Ir al inicio — Gobernación del Cauca"
        >
          <img
            src={logo}
            alt="Gobernación del Cauca · Secretaría de Gobierno"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[60vw] sm:max-w-none object-contain shrink-0"
          />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => go("guia")}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-leaf px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Iniciar taller <ArrowRight className="h-4 w-4" />
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-left px-3 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => go("guia")}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Iniciar taller <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img src={hero} alt="Mujer campesina del Cauca con cosecha" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-earth/95 via-earth/80 to-earth/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-transparent to-earth/20" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-10 pt-28 pb-16">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/30 bg-cream/10 backdrop-blur px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-cream">
          <Sprout className="h-3.5 w-3.5" /> Primer Taller · 2026
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-cream max-w-4xl">
          Política Pública de<br className="hidden sm:block" />
          <span className="italic text-clay">Seguridad y Soberanía</span><br className="hidden sm:block" />
          Alimentaria del Cauca
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-cream/85 leading-relaxed">
          Un portal participativo para construir, junto a las comunidades, una
          política que garantice el derecho a una alimentación digna, propia y
          sostenible en nuestro departamento.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#guia"
            onClick={(e) => { e.preventDefault(); document.getElementById("guia")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 rounded-full bg-clay px-5 py-3 text-sm font-semibold text-cream hover:opacity-90"
          >
            Comenzar el taller <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#video"
            onClick={(e) => { e.preventDefault(); document.getElementById("video")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 backdrop-blur px-5 py-3 text-sm font-semibold text-cream hover:bg-cream/10"
          >
            <Play className="h-4 w-4" /> Ver video introductorio
          </a>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 max-w-3xl">
          {[
            { n: "01", t: "Equipo" },
            { n: "02", t: "Video" },
            { n: "03", t: "Árbol del Problema" },
            { n: "04", t: "Guía del Taller" },
          ].map((s) => (
            <div key={s.n} className="border-l-2 border-clay/60 pl-3">
              <div className="font-display text-2xl sm:text-3xl text-clay">{s.n}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-cream/70 mt-1">{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-cream/60 text-[10px] uppercase tracking-[0.3em] animate-pulse">
        Desplazar ↓
      </div>
    </section>
  );
}

/* ============== EQUIPO ============== */
const teamGroups = [
  { title: "Dirección", icon: Sprout, accent: "leaf", people: [
    { role: "Sub Secretaria", name: "Jojana Ibarguen" },
    { role: "Apoyo", name: "Isabel Alape" },
  ]},
  { title: "Coordinación & Jurídico", icon: Scale, accent: "clay", people: [
    { role: "Coordinador", name: "Víctor Gómez" },
    { role: "Politólogo", name: "Víctor Campo" },
    { role: "Abogada", name: "Valentina Quintero" },
    { role: "Abogado", name: "Jeison Ospina" },
  ]},
  { title: "Equipo Social", icon: Users, accent: "leaf", people: [
    { role: "Trabajo comunitario", name: "Catalina Burbano" },
    { role: "Trabajo comunitario", name: "Mónica Daza" },
    { role: "Trabajo comunitario", name: "Marly Coque" },
  ]},
  { title: "Ingeniería de Sistemas", icon: Cpu, accent: "clay", people: [
    { role: "Sistemas", name: "Mayerly Arciniegas" },
    { role: "Sistemas", name: "Isabel Idrobo" },
  ]},
  { title: "Equipo de Salud", icon: HeartPulse, accent: "leaf", people: [
    { role: "Salud pública", name: "Arbey Cajiao" },
    { role: "Salud pública", name: "Yisela Meneses" },
  ]},
  { title: "Equipo Documental", icon: FileText, accent: "clay", people: [
    { role: "Documentación", name: "Alejandra Morillo" },
    { role: "Documentación", name: "Evidale Mamian" },
  ]},
];

function SectionEyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-clay font-semibold">
      <span className="font-display text-2xl text-clay/40">{n}</span>
      {label}
    </div>
  );
}

function Equipo() {
  return (
    <section id="equipo" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 slide-bg-grain">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow n="01" label="Equipo de trabajo" />
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-earth leading-tight max-w-2xl">
            Quienes <span className="italic text-clay">cultivamos</span> este taller
          </h2>
          <div className="flex items-center gap-6">
            <div>
              <div className="font-display text-4xl sm:text-5xl text-clay leading-none">17</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">Personas</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-4xl sm:text-5xl text-clay leading-none">06</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">Áreas</div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {teamGroups.map((g) => {
            const Icon = g.icon;
            const isLeaf = g.accent === "leaf";
            const bgDot = isLeaf ? "bg-leaf" : "bg-clay";
            const textDot = isLeaf ? "text-leaf" : "text-clay";
            const bgSoft = isLeaf ? "bg-leaf/15" : "bg-clay/15";
            return (
              <article
                key={g.title}
                className="group relative rounded-2xl border border-border bg-card p-5 sm:p-6 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className={`absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-10 ${bgDot}`} />
                <div className="relative flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bgSoft}`}>
                    <Icon className={`h-5 w-5 ${textDot}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-earth">{g.title}</h3>
                </div>
                <ul className="space-y-2.5 relative">
                  {g.people.map((p) => (
                    <li key={p.name} className="text-sm leading-tight">
                      <div className="font-medium text-foreground">{p.name}</div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.role}</div>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============== VIDEO ============== */
function Video() {
  const { captions } = useA11y();
  return (
    <section id="video" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-earth text-cream">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow n="02" label="Video introductorio" />
        <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-cream leading-tight max-w-2xl">
            Mirar para <span className="italic text-clay">comprender</span>
          </h2>
          <div className="inline-flex items-center gap-3 rounded-full bg-cream/10 border border-cream/20 px-4 py-2 text-xs text-cream/80 uppercase tracking-widest w-fit">
            <span className="h-2 w-2 rounded-full bg-clay animate-pulse" />
            Duración aprox. 10 min
          </div>
        </div>
        <p className="mt-3 text-cream/70 max-w-2xl">
          Antes de construir, escuchemos las voces del territorio.
        </p>

        <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-cream/15 bg-black shadow-2xl ring-1 ring-cream/5">
          <video
            key={captions ? "cc-on" : "cc-off"}
            src="/video.mp4"
            controls
            crossOrigin="anonymous"
            className="h-full w-full object-contain"
          >
            <track kind="subtitles" src="/subtitles.vtt" srcLang="es" label="Español" default={captions} />
          </video>
        </div>
      </div>
    </section>
  );
}

/* ============== ÁRBOL ============== */
function ArbolSection() {
  const items = [
    { n: "01", t: "Tronco — Problema Central", d: "Identificamos la situación negativa actual que vive la comunidad respecto a la alimentación.", icon: Wheat },
    { n: "02", t: "Raíces — Causas", d: "Exploramos por qué ocurre el problema: causas directas e indirectas que lo sostienen.", icon: Sprout },
    { n: "03", t: "Ramas — Efectos", d: "Visibilizamos las consecuencias actuales y futuras del problema en el territorio.", icon: Leaf },
  ];
  return (
    <section id="arbol" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 slide-bg-grain">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow n="03" label="Árbol del problema" />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-earth leading-[1.05]">
              Una metodología<br />
              para <span className="italic text-clay">ver de raíz</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
              El árbol del problema nos permite organizar lo que sabemos: dónde nace
              la dificultad, qué la sostiene y qué frutos amargos produce en nuestras comunidades.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-clay font-semibold">
              <Sprout className="h-3.5 w-3.5" /> Pensamiento sistémico
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            {items.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.n} className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-clay/40 transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-leaf/10">
                      <Icon className="h-5 w-5 text-leaf" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-xl sm:text-2xl text-clay">{i.n}</span>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-earth">{i.t}</h3>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{i.d}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-earth leading-tight">
              La estructura<br />que <span className="italic text-clay">llenaremos</span> juntos
            </h3>
            <p className="mt-4 text-muted-foreground">
              Cada mesa de trabajo construirá su propio árbol con base en su realidad
              territorial. La voz de la comunidad es el insumo principal.
            </p>
            <div className="mt-6 space-y-3 max-w-sm">
              {[["Ramas", "Efectos"], ["Tronco", "Problema"], ["Raíces", "Causas"]].map(([a, b]) => (
                <div key={a} className="flex items-center gap-3 text-sm">
                  <span className="font-display text-clay text-lg w-16">{a}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-earth font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
            <img src={arbol} alt="Árbol del problema — estructura" className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== GUÍA ============== */
const guiaPasos = [
  {
    paso: "Paso 1", titulo: "Problema Central", sub: "El Tronco · 20 min", color: "leaf",
    preguntas: [
      "¿Quiénes son los afectados?", "¿Dónde ocurre?", "¿Desde cuándo sucede?",
      "¿Por qué existe el problema?", "¿Qué pasaría si no se soluciona?",
    ],
    nota: "Describa el problema como una situación negativa actual que afecta a la comunidad, partiendo del video.",
  },
  {
    paso: "Paso 2", titulo: "Causas", sub: "Las Raíces · 30 min", color: "clay",
    preguntas: [
      "¿Por qué ocurre este problema?", "¿Qué lo provoca directamente?",
      "¿Qué factores contribuyen?",
      "¿Qué condiciones sociales, económicas o institucionales influyen?",
      "¿Qué prácticas o decisiones lo mantienen?", "¿Qué recursos hacen falta?",
    ],
    nota: "Distinga causas directas (inmediatas) de causas indirectas (que explican las directas).",
  },
  {
    paso: "Paso 3", titulo: "Efectos", sub: "Las Ramas · 30 min", color: "leaf",
    preguntas: [
      "¿Qué consecuencias produce el problema?",
      "¿Cómo afecta a las personas o comunidades?",
      "¿Qué impactos económicos, sociales, de salud o ambientales genera?",
      "¿Qué otros problemas desencadena?", "¿Qué puede ocurrir si continúa?",
    ],
    nota: "Diferencie efectos directos (inmediatos) de efectos indirectos (derivados).",
  },
];

function Guia() {
  return (
    <section id="guia" className="relative">
      {/* Intro band with crop image */}
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <img src={crops} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth/95 via-earth/85 to-earth/40" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionEyebrow n="04" label="Guía para talleres" />
          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-cream leading-[1.05] max-w-3xl">
            Guía para construir<br />
            el <span className="italic text-clay">árbol del problema</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-cream/85 leading-relaxed">
            Tres pasos para que cada mesa de trabajo identifique el problema central
            de seguridad alimentaria, sus causas y sus efectos en el territorio.
          </p>
          <div className="mt-3 text-xs uppercase tracking-[0.3em] text-clay font-semibold">
            Duración total · 1 h 20 min
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl">
            {guiaPasos.map((p, i) => (
              <a
                href={`#paso-${i + 1}`}
                key={i}
                className="rounded-2xl border border-cream/20 bg-cream/5 backdrop-blur-sm p-5 hover:bg-cream/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl text-clay">0{i + 1}</span>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 font-semibold">{p.paso}</div>
                </div>
                <div className="mt-3 font-display text-xl font-semibold text-cream">{p.titulo}</div>
                <div className="mt-1 text-xs text-cream/70">{p.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-background slide-bg-grain">
        {guiaPasos.map((p, index) => {
          const isLeaf = p.color === "leaf";
          const accentText = isLeaf ? "text-leaf" : "text-clay";
          const accentBg = isLeaf ? "bg-leaf/10" : "bg-clay/10";
          const accentBorder = isLeaf ? "border-leaf" : "border-clay";
          return (
            <div
              key={index}
              id={`paso-${index + 1}`}
              className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 border-b border-border last:border-0"
            >
              <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <div className="font-display text-7xl sm:text-8xl lg:text-[10rem] text-clay/15 leading-none">0{index + 1}</div>
                  <div className="-mt-2 text-xs uppercase tracking-[0.3em] text-clay font-semibold">{p.sub}</div>
                  <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-earth leading-[1.05]">
                    {p.titulo}
                  </h3>
                  <div className={`mt-6 rounded-xl border-l-4 ${accentBorder} bg-card p-4 sm:p-5 text-sm text-earth/85 leading-relaxed`}>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5 font-semibold">
                      Nota metodológica
                    </div>
                    {p.nota}
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-semibold">
                    Preguntas orientadoras
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {p.preguntas.map((q, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 sm:gap-5 rounded-xl bg-card border border-border p-4 hover:border-clay/40 transition-all"
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-lg font-semibold ${accentText} ${accentBg}`}>
                          {i + 1}
                        </span>
                        <span className="text-sm sm:text-base text-earth">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============== CIERRE ============== */
function Cierre() {
  return (
    <section id="cierre" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden bg-earth text-cream">
      <div className="absolute inset-0 opacity-15">
        <img src={crops} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth/95 to-earth" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionEyebrow n="05" label="Cierre del taller" />
        <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-cream leading-[1.05] max-w-4xl">
          Soluciones que <span className="italic text-clay">imaginamos juntos</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-6 sm:p-7">
            <Sprout className="h-6 w-6 text-clay mb-4" />
            <div className="font-display text-xl sm:text-2xl text-cream font-semibold">Posibles soluciones</div>
            <p className="mt-2 text-cream/75 leading-relaxed">
              Construir respuestas concretas a las causas identificadas en el árbol del problema.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-6 sm:p-7">
            <Leaf className="h-6 w-6 text-leaf mb-4" />
            <div className="font-display text-xl sm:text-2xl text-cream font-semibold">Futuro deseado</div>
            <p className="mt-2 text-cream/75 leading-relaxed">
              ¿Cómo imaginas tu comunidad con la política pública implementada?
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="font-display text-2xl sm:text-3xl italic text-clay">Gracias.</div>
          <div className="hidden sm:block h-px flex-1 bg-cream/20 max-w-xs" />
          <div className="text-xs uppercase tracking-[0.3em] text-cream/60">
            Socialización del árbol del problema
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== FOOTER ============== */
function Footer() {
  return (
    <footer className="bg-background border-t border-border px-4 sm:px-6 lg:px-10 py-10">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Gobernación del Cauca · Secretaría de Gobierno"
            className="h-12 sm:h-14 md:h-16 w-auto max-w-[70vw] object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-display text-sm font-semibold text-earth">
              Gobernación del Cauca · 2026
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground max-w-md md:text-right">
          Primer Taller de Política Pública de Seguridad y Soberanía Alimentaria.
          Construido con la participación de las comunidades del Cauca.
        </div>
      </div>
    </footer>
  );
}
