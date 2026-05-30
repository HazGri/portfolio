"use client";
import { motion } from "motion/react";

const conteneur = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 sm:pt-40">
      <motion.div
        variants={conteneur}
        initial="hidden"
        animate="show"
        className="grid items-center gap-10 md:grid-cols-[1fr_auto]"
      >
        <div>
          <motion.p variants={item} className="label mb-6 text-signal">
            Relevé · Brest, 48°23′N 4°29′W
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[3.4rem] font-black uppercase leading-[0.92] tracking-tight text-paper sm:text-[5.2rem]"
          >
            Hazem
            <br />
            Gherissi
          </motion.h1>

          <motion.div
            variants={item}
            className="mono mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-paper/75"
          >
            <span>Développeur full-stack</span>
            <span className="text-signal">C# / .NET</span>
            <span className="text-signal-dim">·</span>
            <span>React</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-paper/80"
          >
            Dix ans dans la Marine nationale, aujourd'hui développeur
            full-stack. Je conçois des applications de gestion robustes, du back
            ASP.NET Core au front React.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <a
              href="#projets"
              className="label border border-signal px-5 py-3 text-signal transition-colors hover:bg-signal hover:text-ink"
            >
              Voir les projets ↓
            </a>
            <a
              href="#contact"
              className="label px-2 py-3 text-paper/70 transition-colors hover:text-signal"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* photo en hublot */}
        <motion.div variants={item} className="relative mx-auto md:mx-0">
          <div className="relative h-48 w-48 sm:h-60 sm:w-60">
            <div className="absolute inset-0 rounded-full border border-[var(--line-strong)]" />
            <div className="absolute -inset-3 rounded-full border border-[var(--line)]" />
            <img
              src="/images/photo-profil-cv.webp"
              alt="Hazem Gherissi"
              className="h-full w-full rounded-full object-cover ring-2 ring-signal/60"
            />
            {/* graduations du hublot */}
            <span className="label absolute -top-3 left-1/2 -translate-x-1/2 bg-ink px-1 text-signal">
              N
            </span>
            <span className="label absolute -bottom-3 left-1/2 -translate-x-1/2 bg-ink px-1 text-signal-dim">
              S
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
