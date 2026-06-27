import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/sections/Intro";
import { Approach } from "@/components/sections/Approach";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";
import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <Intro />
      <Approach />
      <Services />
      <Why />
      <Work />
      <CTA />
    </div>
  );
}
