export const Footer = () => {
  return (
    <div className="mono mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] py-6 text-xs text-paper/40">
      <span>Hazem Gherissi</span>
      <a
        href="/mentions-legales"
        className="transition-colors hover:text-signal"
      >
        Mentions légales
      </a>
      <span>Fin de carte · Quimper 47°59′N 4°06′W · 2026</span>
    </div>
  );
};
