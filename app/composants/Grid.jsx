import { Card } from "./Card";

export const Grid = () => {
  return (
    <div className="grid grid-cols-3 my-8 gap-3 flex-wrap justify-center mx-auto max-w-[800px]">
      <Card
        classDiv={""}
        title={"React"}
        img={"/images/react-svgrepo-com.svg"}
        text={
          "During my self-learning, I focused on React to build fast and scalable web applications."
        }
        classNameImg={"animate-[spin_10s_linear_infinite] size-20"}
      />
      <Card
        title={"Tailwind CSS"}
        img={"/images/tailwind-svgrepo-com.svg"}
        text={
          "I prefer Tailwind CSS for its utility-first approach, allowing quick, responsive, and maintainable designs."
        }
        classNameImg={"size-20"}
      />
          <Card
            classDiv={"row-span-2 flex flex-col gap-9"}
            text={
              "My military background has shaped my approach to challenges with discipline, resilience, and adaptability, qualities that I’m eager to apply as I move into the world of technology and development."
            }
            classNameImg={"size-20"}
            title={"Experience"}
            img={"/images/cruiser-military-svgrepo-com.svg"}
          />
        <Card
          classDiv={"col-span-2"}
          text={"I'm using Next.js as my backend framework, along with MongoDB and PostgreSQL, to gain experience with both NoSQL and SQL databases. This gives me more flexibility depending on the project's requirements."}
          classNameImg={"size-20"}
          title={"Back-end"}
          img={"/images/nextjs.svg"}
        />
    </div>
  );
};
