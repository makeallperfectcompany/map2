import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { vkAdsContent as content } from "@/content/services/vkAds";
import styles from "./VkAdsUniqueSections.module.css";

function Eyebrow({ children }: { children: string }) {
  return <span className={styles.eyebrow}>{children}</span>;
}

export function VkAdsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Главная</a>
              <span aria-hidden="true">—</span>
              <span>Реклама ВКонтакте</span>
            </nav>
            <h1>{content.hero.title}</h1>
            <p className={styles.lead}>{content.hero.description}</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#consultation">
                {content.hero.primaryCta} <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.ghostButton} href="/cases">
                {content.hero.secondaryCta} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VkAdsServicesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.services.eyebrow}</Eyebrow>
          <h2>{content.services.title}</h2>
          <p>{content.services.description}</p>
        </div>
        <div className={grid.grid3}>
          {content.services.cards.map((card) => (
            <article className={styles.lightCard} key={card.code}>
              <span className={styles.number}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VkAdsAdvantagesSection() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.advantages.eyebrow}</Eyebrow>
          <h2>{content.advantages.title}</h2>
        </div>
        <div className={grid.grid4}>
          {content.advantages.cards.map((card) => (
            <article className={styles.lightCard} key={card.code}>
              <span className={styles.number}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VkAdsProcessSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <Eyebrow>{content.process.eyebrow}</Eyebrow>
          <h2>{content.process.title}</h2>
        </div>
        <div className={styles.timeline}>
          {content.process.steps.map((step, index) => (
            <article className={styles.timelineCard} key={step.number}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineNumber}>{step.number}</span>
                {index < content.process.steps.length - 1 && (
                  <div className={styles.timelineLine} aria-hidden="true" />
                )}
              </div>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VkAdsOpportunitiesSection() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.opportunities.eyebrow}</Eyebrow>
          <h2>{content.opportunities.title}</h2>
        </div>
        <div className={grid.grid4}>
          {content.opportunities.cards.map((card) => (
            <article className={styles.darkCard} key={card.code}>
              <span className={styles.code}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VkAdsPricingSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <Eyebrow>{content.pricing.eyebrow}</Eyebrow>
          <h2>{content.pricing.title}</h2>
          <p>{content.pricing.description}</p>
        </div>
        <div className={styles.pricingGrid}>
          {content.pricing.tiers.map((tier, index) => (
            <article
              className={`${styles.pricingCard} ${index === 1 ? styles.pricingCardFeatured : ""}`}
              key={tier.name}
            >
              {index === 1 && <span className={styles.pricingBadge}>Рекомендуем</span>}
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>{tier.name}</h3>
                <p className={styles.pricingSubtitle}>{tier.subtitle}</p>
              </div>
              <div className={styles.pricingBody}>
                <div className={styles.pricingAmount}>{tier.price}</div>
                <p className={styles.pricingBudget}>{tier.budget}</p>
                <ul className={styles.pricingFeatures}>
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}>{content.pricing.note}</p>
        <div className={styles.pricingCtaWrapper}>
          <Link className={styles.primaryButton} href="#consultation">
            {content.pricing.cta} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function VkAdsFaqSection() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <Eyebrow>{content.faq.eyebrow}</Eyebrow>
          <h2>{content.faq.title}</h2>
        </div>
        <div className={styles.faqList}>
          {content.faq.items.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary className={styles.faqQuestion}>
                <span>{item.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">+</span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
