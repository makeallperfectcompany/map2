"use client";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <CasesSection />
      </main>
    </>
  );
}
