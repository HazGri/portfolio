"use client";

import { CarouselSpacing } from "./composants/Carousel";
import { Header } from "./composants/Header";
import { HeaderBio } from "./composants/HeaderBio";
import { Projects } from "./composants/Projects.jsx";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col">
    <Header />
    <HeaderBio />
    <Projects />
    <CarouselSpacing />
  </div>
  );
}
