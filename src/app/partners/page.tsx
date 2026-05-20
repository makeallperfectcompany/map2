import type { Metadata } from "next";
import PartnersPageSection from "@/components/sections/PartnersPageSection";

export const metadata: Metadata = {
  title: "Партнёрская программа Make All Perfect — зарабатывайте на рекомендациях клиентов",
  description:
    "Партнёрская программа Make All Perfect: рекомендуйте клиентов на рекламу, SEO, сайты, маркетплейсы, CRM, PR и комплексный маркетинг и получайте вознаграждение.",
  alternates: {
    canonical: "https://map2.vercel.app/partners",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/partners",
    title: "Партнёрская программа Make All Perfect",
    description:
      "Партнёрская программа Make All Perfect: рекомендуйте клиентов и получайте вознаграждение.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Партнёрская программа Make All Perfect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Партнёрская программа Make All Perfect",
    description:
      "Партнёрская программа Make All Perfect: рекомендуйте клиентов и получайте вознаграждение.",
    images: ["/og-image.jpg"],
  },
};

export default function PartnersPage() {
  return <PartnersPageSection />;
}
