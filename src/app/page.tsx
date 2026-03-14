import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ImpactTimeline } from "@/components/sections/ImpactTimeline";
import { WhatIBuild } from "@/components/sections/WhatIBuild";
import { Values } from "@/components/sections/Values";
import { Leadership } from "@/components/sections/Leadership";
import { MyStory } from "@/components/sections/MyStory";
import { Recommendations } from "@/components/sections/Recommendations";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImpactTimeline />
        <WhatIBuild />
        <Values />
        <Leadership />
        <MyStory />
        <Recommendations />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
