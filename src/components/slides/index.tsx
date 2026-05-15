import { SlideShell } from "@/components/SlideShell";
import arbol from "@/assets/arbol-problemas.jpeg";

export function TitleSlide() {
  return (
    <SlideShell eyebrow="Gobernación del Cauca">
      <div className="flex h-full flex-col justify-center px-16 md:px-28">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-leaf/30 bg-leaf/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
          Primer Taller · 2026
        </div>
        <h1 className="mt-8 font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-earth">
          Política Pública de<br/>
          <span className="italic text-clay">Seguridad y Soberanía</span><br/>
          Alimentaria en el Cauca
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Espacio participativo para construir, junto a las comunidades, una política
          que garantice el derecho humano a la alimentación en nuestro departamento.
        </p>
        <div className="mt-12 flex items-center gap-8 text-sm text-earth/70">
          <div><div className="font-display text-3xl text-clay">01</div><div>Equipo</div></div>
          <div className="h-8 w-px bg-border" />
          <div><div className="font-display text-3xl text-clay">02</div><div>Video</div></div>
          <div className="h-8 w-px bg-border" />
          <div><div className="font-display text-3xl text-clay">03</div><div>Árbol del Problema</div></div>
          <div className="h-8 w-px bg-border" />
          <div><div className="font-display text-3xl text-clay">04</div><div>Guía del Taller</div></div>
        </div>
      </div>
    </SlideShell>
  );
}

const teamGroups = [
  { title: "Dirección", dot: "bg-leaf", people: [
    { role: "Sub Secretaria", name: "Jojana Ibarguen" },
    { role: "Apoyo", name: "Isabel Alape" },
  ]},
  { title: "Coordinación & Jurídico", dot: "bg-clay", people: [
    { role: "Coordinador", name: "Víctor Gómez" },
    { role: "Politólogo", name: "Víctor Campo" },
    { role: "Abogada", name: "Valentina Quintero" },
    { role: "Abogado", name: "Jeison Ospina" },
  ]},
  { title: "Equipo Social", dot: "bg-leaf", people: [
    { role: "", name: "Catalina Burbano" },
    { role: "", name: "Mónica Daza" },
    { role: "", name: "Marly Coque" },
  ]},
  { title: "Ingeniería de Sistemas", dot: "bg-clay", people: [
    { role: "", name: "Mayerly Arciniegas" },
    { role: "", name: "Isabel Idrobo" },
  ]},
  { title: "Equipo de Salud", dot: "bg-leaf", people: [
    { role: "", name: "Arbey Cajiao" },
    { role: "", name: "Yisela Meneses" },
  ]},
  { title: "Equipo Documental", dot: "bg-clay", people: [
    { role: "", name: "Alejandra Morillo" },
    { role: "", name: "Evidale Mamian" },
  ]},
];

export function TeamSlide() {
  return (
    <SlideShell eyebrow="01 · Presentación del Equipo">
      <div className="flex h-full flex-col px-16 md:px-24 py-20">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-earth">
          Quiénes hacemos posible este taller
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Un equipo interdisciplinario al servicio de las comunidades del Cauca.
        </p>
        <div className="mt-8 grid flex-1 grid-cols-3 gap-5">
          {teamGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card/70 backdrop-blur p-5 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className={`h-2.5 w-2.5 rounded-full ${g.dot}`} />
                <h3 className="font-display text-lg font-semibold text-earth">{g.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {g.people.map((p) => (
                  <li key={p.name} className="text-sm">
                    {p.role && <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.role}</div>}
                    <div className="font-medium text-foreground">{p.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

export function VideoSlide({ active }: { active: boolean }) {
  return (
    <SlideShell eyebrow="02 · Video Introductorio">
      <div className="flex h-full flex-col px-16 md:px-24 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-earth">Mirar para comprender</h2>
            <p className="mt-2 text-muted-foreground">Antes de construir, escuchemos. Duración aprox. 10 minutos.</p>
          </div>
          <div className="text-sm text-muted-foreground">⏱ 10 min</div>
        </div>
        <div className="mt-6 flex-1 overflow-hidden rounded-3xl border border-border bg-black shadow-2xl">
          {active && (
            <video src="/video.mp4" controls className="h-full w-full object-contain" />
          )}
        </div>
      </div>
    </SlideShell>
  );
}

export function ArbolExplicacionSlide() {
  const items = [
    { n: "01", t: "Tronco — Problema Central", d: "Identificamos la situación negativa que vive la comunidad respecto a la alimentación." },
    { n: "02", t: "Raíces — Causas", d: "Exploramos por qué ocurre el problema: causas directas e indirectas." },
    { n: "03", t: "Ramas — Efectos", d: "Visibilizamos las consecuencias actuales y futuras del problema." },
  ];
  return (
    <SlideShell eyebrow="03 · Árbol del Problema">
      <div className="grid h-full grid-cols-2 gap-12 px-16 md:px-24 py-20">
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-earth leading-tight">
            Una metodología<br/>para <span className="italic text-clay">ver de raíz</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            El árbol del problema nos permite organizar lo que sabemos: dónde nace
            la dificultad, qué la sostiene y a qué frutos amargos da lugar.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5">
          {items.map((i) => (
            <div key={i.n} className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-3xl text-clay">{i.n}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-earth">{i.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

export function ArbolImagenSlide() {
  return (
    <SlideShell eyebrow="03 · Árbol del Problema — Estructura">
      <div className="flex h-full flex-col items-center justify-center px-12 py-16">
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
          <img src={arbol} alt="Árbol del Problema" className="w-full h-auto object-contain" />
        </div>
        <p className="mt-5 text-sm text-muted-foreground italic">
          Estructura que llenaremos colectivamente durante el taller.
        </p>
      </div>
    </SlideShell>
  );
}

const guiaPasos = [
  {
    paso: "Paso 1",
    titulo: "Identificación del Problema Central",
    sub: "El Tronco · 20 min",
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
    titulo: "Identificación de las Causas",
    sub: "Las Raíces · 30 min",
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
    titulo: "Identificación de los Efectos",
    sub: "Las Ramas · 30 min",
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
    <SlideShell eyebrow="04 · Guía para Talleres">
      <div className="flex h-full flex-col justify-center px-16 md:px-28">
        <div className="text-sm uppercase tracking-[0.2em] text-leaf font-semibold">Duración total · 1 h 20 min</div>
        <h2 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-earth leading-tight">
          Guía para construir<br/>el <span className="italic text-clay">árbol del problema</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Tres pasos para que cada mesa de trabajo identifique el problema central,
          sus causas y sus efectos. La voz de la comunidad es el insumo principal.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-3xl">
          {guiaPasos.map((p, i) => (
            <div key={i} className="rounded-xl border border-border bg-card/70 p-4">
              <div className="text-xs uppercase tracking-wider text-clay font-semibold">{p.paso}</div>
              <div className="mt-1 font-display text-base font-semibold text-earth">{p.titulo}</div>
              <div className="mt-1 text-xs text-muted-foreground">{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

export function GuiaPasoSlide({ index }: { index: number }) {
  const p = guiaPasos[index];
  return (
    <SlideShell eyebrow={`04 · Guía para Talleres · ${p.paso}`}>
      <div className="grid h-full grid-cols-5 gap-12 px-16 md:px-24 py-20">
        <div className="col-span-2 flex flex-col justify-center">
          <div className="font-display text-7xl text-clay/30 leading-none">0{index + 1}</div>
          <div className="mt-3 text-sm uppercase tracking-[0.2em] text-clay font-semibold">{p.sub}</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-earth leading-tight">{p.titulo}</h2>
          <div className="mt-6 rounded-xl border-l-4 border-leaf bg-leaf/5 p-4 text-sm text-earth/80">
            {p.nota}
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Preguntas orientadoras</div>
          <ul className="space-y-3">
            {p.preguntas.map((q, i) => (
              <li key={i} className="flex items-start gap-4 rounded-xl bg-card/60 border border-border p-4">
                <span className="font-display text-clay text-xl leading-none w-6">{i + 1}</span>
                <span className="text-base text-earth">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}

export function ConclusionSlide() {
  return (
    <SlideShell eyebrow="Cierre">
      <div className="flex h-full flex-col justify-center px-16 md:px-28">
        <div className="text-sm uppercase tracking-[0.2em] text-leaf font-semibold">Construcción colectiva</div>
        <h2 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-earth leading-[1.05]">
          Soluciones que <span className="italic text-clay">imaginamos juntos</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card/70 p-6">
            <div className="font-display text-2xl text-earth font-semibold">Posibles soluciones</div>
            <p className="mt-2 text-muted-foreground">Construir respuestas concretas a las causas identificadas en el árbol.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-6">
            <div className="font-display text-2xl text-earth font-semibold">Futuro deseado</div>
            <p className="mt-2 text-muted-foreground">¿Cómo imaginas tu comunidad con la política pública implementada?</p>
          </div>
        </div>
        <div className="mt-12 font-display text-2xl italic text-clay">Gracias — Socialización del árbol del problema.</div>
      </div>
    </SlideShell>
  );
}
