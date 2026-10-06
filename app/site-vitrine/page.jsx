import { ChartBackground } from "../composants/ChartBackground";
import { Nav } from "../composants/Nav";
import { Reveal } from "../composants/Reveal";
import { SectionTitle } from "../composants/SectionTitle";
import { Footer } from "../composants/Footer";

const titre = "Création de site vitrine à Quimper, Finistère · Hazem Gherissi";
const description =
  "Site vitrine sur mesure pour artisans, commerçants, indépendants et associations en Bretagne : moderne, rapide, que vous modifiez vous-même. À partir de 1 500 € HT, livré en 2 à 3 semaines.";

export const metadata = {
  title: titre,
  description,
  keywords:
    "création site vitrine Quimper, site internet Finistère, création site web Bretagne, site vitrine artisan, site vitrine association, développeur web Quimper",
  alternates: { canonical: "https://hazemgherissi.com/site-vitrine" },
  openGraph: {
    title: titre,
    description,
    url: "https://hazemgherissi.com/site-vitrine",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://hazemgherissi.com/images/asso-internes.png",
        alt: "Exemple de site vitrine réalisé : Internes de Breizh",
      },
    ],
  },
};

const inclus = [
  {
    k: "Pages",
    v: "Jusqu'à 5 pages (accueil, services, à propos, actualités, contact), adaptées au mobile.",
  },
  {
    k: "Autonomie",
    v: "Un espace d'administration pour modifier vous-même vos textes, photos et actualités, sans développeur.",
  },
  {
    k: "Visibilité",
    v: "Un formulaire de contact et le référencement de base (Google, fiche d'établissement).",
  },
  {
    k: "Mise en ligne",
    v: "Publication du site et une heure de prise en main en visio.",
  },
];

const options = [
  "Pages supplémentaires",
  "Prise de rendez-vous en ligne",
  "Espace adhérents ou réservé aux membres",
  "Maintenance et hébergement au mois (environ 30 €/mois)",
];

const etapes = [
  ["Échange", "Un premier appel gratuit pour comprendre votre activité et vos besoins."],
  ["Devis", "Une proposition claire, au forfait, sans surprise."],
  ["Maquette", "Une première version visuelle que l'on ajuste ensemble."],
  ["Développement", "La construction du site et de votre espace d'administration."],
  ["Mise en ligne", "Publication, référencement de base et prise en main."],
];

const email = "hazemgherissi@gmail.com";
const malt = "https://www.malt.fr/profile/hazemgherissi";

export default function SiteVitrine() {
  return (
    <>
      <ChartBackground />
      <Nav />
      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-24">
        {/* accroche */}
        <section className="pt-32 sm:pt-40">
          <Reveal>
            <p className="label mb-6 text-signal">
              Offre · Site vitrine · Quimper, Finistère
            </p>
            <h1 className="font-display text-[2.6rem] font-black uppercase leading-[0.95] tracking-tight text-paper sm:text-[4.2rem]">
              Votre site internet,
              <br />
              simple à faire vivre
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
              Artisan, commerçant, indépendant ou association : je crée votre
              site vitrine sur mesure, moderne et rapide. Vous modifiez
              vous-même vos textes, photos et actualités, sans dépendre d'un
              développeur.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}?subject=Projet%20de%20site%20vitrine`}
                className="label border border-signal px-5 py-3 text-signal transition-colors hover:bg-signal hover:text-ink"
              >
                Demander un devis
              </a>
              <span className="mono text-sm text-paper/60">
                À partir de <span className="text-signal">1 500 € HT</span> ·
                livré en 2 à 3 semaines
              </span>
            </div>
          </Reveal>
        </section>

        {/* ce qui est inclus */}
        <section className="mt-28 sm:mt-36">
          <SectionTitle index="01">Ce qui est inclus</SectionTitle>
          <Reveal delay={0.05}>
            <div className="mt-8 border border-[var(--line-strong)] p-5 sm:p-8">
              <p className="label mb-6 text-signal-dim">
                Forfait à partir de 1 500 € HT
              </p>
              <ul className="flex flex-col gap-5">
                {inclus.map(({ k, v }) => (
                  <li
                    key={k}
                    className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
                  >
                    <span className="mono text-xs uppercase tracking-wider text-signal">
                      {k}
                    </span>
                    <span className="text-paper/85">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mb-4 mt-10 text-signal-dim">En option</p>
            <div className="flex flex-wrap gap-2">
              {options.map((o) => (
                <span
                  key={o}
                  className="mono border border-[var(--line-strong)] px-3 py-1 text-xs text-paper/75"
                >
                  {o}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* déroulé */}
        <section className="mt-28 sm:mt-36">
          <SectionTitle index="02">Comment ça se passe</SectionTitle>
          <ol className="mt-8 flex flex-col">
            {etapes.map(([nom, detail], i) => (
              <Reveal key={nom} delay={0.04 * i}>
                <li className="flex items-baseline gap-4 border-t border-[var(--line)] py-5 first:border-t-0">
                  <span className="mono text-sm text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-bold tracking-tight text-paper sm:text-2xl">
                    {nom}
                  </span>
                  <span className="leader hidden sm:block" />
                  <span className="max-w-sm text-sm text-paper/70">{detail}</span>
                </li>
              </Reveal>
            ))}
          </ol>
          <p className="mono mt-4 text-sm text-paper/60">
            Délai indicatif : 2 à 3 semaines, selon le contenu fourni.
          </p>
        </section>

        {/* exemple */}
        <section className="mt-28 sm:mt-36">
          <SectionTitle index="03">Un exemple</SectionTitle>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-[1fr_minmax(320px,50%)]">
            <Reveal delay={0.05}>
              <h3 className="font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                Internes de Breizh
              </h3>
              <p className="mt-4 text-paper/80">
                Le site de l'association des internes en médecine de Bretagne.
                Le bureau de l'association gère seul tout le contenu
                (événements, actualités, pages) grâce à son espace
                d'administration.
              </p>
              <a
                href="https://internesdebreizh.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="mono mt-4 inline-block text-sm text-signal transition-colors hover:text-paper"
              >
                internesdebreizh.fr ↗
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href="https://internesdebreizh.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[var(--line-strong)] p-2"
              >
                <img
                  src="/images/asso-internes.png"
                  alt="Site Internes de Breizh, réalisé par Hazem Gherissi"
                  className="w-full"
                />
              </a>
            </Reveal>
          </div>
        </section>

        {/* contact */}
        <section className="mt-28 sm:mt-36">
          <SectionTitle index="04">Parlons de votre site</SectionTitle>
          <Reveal delay={0.05}>
            <p className="mono mt-8 text-sm text-paper/60">
              Basé à Quimper (Finistère), je travaille à distance partout en
              France, avec des échanges en visio à chaque étape.
            </p>
            <a
              href={`mailto:${email}?subject=Projet%20de%20site%20vitrine`}
              className="mt-3 inline-block font-display text-3xl font-bold tracking-tight text-paper underline-offset-8 transition-colors hover:text-signal hover:underline sm:text-5xl"
            >
              {email}
            </a>
            <div className="mono mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/70">
              <a
                href={malt}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-signal"
              >
                Mon profil Malt ↗
              </a>
              <span className="text-signal-dim">·</span>
              <a href="/" className="transition-colors hover:text-signal">
                Mes autres projets
              </a>
            </div>
          </Reveal>
          <Footer />
        </section>
      </main>
    </>
  );
}
