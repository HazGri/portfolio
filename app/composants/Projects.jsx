"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const projets = [
  {
    code: "01",
    titre: "Internes de Breizh",
    lien: "https://frontend-6z3.pages.dev/",
    tags: ["C#", ".NET", "Docker", "React"],
    img: "/images/asso-internes.png",
    note: "Le site de l'association des internes en médecine de Bretagne. Back-end C# / .NET conteneurisé, front React. En production.",
  },
  {
    code: "02",
    titre: "Stash",
    lien: "https://budget-enveloppes-gold.vercel.app",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    img: "/images/stash.png",
    note: "Budget par enveloppes connecté à ma banque (DSP2), avec catégorisation automatique des dépenses et une mascotte écureuil.",
  },
  {
    code: "03",
    titre: "Log My Jump",
    lien: "https://log-my-jump.vercel.app/",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    img: "/images/logmyjump.png",
    note: "Carnet de sauts pour parachutistes : profils, classement et système d'amis.",
  },
  {
    code: "04",
    titre: "BreizhReport",
    lien: "https://breizhreport.vercel.app/",
    tags: ["React", "Spring Boot"],
    img: "/images/breizhReport.png",
    note: "Prévisions météo pour les spots de surf en Bretagne. Intégration d'APIs tierces, back-end Spring Boot.",
  },
];

export const Projects = () => {
  const [actif, setActif] = useState(0);

  return (
    <section id="projets" className="mt-28 sm:mt-36">
      <SectionTitle index="01">Projets</SectionTitle>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_minmax(380px,46%)]">
        {/* liste des waypoints */}
        <ul className="flex flex-col">
          {projets.map((p, i) => (
            <li key={p.code}>
              <a
                href={p.lien}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActif(i)}
                onFocus={() => setActif(i)}
                className="group block border-t border-[var(--line)] py-6 first:border-t-0"
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className={`mono text-sm transition-colors ${
                      actif === i ? "text-signal" : "text-paper/40"
                    }`}
                  >
                    {p.code}
                  </span>
                  <h3
                    className={`font-display text-2xl font-bold tracking-tight transition-colors sm:text-3xl ${
                      actif === i ? "text-signal" : "text-paper"
                    }`}
                  >
                    {p.titre}
                  </h3>
                  <span className="leader hidden sm:block" />
                  <span className="mono hidden text-xs text-paper/50 transition-colors group-hover:text-signal sm:inline">
                    ouvrir ↗
                  </span>
                </div>

                <p className="mt-3 max-w-prose text-paper/70">{p.note}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="mono border border-[var(--line-strong)] px-2 py-0.5 text-[0.7rem] uppercase tracking-wider text-paper/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* aperçu intégré sur mobile uniquement */}
                <div className="mt-4 overflow-hidden border border-[var(--line-strong)] md:hidden">
                  <img src={p.img} alt={p.titre} className="w-full" />
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* cadre d'aperçu, collant, desktop */}
        <div className="hidden md:block">
          <div className="sticky top-28">
            <div className="relative border border-[var(--line-strong)] p-2">
              <Corners />
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-soft">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={projets[actif].img}
                    src={projets[actif].img}
                    alt={projets[actif].titre}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>
              <div className="mt-2 flex items-center justify-between px-1">
                <span className="mono text-xs text-signal">
                  {projets[actif].code} · {projets[actif].titre}
                </span>
                <span className="mono text-xs text-paper/50">
                  {projets[actif].tags.join(" / ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// petits crochets d'angle, comme un cadre de visée
const Corners = () => {
  const base = "absolute h-3 w-3 border-signal";
  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
};
