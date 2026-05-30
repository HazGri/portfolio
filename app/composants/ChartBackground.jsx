"use client";

// Fond façon carte marine : lignes de sonde (bathymétrie) + réticule de relèvement.
// Purement décoratif, posé derrière le contenu.
export const ChartBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-0 h-full w-[1600px] -translate-x-1/2 opacity-[0.5]"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="var(--signal-dim)" strokeWidth="1">
          {/* trois sondes concentriques, comme un haut-fond relevé */}
          <path d="M1180 120 C 1320 180, 1360 320, 1240 420 C 1120 520, 940 480, 920 360 C 905 250, 1040 60, 1180 120 Z" opacity="0.55" />
          <path d="M1180 180 C 1280 225, 1300 320, 1220 390 C 1140 460, 1010 430, 995 350 C 982 275, 1080 135, 1180 180 Z" opacity="0.4" />
          <path d="M1175 235 C 1240 265, 1250 325, 1200 370 C 1150 415, 1070 395, 1062 345 C 1055 300, 1110 205, 1175 235 Z" opacity="0.3" />

          {/* lignes de courant qui traversent la carte */}
          <path d="M-40 760 C 280 700, 520 840, 820 770 C 1120 700, 1340 820, 1660 750" opacity="0.5" />
          <path d="M-40 820 C 300 770, 540 900, 840 830 C 1140 760, 1360 880, 1660 815" opacity="0.35" />
          <path d="M-40 700 C 260 640, 500 770, 800 700 C 1100 630, 1320 750, 1660 680" opacity="0.3" />
        </g>

        {/* réticule de relèvement en haut à gauche */}
        <g stroke="var(--signal)" strokeWidth="1" opacity="0.45">
          <circle cx="240" cy="300" r="78" fill="none" />
          <circle cx="240" cy="300" r="40" fill="none" opacity="0.6" />
          <line x1="240" y1="190" x2="240" y2="410" />
          <line x1="130" y1="300" x2="350" y2="300" />
        </g>
      </svg>
    </div>
  );
};
