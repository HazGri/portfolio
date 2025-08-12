"use client";

export const HeaderBio = () => {
  return (
    <div className="text-2xl mt-[50px] flex flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <img
          className="w-[150px]"
          alt="photo de profil"
          src="/images/photo-profil-cv.webp"
        />
        <div>
          <p>Hazem Gherissi</p>
          <p className="italic">Développeur Web Junior</p>
        </div>
      </div>

      <p>
        Après 10 ans de service dans la Marine nationale, je me lance dans une
        reconversion professionnelle vers le développement web. Mon parcours a
        démarré en autodidacte, avec une expérience pratique déjà développée
        avant la formation. Je suis motivé à mettre à profit mes compétences, ma
        rigeur et ma passion pour l’apprentissage continu dans cette nouvelle
        voie. <br /> Je suis actuellement à la recherche d’une alternance pour
        un Bachelor Concepteur Développeur d’Applications à partir de novembre
        2025.
      </p>
    </div>
  );
};
