import type { Metadata } from "next";
import { vkAdsContent as content } from "@/content/services/vkAds";
import { vkAdsServiceTechnologies } from "@/content/services/vk-ads-technologies";
import { vkAdsAdvantages } from "@/content/services/vk-ads-advantages";
import { vkAdsIndustries } from "@/content/services/vk-ads-industries";
import VkAdsHero from "@/components/sections/VkAdsHero/VkAdsHero";
import VkAdsProcessSection from "@/components/sections/VkAdsProcessSection";
import VkAdsPricingSection from "@/components/sections/VkAdsPricingSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: "/services/reklama-vkontakte",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Реклама ВКонтакте",
      item: "https://makeallperfect.ru/services/reklama-vkontakte",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Настройка рекламы ВКонтакте под ключ",
  serviceType: "Реклама VK",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
  },
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  description: content.metadata.description,
  offers: content.pricing.tiers.map((tier, index) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.subtitle}. ${tier.price}`,
    price: tier.price.replace(/[^0-9]/g, ""),
    priceCurrency: "RUB",
    position: index + 1,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function VkAdsPage() {
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
        {/* Hero — светлый, как на Avito */}
        <VkAdsHero content={content.hero} />

        {/* Объём услуг = Технологии */}
        <HomeTechnologiesSection content={vkAdsServiceTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={vkAdsAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <VkAdsProcessSection
          title={content.process.title}
          text="Прозрачный процесс в 5 шагов — от заявки до первых клиентов. Созваниваемся, разрабатываем стратегию, запускаем кампании, оптимизируем и масштабируем результат."
          image="/images/services/vk-ads/vk-ads-tech-visual.webp"
          items={content.process.steps.map(s => [s.title, s.text] as const)}
        />

        {/* Кому подходит = Отрасли */}
        <HomeIndustriesSection content={vkAdsIndustries} />

        {/* Тарифы */}
        <VkAdsPricingSection
          title={content.pricing.title}
          text={content.pricing.description}
          tiers={content.pricing.tiers}
        />

        {/* Кейсы, О нас, Отзывы, Блог */}
        <CasesSection />
        <HomeAboutSection />
        <HomeReviewsSection />
        <HomeBlogSection />

        {/* FAQ */}
        <HomeFaqSection
          title={content.faq.title}
          items={content.faq.items}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
