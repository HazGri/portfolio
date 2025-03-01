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
      title: "Movie Finder",
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
      id: 1,
      title: "Image Editor",
      description:
        "An online tool that allows you to modify the padding, border, and shadow of an image, with the option to download the edited image.",
      img: "/images/imgEditor.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: null,
        img_two: null,
      },
    },
    {
      id: 2,
      title: "Pocket Library",
      description:
        "A virtual library where you can manage your books (add, remove) and leave reviews for each one. The site features full CRUD functionality for easy and efficient management.",
      img: "/images/pocketLibrary.png",
      techno: {
        clss_one: "md:size-12 sm:size-16 size-12 lg:size-12",
        clss_two: "md:size-12 sm:size-16 size-12 lg:size-12",
        clss_three: "md:size-12 sm:size-16 size-10 lg:size-10",
        img_one: "/images/nodejs-svgrepo-com.svg",
        img_two: "/images/mongodb-svgrepo-com.svg",
        img_three: "/images/icons8-bootstrap.svg",
      },
    },
    {
      id: 3,
      title: "Apple Timer",
      description:
        "A reproduction of the Apple Timer, allowing users to add and manage multiple timers simultaneously, ideal for tracking several events at once.",
      img: "/images/appleTimer.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: null,
        img_two: null,
      },
    },
  ]);

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
                <Project
                  titre={project.title}
                  description={project.description}
                  img={project.img}
                  techno={project.techno}
                />
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
