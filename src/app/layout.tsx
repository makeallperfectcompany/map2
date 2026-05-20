"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Make All Perfect — маркетинг полного цикла",
  description:
    "Мы объединяем стратегию, дизайн, рекламу, контент и аналитику в единую систему роста бизнеса.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.webp", sizes: "32x32", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
      { url: "/android-chrome-192x192.webp", sizes: "192x192", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <html lang="ru" className={onest.variable}>
      <body>
        <Header
          menuOpen={menuOpen}
          onBurgerClick={handleBurgerClick}
          onNavClick={handleNavClick}
        />
        <div
          className={`overlay ${menuOpen ? "overlay--visible" : ""}`}
          onClick={handleBurgerClick}
        />
        {children}
      </body>
    </html>
  );
}
