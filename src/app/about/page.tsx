import type { Metadata } from "next";
import AboutPageSection from "@/components/sections/AboutPageSection";

export const metadata: Metadata = {
  title: "О Make All Perfect — маркетинговое агентство полного цикла",
  description:
    "Make All Perfect — маркетинговое агентство полного цикла: реклама, SEO, маркетплейсы, сайты, контент, CRM, PR и аналитика. Строим маркетинг как систему роста бизнеса.",
  alternates: {
    canonical: "https://map2.vercel.app/about",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/about",
    title: "О Make All Perfect — маркетинговое агентство полного цикла",
    description:
      "Make All Perfect — маркетинговое агентство полного цикла: реклама, SEO, маркетплейсы, сайты, контент, CRM, PR и аналитика. Строим маркетинг как систему роста бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "О Make All Perfect — маркетинговое агентство",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "О Make All Perfect — маркетинговое агентство полного цикла",
    description:
      "Make All Perfect — маркетинговое агентство полного цикла: реклама, SEO, маркетплейсы, сайты, контент, CRM, PR и аналитика.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutPageSection />;
}
