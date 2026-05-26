import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { vkSeoContent } from "@/content/services/vkSeo";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import CasesSection from "@/components/sections/CasesSection";
import HomeBlogSection from "@/components/sections/HomeBlogSection";
import HomeReviewsSection from "@/components/sections/HomeReviewsSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Настройка рекламы ВКонтакте — таргет ВК, VK Ads, продвижение под ключ | Make All Perfect",
  description:
    "Настройка таргетированной рекламы ВКонтакте под ключ: VK Ads, лид-формы, сообщества, товарные предложения. Запуск, ведение, оптимизация рекламы ВК для бизнеса.",
  alternates: { canonical: "/services/reklama-vk/" },
  openGraph: {
    title: "Настройка рекламы ВКонтакте — таргет ВК, VK Ads, продвижение под ключ | Make All Perfect",
    description:
      "Настройка таргетированной рекламы ВКонтакте под ключ: VK Ads, лид-формы, сообщества, товарные предложения. Запуск, ведение, оптимизация рекламы ВК для бизнеса.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Настройка рекламы ВКонтакте — Make All Perfect" }],
  },
};

export default function VkReklamaPage() {
  return (
    <main>
      <Hero />
      <ServicesBlock />
      <AdvantagesBlock />
      <ProcessBlock />
      <OpportunitiesBlock />
      <CasesSection />
      <HomeReviewsSection />
      <HomeIndustriesSection />
      <PricingBlock />
      <FaqBlock />
      <CtaBlock />
      <HomeBlogSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Настройка и ведение рекламы ВКонтакте",
            provider: { "@type": "Organization", name: "Make All Perfect" },
            areaServed: "RU",
            description: "Запуск и ведение таргетированной рекламы ВКонтакте через VK Ads под ключ.",
          }),
        }}
      />
    </main>
  );
}

function Hero() {
  const { hero } = vkSeoContent;
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          <Link className={styles.heroCta} href="/#contacts">
            {hero.cta} <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ServicesBlock() {
  const { services } = vkSeoContent;
  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Услуги по настройке рекламы ВКонтакте</h2>
          <p>Комплексный подход к таргетированной рекламе ВК: от создания кампании до аналитики заявок.</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <article className={styles.serviceCard} key={s.title}>
              <span className={styles.serviceIcon}>{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AdvantagesBlock() {
  const { advantages } = vkSeoContent;
  return (
    <section className={styles.advantagesSection}>
      <Container>
        <div className={styles.advantagesGrid}>
          {advantages.map((a) => (
            <article className={styles.advantageCard} key={a.label}>
              <strong className={styles.advantageValue}>{a.value}</strong>
              <span className={styles.advantageLabel}>{a.label}</span>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessBlock() {
  const { process } = vkSeoContent;
  return (
    <section className={styles.processSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Как мы запускаем рекламу ВКонтакте</h2>
          <p>Прозрачный процесс настройки и ведения VK Ads: от задачи до масштабирования работающих связок.</p>
        </div>
        <div className={styles.processGrid}>
          {process.map((step) => (
            <article className={styles.processCard} key={step.number}>
              <span className={styles.processNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OpportunitiesBlock() {
  const { opportunities } = vkSeoContent;
  return (
    <section className={styles.oppSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Кому подходит реклама ВКонтакте</h2>
          <p>Таргетированная реклама ВК эффективна для разных типов бизнеса и задач.</p>
        </div>
        <div className={styles.oppGrid}>
          {opportunities.map((opp) => (
            <article className={styles.oppCard} key={opp.title}>
              <h3>{opp.title}</h3>
              <ul>
                {opp.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PricingBlock() {
  const { pricing } = vkSeoContent;
  return (
    <section className={styles.pricingSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>{pricing.title}</h2>
          <p>{pricing.description}</p>
        </div>
        <div className={styles.pricingCard}>
          <div className={styles.pricingValue}>{pricing.price} <small>/ месяц</small></div>
          <ul className={styles.pricingFeatures}>
            {pricing.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Link className={styles.heroCta} href="/#contacts">
            {pricing.cta} <span>→</span>
          </Link>
          <p className={styles.pricingNote}>{pricing.note}</p>
        </div>
      </Container>
    </section>
  );
}

function FaqBlock() {
  const { faq } = vkSeoContent;
  return (
    <section className={styles.faqSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Частые вопросы о рекламе ВКонтакте</h2>
          <p>Ответы на основные вопросы по настройке и ведению таргетированной рекламы ВК.</p>
        </div>
        <div className={styles.faqList}>
          {faq.map((item, index) => (
            <details className={styles.faqItem} key={item.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.question}</h3>
                <i aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CtaBlock() {
  const { cta } = vkSeoContent;
  return (
    <section className={styles.ctaSection} id="contacts">
      <Container>
        <div className={styles.ctaCard}>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
          <Link className={styles.heroCta} href="/#contacts">
            {cta.button} <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
