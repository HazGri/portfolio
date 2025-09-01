"use client";

import { Projects } from "./composants/Projects";
import { Header } from "./composants/Header";
import { HeaderBio } from "./composants/HeaderBio";
import { Grid } from "./composants/Grid";
import { Footer } from "./composants/Footer";
import BlurText from "./composants/BlurText";

export default function Home() {
  return (
    <div className="mt-24 min-h-full max-w-4xl mx-auto gap-5 flex flex-col">
      <Header />
      <HeaderBio />
      <BlurText
        text="Mes projets"
        delay={150}
        animateBy="words"
        direction="top"
        className="my-9 font-bold text-4xl mt-[3rem]"
      />
      <Projects />
      <BlurText
        text="La stack que je développe"
        delay={150}
        animateBy="words"
        direction="top"
        className="mt-24 font-bold text-4xl mb-[3rem]"
      />
      <Grid />
      <Footer />
    </div>
  );
}
