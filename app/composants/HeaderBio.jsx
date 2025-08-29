"use client";
import TextType from "./TextType";

export const HeaderBio = () => {
  return (
    <div className="text-2xl mt-[50px] flex flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <img
          className="w-[150px] h-[150px] object-cover"
          alt="photo de profil"
          src="/images/photo-profil-cv.webp"
        />

        <div>
          <p>Hazem Gherissi</p>
          <TextType
            text={[
              "Développeur Web",
              "Votre futur alternant ?",
              "Edition limitée",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>

      <p>
        Après 10 ans dans la Marine nationale, je change de cap pour le
        développement web. J’ai déjà posé mes premiers projets en autodidacte et
        je suis prêt à mettre ma rigueur, ma capacité d’adaptation et ma soif
        d’apprendre au service de projets ambitieux.
        <br /> Je cherche une alternance pour un Bachelor Concepteur Développeur
        d’Applications dès novembre 2025.
      </p>
    </div>
  );
};
