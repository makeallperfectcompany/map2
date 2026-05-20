"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Header menuOpen={menuOpen} onBurgerClick={handleBurgerClick} />
      <HeroSection menuOpen={menuOpen} onMenuClose={handleMenuClose} />
      <ServicesSection />
      <CasesSection />
    </>
  );
}
