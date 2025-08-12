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
      title: "BreizhReport",
      link: "https://breizhreport.vercel.app/",
      description:
        "Application de prévisions météo pour les spots de surf en Bretagne réalisée en React-SpringBoot.",
      img: "/images/breizhReport.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: "/images/spring-boot-icon.svg",
        img_two: "/images/react-svgrepo-com.svg",
      },
    },
    {
      id: 1,
      title: "Log My Jump",
      link: "https://log-my-jump.vercel.app/",
      description:
        "Un carnet de saut virtuel pour suivre tes sauts en parachute et rivaliser avec tes amis grâce à un classement.",
      img: "/images/logmyjump.png",
      techno: {
        clss_one: "md:size-12 sm:size-16 size-12 mb-2 lg:size-12",
        clss_two: " md:size-12 sm:size-16 size-12 mb-2 lg:size-12",
        clss_three: " md:size-8 sm:size-12 size-8 mb-2 ",
        img_one: "/images/nextjs.svg",
        img_two: "/images/prisma.svg",
        img_three: null,
      },
    },
    {
      id: 2,
      title: "Find Your Stack",
      link: "https://find-your-stack.vercel.app/",
      description:
        "Un outil alimenté par l’IA qui te permet de trouver la meilleure stack pour ton projet.",
      img: "/images/findYourStack.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: "/images/react-svgrepo-com.svg",
        img_two: "/images/openai.svg",
      },
    },
    {
      id: 3,
      title: "Health Donald",
      link: "https://health-donald.vercel.app/",
      description:
        "Une plateforme où les utilisateurs peuvent commander des burgers fictifs et gérer leur panier.",
      img: "/images/healthDonald.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: "/images/react-svgrepo-com.svg",
        img_two: "/images/tailwind-svgrepo-com.svg",
      },
    },
    {
      id: 4,
      title: "Image Editor",
      link: "https://image-editor-ten-pi.vercel.app/",
      description:
        "Un outil en ligne qui vous permet de modifier une image avec la possibilité de télécharger la version retouchée.",
      img: "/images/imgEditor.png",
      techno: {
        clss_one: null,
        clss_two: null,
        img_one: "/images/react-svgrepo-com.svg",
        img_two: "/images/tailwind-svgrepo-com.svg",
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
                  onClick={(e) => handleLinkClick(e, project.link)}
                  className="focus:outline-none focus:ring-0" // Gère le clic
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
