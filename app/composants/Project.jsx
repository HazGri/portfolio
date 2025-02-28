"use client";

export const Project = ({ titre, description, img, techno }) => {
  return (
    <div className="h-full select-none relative group">
      <div className="font-bold z-[99] absolute inset-0 flex flex-col p-4 sm:justify-evenly justify-between transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <h3 className="lg:text-base text-4xl text-black">{titre}</h3>
        <p className="lg:text-xs text-gray-800 mt-2">
          {description.length > 80
            ? description.substring(0, 80) + "..."
            : description}
        </p>
        <div className="flex gap-2 items-center">
          <img src={techno.img_one} className={techno.clss_one + " pb-2"} />
          <img src={techno.img_two} className={techno.clss_two + " pb-2"} />
          <img src={techno.img_three} className={techno.clss_three + " pb-2"} />
        </div>
      </div>
      <img
        className="z-[49] blur-2xl transition-all duration-300 group-hover:blur-none h-full w-full object-cover"
        alt="image du projet"
        src={img}
      />
    </div>
  );
};
