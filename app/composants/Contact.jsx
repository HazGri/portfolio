"use client";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Footer } from "./Footer";

const liens = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hazem-g-884824304/" },
  { label: "GitHub", href: "https://github.com/HazGri" },
];

export const Contact = () => {
  return (
    <section id="contact" className="mt-28 sm:mt-36">
      <SectionTitle index="03">Contact</SectionTitle>

      <Reveal delay={0.05}>
        <p className="mono mt-8 text-sm text-paper/60">
          Une mission, une question, un café à Quimper ?
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

      <Footer />
    </section>
  );
};
