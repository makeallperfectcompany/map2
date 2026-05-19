import type { Metadata } from "next";
import { Onest } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
