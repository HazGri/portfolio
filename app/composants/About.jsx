"use client";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const reperes = [
  ["Poste", "Dev full-stack @ Synapsy"],
  ["Stack", "C# / .NET · React"],
  ["Base", "Brest (29)"],
  ["Avant", "Marine nationale · 2016–2025"],
];

export const About = () => {
  return (
    <section className="mt-28 sm:mt-36">
      <SectionTitle index="00">Journal de bord</SectionTitle>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <p className="text-lg leading-relaxed text-paper/85">
            Après près de dix ans dans la Marine nationale comme chef d'équipe
            fusilier marin, j'ai changé de cap pour le développement web.
            Aujourd'hui développeur full-stack C# / .NET chez Synapsy, je conçois
            et je maintiens des applications de gestion au quotidien. J'amène à
            mes projets ce que la Marine m'a appris : de la rigueur, du
            sang-froid et le goût du travail bien fait.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="border border-[var(--line-strong)] p-5">
            <p className="label mb-4 text-signal-dim">Position</p>
            <ul className="flex flex-col gap-3">
              {reperes.map(([k, v]) => (
                <li key={k} className="flex items-end">
                  <span className="mono text-xs uppercase tracking-wider text-paper/55">
                    {k}
                  </span>
                  <span className="leader" />
                  <span className="mono text-sm text-paper">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
