import type { Metadata } from 'next';
import { influenceMarketingContent as content } from '@/content/services/influence-marketing';
import InfluenceHeroSection from '@/components/sections/InfluenceHeroSection';
import InfluenceNeedSection from '@/components/sections/InfluenceNeedSection';
import InfluenceIncludedSection from '@/components/sections/InfluenceIncludedSection';
import InfluenceSelectionSection from '@/components/sections/InfluenceSelectionSection';
import InfluenceFormatsSection from '@/components/sections/InfluenceFormatsSection';
import InfluenceProcessSection from '@/components/sections/InfluenceProcessSection';
import InfluencePricingSection from '@/components/sections/InfluencePricingSection';
import InfluenceIndustriesSection from '@/components/sections/InfluenceIndustriesSection';
import InfluenceTechnologiesSection from '@/components/sections/InfluenceTechnologiesSection';
import InfluenceFaqSection from '@/components/sections/InfluenceFaqSection';
import ServiceSharedSections from "@/components/sections/ServiceSharedSections";

const canonical = '/services/influence-marketing';
const pageUrl = `https://makeallperfect.ru${canonical}`;

export const metadata: Metadata = {
  title: 'Инфлюенс-маркетинг и реклама у блогеров под ключ — от 50 000 ₽ | Make All Perfect',
  description:
    'Реклама у блогеров под ключ: стратегия, подбор и антифрод-проверка авторов, сценарии интеграций, маркировка и сквозная аналитика. Считаем заявки и продажи, а не охваты. Запуск от 50 000 ₽ — обсудим за 10 минут.',
  alternates: { canonical },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Инфлюенс-маркетинг и реклама у блогеров под ключ — от 50 000 ₽',
    description:
      'Подбираем блогеров под вашу аудиторию и продукт, проверяем накрутки, ведём кампанию до отчёта по заявкам и продажам.',
    siteName: 'Make All Perfect',
    locale: 'ru_RU',
    images: [{ url: '/images/services/influence-marketing/hero-bg.webp', width: 1920, height: 1080, alt: 'Инфлюенс-маркетинг — Make All Perfect' }],
  },
  twitter: {
    title: 'Инфлюенс-маркетинг и реклама у блогеров под ключ — от 50 000 ₽',
    description:
      'Подбираем блогеров под вашу аудиторию и продукт, проверяем накрутки, ведём кампанию до отчёта по заявкам и продажам.',
    card: 'summary_large_image',
  },
};

const faqItems = content.faq.map((item) => ({ question: item.question, answer: item.answer }));

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Инфлюенс-маркетинг под ключ',
      serviceType: 'Инфлюенс-маркетинг',
      provider: { '@type': 'Organization', name: 'Make All Perfect', url: 'https://makeallperfect.ru' },
      areaServed: 'RU',
      description:
        'Запускаем рекламу у блогеров под ключ: стратегия, подбор авторов, проверка аудитории, сценарии интеграций, контроль размещений и аналитика.',
      offers: { '@type': 'Offer', price: '50000', priceCurrency: 'RUB', availability: 'https://schema.org/InStock' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://makeallperfect.ru' },
        { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://makeallperfect.ru/services' },
        { '@type': 'ListItem', position: 3, name: 'Инфлюенс-маркетинг', item: pageUrl },
      ],
    },
  ],
};

export default function InfluenceMarketingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <InfluenceHeroSection content={content.hero} />
      <InfluenceNeedSection content={content.need} />
      <InfluenceIncludedSection content={content.included} />
      <InfluenceSelectionSection content={content.selection} />
      <InfluenceFormatsSection content={content.formats} />
      <InfluenceProcessSection content={content.process} />
      <InfluencePricingSection content={content.pricing} />
      <InfluenceIndustriesSection content={content.industries} />
      <InfluenceTechnologiesSection content={content.technologies} />
      <ServiceSharedSections finalCta={{ label: 'Получить бесплатный подбор и расчёт', description: 'За 15 минут разберём текущую ситуацию, подскажем оптимальную связку продвижения и покажем, с чего начать, чтобы не тратить бюджет на лишние действия. Без обязательств и навязывания.' }} />
      <InfluenceFaqSection items={content.faq} />
    </main>
  );
}
