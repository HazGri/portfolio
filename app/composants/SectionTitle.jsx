"use client";
import { Reveal } from "./Reveal";

export const SectionTitle = ({ index, children }) => {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="mono text-sm text-signal">{index}</span>
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-paper sm:text-3xl">
          {children}
        </h2>
        <span className="h-px flex-1 translate-y-[-0.35rem] bg-[var(--line-strong)]" />
      </div>
    </Reveal>
  );
};
