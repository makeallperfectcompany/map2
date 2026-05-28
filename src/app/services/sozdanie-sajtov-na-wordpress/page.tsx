import type { Metadata } from "next";
import { WordpressHeroSection } from "@/components/sections/WordpressHeroSection/WordpressHeroSection";
import { WordpressFormatsSection } from "@/components/sections/WordpressFormatsSection/WordpressFormatsSection";
import { WordpressFitSection } from "@/components/sections/WordpressFitSection/WordpressFitSection";
import { WordpressDevelopmentSection } from "@/components/sections/WordpressDevelopmentSection/WordpressDevelopmentSection";
import { WordpressMarketingFoundationSection } from "@/components/sections/WordpressMarketingFoundationSection/WordpressMarketingFoundationSection";
import { WordpressProcessSection } from "@/components/sections/WordpressProcessSection/WordpressProcessSection";
import { WordpressPricingSection } from "@/components/sections/WordpressPricingSection/WordpressPricingSection";
import { wordpressDevelopmentContent as content } from "@/content/services/wordpressDevelopment";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Создание сайтов на WordPress под ключ — разработка для бизнеса | Make All Perfect",
  description:
    "Создаём сайты на WordPress для бизнеса: корпоративные сайты, лендинги, каталоги и интернет-магазины. Индивидуальный дизайн, структура под продвижение и удобное управление контентом.",
  alternates: {
    canonical: "/services/sozdanie-sajtov-na-wordpress",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru/" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Создание сайтов на WordPress",
      item: "https://makeallperfect.ru/services/sozdanie-sajtov-na-wordpress",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Создание сайтов на WordPress для бизнеса",
  provider: { "@type": "Organization", name: "Make All Perfect" },
  url: "https://makeallperfect.ru/services/sozdanie-sajtov-na-wordpress",
  serviceType: "Разработка сайтов на WordPress",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function WordpressDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <WordpressHeroSection />
        <WordpressFormatsSection />
        <WordpressFitSection />
        <WordpressDevelopmentSection />
        <WordpressMarketingFoundationSection />

        <section id="cases">
          <CasesSection />
        </section>

        <WordpressProcessSection />
        <WordpressPricingSection />

        <HomeReviewsSection />

        <HomeFaqSection
          title="Часто задаваемые вопросы о разработке сайтов на WordPress"
          items={content.faq}
        />

        <div id="request">
          <FinalCtaSection />
        </div>
      </main>
    </>
  );
}
