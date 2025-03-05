"use client";
import { Project } from "./Project";
import { useState } from "react";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Health Donald",
      link: "https://health-donald.vercel.app/",
      description:
        "A platform where users can purchase fictional burgers and manage their cart.",
      img: "/images/healthDonald.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: null,
        img_two: null,
      },
    },
    {
      id: 1,
      title: "Movie Finder",
      link: "https://movie-finder-tau-ten.vercel.app/",
      description:
        "A movie search site where you can simply input a movie title to retrieve information about it.",
      img: "/images/movieFinder.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: null,
        img_two: null,
      },
    },
    {
      id: 2,
      title: "Image Editor",
      link: "https://image-editor-ten-pi.vercel.app/",
      description:
        "An online tool that allows you to edit an image with the option to download the edited version.",
      img: "/images/imgEditor.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: null,
        img_two: null,
      },
    },
    {
      id: 3,
      title: "Pocket Library",
      link: "/",
      description:
        "A virtual library where you can manage your books (add, remove and delete).",
      img: "/images/pocketLibrary.png",
      techno: {
        clss_one: "md:size-12 sm:size-16 size-12 mb-2 lg:size-12",
        clss_two: " md:size-12 sm:size-16 size-12 mb-2 lg:size-12",
        clss_three: " md:size-8 sm:size-12 size-8 mb-2 ",
        img_one: "/images/nodejs-svgrepo-com.svg",
        img_two: "/images/mongodb-svgrepo-com.svg",
        img_three: "/images/icons8-bootstrap.svg",
      },
    },
    {
      id: 4,
      title: "Apple Timer",
      link: "https://apple-timer-rose.vercel.app",
      description:
        "A reproduction of the Apple Timer, allowing users to add and manage multiple timers simultaneously.",
      img: "/images/appleTimer.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: null,
        img_two: null,
      },
    },
  ]);

  const [isLinkDisabled, setIsLinkDisabled] = useState(false);

  const handleLinkClick = (e, link) => {
    e.preventDefault();

    setIsLinkDisabled(true);

    setTimeout(() => {
      window.location.href = link;
    }, 500);
  };

  return (
    <Carousel className="w-10/12 self-center">
      <CarouselContent className="-ml-1">
        {projects.map((project) => (
          <CarouselItem
            key={project.id}
            className="pl-3 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="overflow-hidden h-full">
              <CardContent className="relative p-0 h-full w-fit cursor-pointer">
                <a
                  href={isLinkDisabled ? "#" : project.link} // Lien désactivé si isLinkDisabled
                  onClick={(e) => handleLinkClick(e, project.link)} // Gère le clic
                >
                  <Project
                    titre={project.title}
                    description={project.description}
                    img={project.img}
                    techno={project.techno}
                  />
                </a>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
