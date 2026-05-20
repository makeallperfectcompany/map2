import type { Metadata } from "next";
import ContactsPageSection from "@/components/sections/ContactsPageSection";

export const metadata: Metadata = {
  title: "Контакты Make All Perfect — обсудить проект",
  description:
    "Свяжитесь с Make All Perfect: реклама, SEO, маркетплейсы, сайты, CRM, PR и комплексный маркетинг. Телефон, email, мессенджеры и реквизиты.",
  alternates: {
    canonical: "https://map2.vercel.app/contacts",
  },
  openGraph: {
    type: "website",
    url: "https://map2.vercel.app/contacts",
    title: "Контакты Make All Perfect — обсудить проект",
    description:
      "Свяжитесь с Make All Perfect: реклама, SEO, маркетплейсы, сайты, CRM, PR и комплексный маркетинг.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Контакты Make All Perfect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты Make All Perfect — обсудить проект",
    description:
      "Свяжитесь с Make All Perfect: реклама, SEO, маркетплейсы, сайты, CRM, PR и комплексный маркетинг.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactsPage() {
  return <ContactsPageSection />;
}
