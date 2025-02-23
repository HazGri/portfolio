'use client'
import { Project } from "./Project";
import { useState } from "react";


export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "titre 1",
      description: "je suis la description numero 1",
      img: "/images/movieFinder.png",
    },
    {
      id: 1,
      title: "titre 2",
      description: "je suis la description numero 2",
      img: "/images/imgEditor.png",
    },
    {
      id: 3,
      title: "titre 3",
      description: "je suis la description numero 3",
      img: "/images/pocketLibrary.png",
    },
    {
      id: 4,
      title: "titre 3",
      description: "je suis la description numero 3",
      img: "/images/appleTimer.png",
    },
  ]);
  return (
    <div>
      <div className="header-project">
        <p>Projects</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, pariatur!</p>
      </div>
      <div className="flex">
        {projects.map((project) => {
          return (<Project key={project.id} titre={project.title} description={project.description} img={project.img}/>);
        })}
      </div>
    </div>
  );
};
