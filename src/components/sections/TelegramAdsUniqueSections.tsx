import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { telegramAdsContent as content } from "@/content/services/telegramAds";
import styles from "./TelegramAdsUniqueSections.module.css";

export function TelegramAdsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Главная</a>
              <span aria-hidden="true">—</span>
              <a href="/services">Услуги</a>
              <span aria-hidden="true">—</span>
              <span>Telegram Ads</span>
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

export function TelegramAdsServicesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h2>{content.services.h2}</h2>
          <p>{content.services.description}</p>
        </div>
        <div className={grid.grid3}>
          {content.services.cards.map((card, index) => (
            <article className={styles.lightCard} key={card.title}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TelegramAdsAdvantagesSection() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={styles.heading}>
          <h2>{content.advantages.h2}</h2>
        </div>
        <div className={grid.grid4}>
          {content.advantages.cards.map((card) => (
            <article className={styles.lightCard} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TelegramAdsProcessSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <h2>{content.process.h2}</h2>
        </div>
        <div className={styles.timeline}>
          {content.process.steps.map((step, index) => (
            <article className={styles.timelineCard} key={step.title}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineNumber}>{index + 1}</span>
                {index < content.process.steps.length - 1 && (
                  <div className={styles.timelineLine} aria-hidden="true" />
                )}
              </div>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TelegramAdsOpportunitiesSection() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={styles.heading}>
          <h2>{content.opportunities.h2}</h2>
        </div>
        <div className={grid.grid4}>
          {content.opportunities.blocks.map((block) => (
            <article className={styles.darkCard} key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TelegramAdsPricingSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <h2>{content.pricing.h2}</h2>
          <p>{content.pricing.description}</p>
        </div>
        <div className={styles.pricingGrid}>
          {content.pricing.plans.map((plan, index) => (
            <article
              className={`${styles.pricingCard} ${index === 1 ? styles.pricingCardFeatured : ""}`}
              key={plan.name}
            >
              {index === 1 && <span className={styles.pricingBadge}>Рекомендуем</span>}
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>{plan.name}</h3>
                <p className={styles.pricingSubtitle}>{plan.target}</p>
              </div>
              <div className={styles.pricingBody}>
                <div className={styles.pricingAmount}>{plan.price}</div>
                <ul className={styles.pricingFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TelegramAdsFaqSection() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <h2>{content.faq.h2}</h2>
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
