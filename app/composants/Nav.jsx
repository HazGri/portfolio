"use client";

const liens = [
  { label: "Projets", href: "#projets" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const externes = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hazem-g-884824304/" },
  { label: "GitHub", href: "https://github.com/HazGri" },
];

export const Nav = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line-strong)] bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center border border-signal text-[0.6rem] font-bold text-signal">
            HG
          </span>
          <span className="label hidden text-paper/70 transition-colors group-hover:text-signal sm:inline">
            48°23′N&nbsp;&nbsp;4°29′W
          </span>
        </a>

        <nav className="flex items-center gap-4 sm:gap-6">
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label text-paper/70 transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
          {externes.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label hidden text-paper/70 transition-colors hover:text-signal md:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Gherissi-Hazem-CV.pdf"
            download="Gherissi-Hazem-CV.pdf"
            className="label border border-signal px-3 py-1.5 text-signal transition-colors hover:bg-signal hover:text-ink"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
};
