"use client";

import { Projects } from "./composants/Projects";
import { Header } from "./composants/Header";
import { HeaderBio } from "./composants/HeaderBio";
import { Grid } from "./composants/Grid";

export default function Home() {
  return (
    <div className="min-h-full max-w-4xl mx-auto gap-5 flex flex-col">
      <Header />
      <HeaderBio />
      <p className="my-9 font-bold text-4xl">My projects</p>
      <Projects />
      <p className="mt-24 font-bold text-4xl">My stack</p>
      <Grid/>
    </div>
  );
}
