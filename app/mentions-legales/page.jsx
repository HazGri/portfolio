import { ChartBackground } from "../composants/ChartBackground";
import { Nav } from "../composants/Nav";
import { SectionTitle } from "../composants/SectionTitle";
import { Footer } from "../composants/Footer";

export const metadata = {
  title: "Mentions légales · Hazem Gherissi",
  description: "Mentions légales du site hazemgherissi.com.",
  robots: { index: false, follow: true },
};

const email = "hazemgherissi@gmail.com";

const Bloc = ({ titre, children }) => (
  <div className="border-t border-[var(--line)] py-6 first:border-t-0">
    <h2 className="label mb-3 text-signal">{titre}</h2>
    <div className="flex flex-col gap-1 text-paper/80">{children}</div>
  </div>
);

export default function MentionsLegales() {
  return (
    <>
      <ChartBackground />
      <Nav />
      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-24">
        <section className="pt-32 sm:pt-40">
          <SectionTitle index="··">Mentions légales</SectionTitle>

          <div className="mt-8 max-w-2xl">
            <Bloc titre="Éditeur du site">
              <p>Hazem Gherissi, entrepreneur individuel (EI)</p>
              <p>29000 Quimper, France</p>
              {/* TODO SIRET : remplacer par le numéro SIRET de l'établissement de Quimper dès son attribution */}
              <p>SIRET : en cours d'attribution</p>
              <p>
                Contact :{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-signal transition-colors hover:text-paper"
                >
                  {email}
                </a>
              </p>
              <p>Directeur de la publication : Hazem Gherissi</p>
            </Bloc>

            <Bloc titre="Hébergement">
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-signal transition-colors hover:text-paper"
                >
                  vercel.com
                </a>
              </p>
            </Bloc>

            <Bloc titre="Données personnelles">
              <p>
                Ce site ne comporte pas de formulaire et ne dépose pas de cookie
                publicitaire. Les informations que vous envoyez par email sont
                utilisées uniquement pour répondre à votre demande et ne sont
                jamais transmises à des tiers.
              </p>
              <p>
                La mesure d'audience est assurée par Vercel Analytics, sans
                cookie et sans collecte de données permettant de vous
                identifier.
              </p>
              <p>
                Conformément au RGPD, vous pouvez demander l'accès, la
                rectification ou la suppression de vos données en écrivant à{" "}
                {email}.
              </p>
            </Bloc>

            <Bloc titre="Propriété intellectuelle">
              <p>
                Les textes, visuels et le code de ce site sont la propriété de
                Hazem Gherissi, sauf mention contraire. Les captures de projets
                clients sont présentées avec leur accord.
              </p>
            </Bloc>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
}
