import type { Metadata } from "next";
import JobsPageSection from "@/components/sections/JobsPageSection";

export const metadata: Metadata = {
  title: "Карьера в Make All Perfect — вакансии маркетингового агентства",
  description:
    "Открытые вакансии Make All Perfect: реклама, SEO, маркетплейсы, дизайн, контент и продажи. Удалённый формат, сильные проекты и работа на результат.",
  alternates: {
    canonical: "https://map2.vercel.app/jobs",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/jobs",
    title: "Карьера в Make All Perfect — вакансии маркетингового агентства",
    description:
      "Открытые вакансии Make All Perfect: реклама, SEO, маркетплейсы, дизайн, контент и продажи.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Вакансии Make All Perfect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Карьера в Make All Perfect — вакансии маркетингового агентства",
    description:
      "Открытые вакансии Make All Perfect: реклама, SEO, маркетплейсы, дизайн, контент и продажи.",
    images: ["/og-image.jpg"],
  },
};

export default function JobsPage() {
  return <JobsPageSection />;
}
