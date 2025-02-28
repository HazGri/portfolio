import { Card } from "./Card";

export const Grid = () => {
  return (
    <div className="flex my-8 gap-3 flex-wrap justify-center mx-auto max-w-[800px]">
      <Card
        height={"h-60"}
        width={"w-[250px]"}
        title={"React"}
        img={"/images/react-svgrepo-com.svg"}
        text={
          "During my self-learning, I focused on React to build fast and scalable web applications"
        }
        className={"animate-[spin_10s_linear_infinite] size-20"}
      />
      <Card
        height={"h-60"}
        width={"w-[250px]"}
        title={"Tailwind CSS"}
        img={"/images/tailwind-svgrepo-com.svg"}
        text={
          "I prefer Tailwind CSS for its utility-first approach, allowing quick, responsive, and maintainable designs."
        }
        className={"size-20"}
      />
        <Card
          height={"h-[500px]"}
          width={"w-[250px]"}
          text={""}
          className={"size-20"}
          title={"Back-end"}
          img={"/images/cruiser-military-svgrepo-com.svg"}
        />
      <Card
        height={"h-60"}
        width={"w-[480px]"}
        text={
          "My military background has shaped my approach to challenges with discipline, resilience, and adaptability, qualities that I’m eager to apply as I move into the world of technology and development."
        }
        className={"size-20"}
        title={"Experience"}
        img={"/images/cruiser-military-svgrepo-com.svg"}
      />
    </div>
  );
};
