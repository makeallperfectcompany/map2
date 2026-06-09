import type { Metadata } from "next";
import GeoHeroSection from "@/components/sections/GeoHeroSection/GeoHeroSection";
import {
  GeoIntroSection,
  GeoScopeSection,
  GeoFitSection,
  GeoServiceScopeSection,
  GeoProcessSection,
  GeoPricingSection,
  GeoWhyMapSection,
  GeoIndustriesSection,
  GeoTechnologiesSection,
  GeoFaqSection,
} from "@/components/sections/GeoContentSections";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { geoServiceContent } from "@/content/services/geo-prodvizhenie-v-nejrosetyah";

export const metadata: Metadata = {
  title: geoServiceContent.metadata.title,
  description: geoServiceContent.metadata.description,
  alternates: {
    canonical: "https://map2-ten.vercel.app/services/geo-prodvizhenie-v-nejrosetyah",
  },
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GEO-продвижение в нейросетях — AI SEO и видимость бренда в ответах",
      },
    ],
  },
};

const { faq, finalCta } = geoServiceContent;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: geoServiceContent.hero.title,
  description: geoServiceContent.metadata.description,
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://map2-ten.vercel.app",
  },
  areaServed: "RU",
  offers: {
    "@type": "Offer",
    price: "50000",
    priceCurrency: "RUB",
  },
};

export default function GeoServicePage() {
  return (
    <main>
      <GeoHeroSection />
      <GeoIntroSection />
      <GeoScopeSection />
      <GeoFitSection />
      <GeoServiceScopeSection />
      <GeoProcessSection />
      <GeoPricingSection />
      <GeoWhyMapSection />

      <GeoIndustriesSection />
      <GeoTechnologiesSection />

      <CasesSection />
      <HomeReviewsSection />
      <HomeAboutSection />
      <HomeBlogSection />

      <GeoFaqSection />
      <FinalCtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
