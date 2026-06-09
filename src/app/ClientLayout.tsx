"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import BurgerMenu from "@/components/layout/BurgerMenu";
import Footer from "@/components/layout/Footer";
import CookieNotice from "@/components/common/CookieNotice";
import { PopupProvider } from "@/components/modals/PopupProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <PopupProvider>
      <Header
        menuOpen={menuOpen}
        onBurgerClick={handleBurgerClick}
      />
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {children}
      <Footer />
      <CookieNotice />
    </PopupProvider>
  );
}
