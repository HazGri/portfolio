'use client';

export const Project = ({ titre, description, img }) => {
  return (
    <div className="relative z-[100] border-[3px] w-9/12">
      <h3 className="absolute z-[101] text-[red] left-[15px] top-2.5">{titre}</h3>
      <p className="absolute text-[red] z-[101] left-[15px] top-[25px]">{description}</p>
      <img className="w-fit h-full z-[99]" alt="image du projet" src={img} />
    </div>
  );
};
