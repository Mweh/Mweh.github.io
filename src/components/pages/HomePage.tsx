import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Freelance } from "@/components/sections/Freelance";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Freelance />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
