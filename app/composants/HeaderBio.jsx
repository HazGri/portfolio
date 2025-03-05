"use client";

export const HeaderBio = () => {
  return (
    <div className="text-2xl mt-[50px] flex flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <img
          className="w-[150px]"
          alt="photo de profil"
          src="/images/photo-profil-cv.png"
        />
        <div>
          <p>Hazem Gherissi</p>
          <p className="italic">Developer web junior</p>
        </div>
      </div>

      <p>
        After 10 years in the French Navy, I’m now embarking on a career
        transition into web development. My development course begins in April,
        but I’ve already started self-learning and gaining hands-on experience
        in the field. I’m excited to apply my skills, discipline, and passion
        for continuous learning to this new path.
      </p>
    </div>
  );
};
