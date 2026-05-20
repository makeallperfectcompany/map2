import type { Metadata } from "next";
import ReviewsIndexSection from "@/components/sections/ReviewsIndexSection";

export const metadata: Metadata = {
  title: "Отзывы и благодарственные письма клиентов — Make All Perfect",
  description:
    "Отзывы, благодарственные письма и подтверждения результатов по проектам Make All Perfect: SEO, реклама, маркетплейсы, сайты и комплексный маркетинг.",
  alternates: {
    canonical: "https://map2.vercel.app/reviews",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/reviews",
    title: "Отзывы и благодарственные письма клиентов — Make All Perfect",
    description:
      "Отзывы, благодарственные письма и подтверждения результатов по проектам Make All Perfect: SEO, реклама, маркетплейсы, сайты и комплексный маркетинг.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Отзывы клиентов Make All Perfect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Отзывы и благодарственные письма клиентов — Make All Perfect",
    description:
      "Отзывы, благодарственные письма и подтверждения результатов по проектам Make All Perfect.",
    images: ["/og-image.jpg"],
  },
};

export default function ReviewsPage() {
  return <ReviewsIndexSection />;
}
