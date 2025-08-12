import { Card } from "./Card";

export const Grid = () => {
  return (
    <div className="grid grid-cols-3 my-8 gap-3 flex-wrap justify-center mx-auto max-w-[800px]">
      <Card
        classDiv={""}
        title={"React"}
        img={"/images/react-svgrepo-com.svg"}
        text={
          "Autodidacte, je me suis focalisé sur React pour développer des applications web rapides et évolutives."
        }
        classNameImg={"animate-[spin_10s_linear_infinite] size-20"}
      />
      <Card
        title={"Tailwind CSS"}
        img={"/images/tailwind-svgrepo-com.svg"}
        text={
          "Je préfère Tailwind CSS pour son approche utility-first, qui permet de créer des designs rapides, responsives et faciles à maintenir."
        }
        classNameImg={"size-20"}
      />
      <Card
        classDiv={"row-span-2 flex flex-col gap-9"}
        text={
          "Mon expérience militaire a forgé ma rigueur, ma résilience et ma capacité d’adaptation, des qualités que je souhaite mettre à profit dans le domaine de la technologie et du développement."
        }
        classNameImg={"size-20"}
        title={"Experience"}
        img={"/images/cruiser-military-svgrepo-com.svg"}
      />
      <Card
        classDiv={"col-span-2"}
        text={
          "J’utilise Node.js comme backend, avec MongoDB et PostgreSQL, pour acquérir de l’expérience à la fois avec les bases NoSQL et SQL. Cela me permet d’être plus flexible selon les besoins du projet."
        }
        classNameImg={"size-20"}
        title={"Back-end"}
        img={"/images/nodejs.svg"}
      />
    </div>
  );
};
