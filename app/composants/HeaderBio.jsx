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
          <p>Developpeur web junior</p>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum
        officiis explicabo labore est suscipit iusto fugiat, numquam, ut
        similique cumque omnis sunt quod impedit vel facere tempore aut quo.
      </p>
    </div>
  );
};
