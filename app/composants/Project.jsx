"use client";

export const Project = ({ titre, description, img, techno }) => {
  return (
    <div className="h-full select-none relative group">
      <div className="font-bold z-[99] absolute inset-0 flex flex-col p-4 sm:justify-evenly justify-between transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <h3 className="lg:text-base text-4xl text-black">{titre}</h3>
        <p className="lg:text-xs hidden md:block text-gray-400 mt-2">
         {description}
        </p>
        <p className="lg:text-xs md:hidden text-gray-400 mt-2">
          {description.length > 150
            ? description.substring(0, 150) + "..."
            : description}
        </p>
        <div className="flex gap-2 items-center">
        
        </div>
      </div>
            <img
              className="z-[49]  blur-2xl transition-all duration-300 group-hover:blur-none h-full w-full object-cover"
              alt="image du projet"
              src={img}
            />
    </div>
  );
};
