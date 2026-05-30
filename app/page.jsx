import { ChartBackground } from "./composants/ChartBackground";
import { Nav } from "./composants/Nav";
import { Hero } from "./composants/Hero";
import { About } from "./composants/About";
import { Projects } from "./composants/Projects";
import { Stack } from "./composants/Stack";
import { Contact } from "./composants/Contact";

export default function Home() {
  return (
    <>
      <ChartBackground />
      <Nav />
      <main className="relative z-10 mx-auto max-w-5xl px-5 pb-24">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
