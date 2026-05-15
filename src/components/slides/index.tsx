import { SlideShell } from "@/components/SlideShell";
import arbol from "@/assets/arbol-problemas.jpeg";
import hero from "@/assets/hero-cauca.jpg";
import crops from "@/assets/crops-cauca.jpg";
import { Sprout, Wheat, Users, Leaf, HeartPulse, Scale, FileText, Cpu } from "lucide-react";

/* ---------------- TITLE ---------------- */
export function TitleSlide() {
  return (
    <SlideShell variant="image" eyebrow="Primer Taller · 2026">
      <img
        src={hero}
        alt="Mujer campesina del Cauca con cosecha"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-earth/95 via-earth/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-earth/60 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-center px-16 md:px-24 pt-24">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/30 bg-cream/10 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream">
          <Sprout className="h-3.5 w-3.5" /> Política Pública Participativa
        </div>
        <h1 className="mt-7 font-display text-5xl md:text-7xl font-semibold leading-[1.02] text-cream max-w-4xl">
          Seguridad y <span className="italic text-clay">Soberanía</span><br />
          Alimentaria del <span className="italic">Cauca</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-cream/85 leading-relaxed">
          Sembramos juntos una política pública que garantice el derecho a una
          alimentación digna, propia y sostenible para todas las comunidades del
          departamento.
        </p>

        <div className="mt-12 grid grid-cols-4 gap-6 max-w-3xl">
          {[
            { n: "01", t: "Equipo" },
            { n: "02", t: "Video" },
            { n: "03", t: "Árbol del Problema" },
            { n: "04", t: "Guía del Taller" },
          ].map((s) => (
            <div key={s.n} className="border-l-2 border-clay/60 pl-3">
              <div className="font-display text-3xl text-clay">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-cream/70 mt-1">{s.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating side label */}
      <div className="absolute right-10 bottom-12 z-10 text-right">
        <div className="font-display text-cream/90 text-sm tracking-[0.4em] uppercase">
          Maíz · Café · Plátano · Frijol
        </div>
        <div className="text-cream/60 text-xs mt-1">Patrimonio agroalimentario del Cauca</div>
      </div>
    </SlideShell>
  );
}

/* ---------------- TEAM ---------------- */
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

export function TeamSlide() {
  return (
    <SlideShell eyebrow="01 · Equipo">
      <div className="flex h-full flex-col px-16 md:px-24 pt-28 pb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-earth leading-tight">
              Quienes <span className="italic text-clay">cultivamos</span> este taller
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Un equipo interdisciplinario al servicio de las comunidades caucanas.
            </p>
          </div>
          <div className="text-right">
            <div className="font-display text-5xl text-clay leading-none">17</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Personas · 6 áreas</div>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-4">
          {teamGroups.map((g) => {
            const Icon = g.icon;
            const dot = g.accent === "leaf" ? "bg-leaf text-leaf" : "bg-clay text-clay";
            return (
              <div
                key={g.title}
                className="group relative rounded-2xl border border-border bg-card/80 backdrop-blur p-5 flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-10 ${dot.split(" ")[0]}`} />
                <div className="flex items-center gap-3 mb-4 relative">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-${g.accent}/15`}>
                    <Icon className={`h-4.5 w-4.5 ${dot.split(" ")[1]}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-earth">{g.title}</h3>
                </div>
                <ul className="space-y-2 relative">
                  {g.people.map((p) => (
                    <li key={p.name} className="text-sm leading-tight">
                      <div className="font-medium text-foreground">{p.name}</div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.role}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- VIDEO ---------------- */
export function VideoSlide({ active }: { active: boolean }) {
  return (
    <SlideShell variant="dark" eyebrow="02 · Video Introductorio">
      <div className="flex h-full flex-col px-16 md:px-24 pt-28 pb-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream">
              Mirar para <span className="italic text-clay">comprender</span>
            </h2>
            <p className="mt-2 text-cream/70">
              Antes de construir, escuchemos las voces del territorio.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-cream/10 border border-cream/20 px-4 py-2 text-xs text-cream/80 uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-clay animate-pulse" />
            Duración aprox. 10 min
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-3xl border border-cream/15 bg-black shadow-2xl ring-1 ring-cream/5">
          {active && <video src="/video.mp4" controls className="h-full w-full object-contain" />}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- ÁRBOL EXPLICACIÓN ---------------- */
export function ArbolExplicacionSlide() {
  const items = [
    { n: "01", t: "Tronco — Problema Central", d: "Identificamos la situación negativa actual que vive la comunidad respecto a la alimentación.", icon: Wheat },
    { n: "02", t: "Raíces — Causas", d: "Exploramos por qué ocurre el problema: causas directas e indirectas que lo sostienen.", icon: Sprout },
    { n: "03", t: "Ramas — Efectos", d: "Visibilizamos las consecuencias actuales y futuras del problema en el territorio.", icon: Leaf },
  ];
  return (
    <SlideShell eyebrow="03 · Árbol del Problema">
      <div className="grid h-full grid-cols-2 gap-12 px-16 md:px-24 pt-28 pb-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-earth leading-[1.05]">
            Una metodología<br />
            para <span className="italic text-clay">ver de raíz</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
            El árbol del problema nos permite organizar lo que sabemos: dónde nace
            la dificultad, qué la sostiene y qué frutos amargos produce en nuestras comunidades.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-clay font-semibold">
            <Sprout className="h-3.5 w-3.5" /> Pensamiento sistémico
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <div key={i.n} className="group relative rounded-2xl border border-border bg-card/85 backdrop-blur p-6 hover:border-clay/40 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-leaf/10">
                    <Icon className="h-5 w-5 text-leaf" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl text-clay">{i.n}</span>
                      <h3 className="font-display text-xl font-semibold text-earth">{i.t}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- ÁRBOL IMAGEN ---------------- */
export function ArbolImagenSlide() {
  return (
    <SlideShell eyebrow="03 · Árbol del Problema · Estructura">
      <div className="flex h-full items-center justify-center px-16 pt-24 pb-12">
        <div className="grid grid-cols-5 gap-8 w-full h-full items-center">
          <div className="col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-earth leading-tight">
              La estructura<br />que <span className="italic text-clay">llenaremos</span><br />juntos
            </h2>
            <p className="mt-5 text-muted-foreground">
              Cada mesa de trabajo construirá su propio árbol con base en su realidad
              territorial. La voz de la comunidad es el insumo principal.
            </p>
            <div className="mt-7 space-y-3">
              {[
                ["Ramas", "Efectos"],
                ["Tronco", "Problema"],
                ["Raíces", "Causas"],
              ].map(([a, b]) => (
                <div key={a} className="flex items-center gap-3 text-sm">
                  <span className="font-display text-clay text-lg w-16">{a}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-earth font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
            <img src={arbol} alt="Árbol del Problema" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- GUÍA INTRO ---------------- */
const guiaPasos = [
  {
    paso: "Paso 1",
    titulo: "Problema Central",
    sub: "El Tronco · 20 min",
    color: "leaf",
    preguntas: [
      "¿Quiénes son los afectados?",
      "¿Dónde ocurre?",
      "¿Desde cuándo sucede?",
      "¿Por qué existe el problema?",
      "¿Qué pasaría si no se soluciona?",
    ],
    nota: "Describa el problema como una situación negativa actual que afecta a la comunidad, partiendo del video.",
  },
  {
    paso: "Paso 2",
    titulo: "Causas",
    sub: "Las Raíces · 30 min",
    color: "clay",
    preguntas: [
      "¿Por qué ocurre este problema?",
      "¿Qué lo provoca directamente?",
      "¿Qué factores contribuyen?",
      "¿Qué condiciones sociales, económicas o institucionales influyen?",
      "¿Qué prácticas o decisiones lo mantienen?",
      "¿Qué recursos hacen falta?",
    ],
    nota: "Distinga causas directas (inmediatas) de causas indirectas (que explican las directas).",
  },
  {
    paso: "Paso 3",
    titulo: "Efectos",
    sub: "Las Ramas · 30 min",
    color: "leaf",
    preguntas: [
      "¿Qué consecuencias produce el problema?",
      "¿Cómo afecta a las personas o comunidades?",
      "¿Qué impactos económicos, sociales, de salud o ambientales genera?",
      "¿Qué otros problemas desencadena?",
      "¿Qué puede ocurrir si continúa?",
    ],
    nota: "Diferencie efectos directos (inmediatos) de efectos indirectos (derivados).",
  },
];

export function GuiaIntroSlide() {
  return (
    <SlideShell variant="image" eyebrow="04 · Guía para Talleres">
      <img src={crops} alt="Cultivos del Cauca" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-earth/95 via-earth/85 to-earth/40" />

      <div className="relative z-10 flex h-full flex-col justify-center px-16 md:px-24 pt-24">
        <div className="text-xs uppercase tracking-[0.3em] text-clay font-semibold">
          Duración total · 1 h 20 min
        </div>
        <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-cream leading-[1.02] max-w-4xl">
          Guía para construir<br />
          el <span className="italic text-clay">árbol del problema</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed">
          Tres pasos para que cada mesa de trabajo identifique el problema central
          de seguridad alimentaria, sus causas y sus efectos en el territorio.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-5 max-w-4xl">
          {guiaPasos.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-cream/20 bg-cream/5 backdrop-blur-sm p-5 hover:bg-cream/10 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl text-clay">0{i + 1}</span>
                <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60 font-semibold">{p.paso}</div>
              </div>
              <div className="mt-3 font-display text-xl font-semibold text-cream">{p.titulo}</div>
              <div className="mt-1 text-xs text-cream/70">{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- GUÍA PASO ---------------- */
export function GuiaPasoSlide({ index }: { index: number }) {
  const p = guiaPasos[index];
  const colorClass = p.color === "leaf" ? "text-leaf bg-leaf/10 border-leaf" : "text-clay bg-clay/10 border-clay";
  return (
    <SlideShell eyebrow={`04 · Guía · ${p.paso}`}>
      <div className="grid h-full grid-cols-5 gap-12 px-16 md:px-24 pt-28 pb-14">
        <div className="col-span-2 flex flex-col justify-center">
          <div className="font-display text-[10rem] text-clay/15 leading-none -ml-2">0{index + 1}</div>
          <div className="-mt-4 text-xs uppercase tracking-[0.3em] text-clay font-semibold">{p.sub}</div>
          <h2 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-earth leading-[1.05]">
            {p.titulo}
          </h2>
          <div className={`mt-7 rounded-xl border-l-4 ${colorClass.split(" ")[2]} bg-card/80 backdrop-blur p-5 text-sm text-earth/85 leading-relaxed`}>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1.5 font-semibold">Nota metodológica</div>
            {p.nota}
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5 font-semibold">
            Preguntas orientadoras
          </div>
          <ul className="space-y-2.5">
            {p.preguntas.map((q, i) => (
              <li
                key={i}
                className="group flex items-center gap-5 rounded-xl bg-card/70 border border-border p-4 hover:border-clay/40 hover:bg-card transition-all"
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-lg font-semibold ${colorClass.split(" ").slice(0, 2).join(" ")}`}>
                  {i + 1}
                </span>
                <span className="text-base text-earth">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}

/* ---------------- CIERRE ---------------- */
export function ConclusionSlide() {
  return (
    <SlideShell variant="dark" eyebrow="Cierre del Taller">
      <div className="absolute inset-0 opacity-20">
        <img src={crops} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-earth via-earth/95 to-earth" />

      <div className="relative z-10 flex h-full flex-col justify-center px-16 md:px-24 pt-24">
        <div className="text-xs uppercase tracking-[0.3em] text-clay font-semibold">
          Construcción colectiva
        </div>
        <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-cream leading-[1.02] max-w-5xl">
          Soluciones que <span className="italic text-clay">imaginamos juntos</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-7">
            <Sprout className="h-6 w-6 text-clay mb-4" />
            <div className="font-display text-2xl text-cream font-semibold">Posibles soluciones</div>
            <p className="mt-2 text-cream/75 leading-relaxed">
              Construir respuestas concretas a las causas identificadas en el árbol del problema.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur p-7">
            <Leaf className="h-6 w-6 text-leaf mb-4" />
            <div className="font-display text-2xl text-cream font-semibold">Futuro deseado</div>
            <p className="mt-2 text-cream/75 leading-relaxed">
              ¿Cómo imaginas tu comunidad con la política pública implementada?
            </p>
          </div>
        </div>
        <div className="mt-14 flex items-center gap-6">
          <div className="font-display text-3xl italic text-clay">Gracias.</div>
          <div className="h-px flex-1 bg-cream/20 max-w-xs" />
          <div className="text-xs uppercase tracking-[0.3em] text-cream/60">Socialización del árbol del problema</div>
        </div>
      </div>
    </SlideShell>
  );
}
