"use client";
import { motion } from "motion/react";
import { SectionTitle } from "./SectionTitle";

// Carte de compétences orientée C# / .NET full-stack.
// Une techno a soit une icône (icon), soit un monogramme mono (mono).
const groupes = [
  {
    cat: "Back-end / .NET",
    items: [
      { nom: "C#", icon: "/images/csharp.svg" },
      { nom: "ASP.NET Core", icon: "/images/dotnetcore.svg" },
      { nom: "Entity Framework", mono: "EF" },
      { nom: "API REST", mono: "{}" },
    ],
  },
  {
    cat: "Front-end",
    items: [
      { nom: "React", icon: "/images/react-svgrepo-com.svg" },
      { nom: "TypeScript", icon: "/images/typescript.svg" },
      { nom: "JavaScript", mono: "JS" },
    ],
  },
  {
    cat: "Données",
    items: [
      { nom: "Oracle", mono: "Or" },
      { nom: "SQL Server", mono: "SQL" },
      { nom: "PostgreSQL", icon: "/images/postgresql.svg" },
    ],
  },
  {
    cat: "Outils",
    items: [
      { nom: "Docker", icon: "/images/docker.svg" },
      { nom: "Git", mono: "git" },
      { nom: "CI/CD", mono: "CI" },
    ],
  },
];

const aussi = ["Next.js", "Node.js", "Tailwind", "MongoDB", "Prisma", "Spring Boot"];

const colonne = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const Stack = () => {
  return (
    <section id="stack" className="mt-28 sm:mt-36">
      <SectionTitle index="02">Stack</SectionTitle>

      <motion.div
        variants={colonne}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-8 grid gap-px border border-[var(--line-strong)] bg-[var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {groupes.map((g) => (
          <div key={g.cat} className="flex flex-col gap-4 bg-ink p-5">
            <p className="label text-signal">{g.cat}</p>
            <ul className="flex flex-col gap-3">
              {g.items.map((t) => (
                <motion.li
                  key={t.nom}
                  variants={item}
                  className="group flex items-center gap-3"
                >
                  {t.icon ? (
                    <img
                      src={t.icon}
                      alt=""
                      className="h-6 w-6 opacity-85 transition-opacity group-hover:opacity-100"
                    />
                  ) : (
                    <span className="mono flex h-6 w-6 items-center justify-center border border-[var(--line-strong)] text-[0.6rem] text-signal">
                      {t.mono}
                    </span>
                  )}
                  <span className="font-display font-medium text-paper">
                    {t.nom}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <p className="mono mt-5 text-sm text-paper/55">
        <span className="text-signal-dim">Également pratiqué · </span>
        {aussi.join(" · ")}
      </p>
    </section>
  );
};
