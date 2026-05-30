"use client";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const liens = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hazem-g-884824304/" },
  { label: "GitHub", href: "https://github.com/HazGri" },
  { label: "CV (PDF)", href: "/Gherissi-Hazem-CV.pdf" },
];

export const Contact = () => {
  return (
    <section id="contact" className="mt-28 sm:mt-36">
      <SectionTitle index="03">Contact</SectionTitle>

      <Reveal delay={0.05}>
        <p className="mono mt-8 text-sm text-paper/60">
          Une mission, une question, un café à Brest ?
        </p>
        <a
          href="mailto:hazemgherissi@gmail.com"
          className="mt-3 inline-block font-display text-3xl font-bold tracking-tight text-paper underline-offset-8 transition-colors hover:text-signal hover:underline sm:text-5xl"
        >
          hazemgherissi@gmail.com
        </a>

        <div className="mono mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/70">
          <span>06 29 15 12 31</span>
          <span className="text-signal-dim">·</span>
          {liens.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </Reveal>

      <div className="mono mt-20 flex items-center justify-between border-t border-[var(--line)] py-6 text-xs text-paper/40">
        <span>Hazem Gherissi</span>
        <span>Fin de carte · Brest 48°23′N 4°29′W · 2026</span>
      </div>
    </section>
  );
};
