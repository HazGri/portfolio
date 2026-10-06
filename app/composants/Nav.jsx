"use client";

const liens = [
  { label: "Site vitrine", href: "/site-vitrine" },
  { label: "Projets", href: "/#projets" },
  { label: "Stack", href: "/#stack", desktopOnly: true },
  { label: "Contact", href: "/#contact" },
];

const externes = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hazem-g-884824304/" },
  { label: "GitHub", href: "https://github.com/HazGri" },
];

export const Nav = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line-strong)] bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="/" className="group flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center border border-signal text-[0.6rem] font-bold text-signal">
            HG
          </span>
          <span className="label hidden text-paper/70 transition-colors group-hover:text-signal sm:inline">
            47°59′N&nbsp;&nbsp;4°06′W
          </span>
        </a>

        <nav className="flex items-center gap-5 sm:gap-6">
          {liens.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`label nav-link text-paper/70 transition-colors hover:text-signal ${
                l.desktopOnly ? "hidden sm:inline" : ""
              }`}
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
        </nav>
      </div>
    </header>
  );
};
