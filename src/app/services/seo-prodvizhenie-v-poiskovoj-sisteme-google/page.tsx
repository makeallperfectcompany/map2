import type { Metadata } from "next";
import { googleSeoContent as content } from "@/content/services/prodvizhenie-v-google";
import { googleSeoTechnologies } from "@/content/services/google-seo-technologies";
import { googleSeoAdvantages } from "@/content/services/google-seo-advantages";

import GoogleSeoHero from "@/components/sections/GoogleSeoHero/GoogleSeoHero";
import GoogleSeoProcessSection from "@/components/sections/GoogleSeoProcessSection";
import AvitoStylePricingSection from "@/components/sections/AvitoStylePricingSection";
import HomeTechnologiesSection from "@/components/sections/HomeTechnologiesSection";
import HomeAdvantagesSection from "@/components/sections/HomeAdvantagesSection";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import HomeAboutSection from "@/components/sections/HomeAboutSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

const canonical = "/services/seo-prodvizhenie-v-poiskovoj-sisteme-google";
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: { canonical },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "SEO-продвижение сайта в Google под ключ — топ и заявки от 50 000 ₽",
    description: "Превращаем органический трафик из Google в стабильный поток заявок. Аудит, техника, семантика, контент, ссылки и аналитика. Бесплатный аудит сайта за 1 день.",
    siteName: "Make All Perfect",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-продвижение сайта в Google под ключ — от 50 000 ₽",
    description: "Растим органический трафик и заявки из Google. Аудит, техника, семантика, контент, аналитика. Бесплатный аудит за 1 день.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://makeallperfect.ru" },
    { "@type": "ListItem", position: 2, name: "Услуги", item: "https://makeallperfect.ru/services" },
    { "@type": "ListItem", position: 3, name: "Продвижение сайта в Google", item: pageUrl },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Продвижение сайта в Google",
  serviceType: "SEO-продвижение в Google",
  provider: {
    "@type": "Organization",
    name: "Make All Perfect",
    url: "https://makeallperfect.ru",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "57", reviewCount: "57" },
  },
  areaServed: "RU",
  description: content.metadata.description,
  offers: content.pricing.tiers.map((tier, index) => ({
    "@type": "Offer",
    name: tier.name,
    description: `${tier.subtitle}. ${tier.price}`,
    price: tier.price.replace(/[^0-9]/g, "") || "0",
    priceCurrency: "RUB",
    position: index + 1,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const heroContent = {
  title: "Продвижение сайта в Google — стабильный поток заявок",
  description: "SEO-продвижение в поисковой системе Google — от аудита и технической оптимизации до контента и наращивания ссылочного профиля. Работаем под заявки и продажи, а не под позиции.",
  primaryCta: "Получить бесплатный аудит",
  secondaryCta: "Смотреть кейсы",
};

export default function GoogleSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* Hero — светлый, как на главной */}
        <GoogleSeoHero content={heroContent} />

        {/* Технологии */}
        <HomeTechnologiesSection content={googleSeoTechnologies} />

        {/* Преимущества */}
        <HomeAdvantagesSection content={googleSeoAdvantages} />

        {/* Процесс работы — 2 колонки с визуалом */}
        <GoogleSeoProcessSection
          title={content.process.title}
          text="Прозрачный процесс в 6 шагов — от диагностики сайта и ниши до регулярной аналитики и развития. Снимаем технические ограничения, строим структуру, усиливаем контент и доводим клиента до заявки."
          image="/images/home/advantages-visual.webp"
          items={content.process.steps}
        />

        {/* Тарифы */}
        <AvitoStylePricingSection
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
          description={content.pricing.description}
          tiers={content.pricing.tiers}
          note={content.pricing.note}
          cta={content.pricing.cta}
        />

        {/* Отрасли — alias с главной */}
        <HomeIndustriesSection />

        {/* Кейсы, О нас, Отзывы, Блог */}
        <CasesSection />
        <HomeAboutSection />
        <HomeReviewsSection />
        <HomeBlogSection />

        {/* FAQ */}
        <HomeFaqSection
          title="Часто задаваемые вопросы о SEO-продвижении в Google"
          items={content.faq.map((f) => ({ question: f.question, answer: f.answer }))}
        />
      </main>

      <FinalCtaSection />
    </>
  );
}
