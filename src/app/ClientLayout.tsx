"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onBurgerClick={handleBurgerClick}
      />
      <div
        className={`overlay ${menuOpen ? "overlay--visible" : ""}`}
        onClick={handleBurgerClick}
      />
      {children}
    </>
  );
}
