"use client";

import { Projects } from "./composants/Projects";
import { Header } from "./composants/Header";
import { HeaderBio } from "./composants/HeaderBio";
import { Grid } from "./composants/Grid";
import { Footer } from "./composants/Footer";

export default function Home() {
  return (
    <div className="mt-24 min-h-full max-w-4xl mx-auto gap-5 flex flex-col">
      <Header />
      <HeaderBio />
      <p className="my-9 font-bold text-4xl">Mes projets</p>
      <Projects />
      <p className="mt-24 font-bold text-4xl"> La stack que je développe</p>
      <Grid />
      <Footer />
    </div>
  );
}
