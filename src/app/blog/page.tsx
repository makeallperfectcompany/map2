import type { Metadata } from "next";
import BlogIndexSection from "@/components/sections/BlogIndexSection";

export const metadata: Metadata = {
  title: "Статьи о маркетинге, рекламе и росте бизнеса — Make All Perfect",
  description:
    "Практические статьи Make All Perfect о performance-рекламе, SEO, маркетплейсах, аналитике, SMM, контенте и системном росте бизнеса.",
  alternates: {
    canonical: "https://map2.vercel.app/blog",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/blog",
    title: "Статьи о маркетинге, рекламе и росте бизнеса — Make All Perfect",
    description:
      "Практические статьи Make All Perfect о performance-рекламе, SEO, маркетплейсах, аналитике, SMM, контенте и системном росте бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Блог Make All Perfect — статьи о маркетинге",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Статьи о маркетинге, рекламе и росте бизнеса — Make All Perfect",
    description:
      "Практические статьи Make All Perfect о performance-рекламе, SEO, маркетплейсах, аналитике, SMM, контенте и системном росте бизнеса.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  return <BlogIndexSection />;
}
