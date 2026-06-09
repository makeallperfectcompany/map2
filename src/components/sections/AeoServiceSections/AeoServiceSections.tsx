import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { aeoServiceContent, ServiceCard, ServiceStep } from "@/content/services/aeo-prodvizhenie";
import styles from "./AeoServiceSections.module.css";

function SectionHeader({ title, text }: { title: string; text?: string }) {
  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function CardGrid({ cards, columns = "grid3" }: { cards: ServiceCard[]; columns?: "grid2" | "grid3" | "grid4" }) {
  return (
    <div className={grid[columns]}>
      {cards.map((card) => (
        <article className={styles.card} key={card.title}>
          <span className={styles.cardIcon} aria-hidden="true" />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function AeoServiceSections() {
  const content = aeoServiceContent;

  return (
    <>
      <section className={`${styles.section} ${styles.searchShift}`}>
        <Container>
          <div className={grid.gridAsymmetric}>
            <div className={styles.copyBlock}>
              <h2>{content.searchShift.title}</h2>
              {content.searchShift.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.argumentStack}>
              {content.searchShift.cards.map((card) => (
                <article className={styles.argumentCard} key={card.title}>
                  <span aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader title={content.definition.title} text={content.definition.text.join(" ")} />
          <CardGrid cards={content.definition.cards} columns="grid4" />
        </Container>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <Container>
          <SectionHeader title={content.audience.title} />
          <CardGrid cards={content.audience.cards} columns="grid3" />
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader title={content.includes.title} />
          <div className={styles.includesLayout}>
            <article className={styles.blueCard}>
              <span className={styles.blueCardLabel}>AEO SYSTEM</span>
              <h3>{content.includes.accentTitle}</h3>
              <p>{content.includes.accentText}</p>
            </article>
            <div className={styles.includesGrid}>
              {content.includes.cards.map((card) => (
                <article className={styles.compactCard} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.comparisonSection}`}>
        <Container>
          <SectionHeader title={content.comparison.title} />
          <CardGrid cards={content.comparison.cards} columns="grid4" />
          <div className={styles.summaryPanel}>{content.comparison.summary}</div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.processLayout}>
            <div className={styles.processIntro}>
              <h2>{content.process.title}</h2>
              <p>{content.process.text}</p>
            </div>
            <div className={styles.timeline}>
              {content.process.steps.map((step: ServiceStep) => (
                <article className={styles.timelineItem} key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.softSection}`}>
        <Container>
          <SectionHeader title={content.audit.title} />
          <CardGrid cards={content.audit.cards} columns="grid3" />
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <SectionHeader title={content.metrics.title} />
          <div className={styles.metricsGrid}>
            {content.metrics.cards.map((card, index) => (
              <article className={index === 0 ? styles.metricFeatured : styles.metricCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.pricingSection}`}>
        <Container>
          <div className={styles.pricingIntro}>
            <h2>{content.pricing.title}</h2>
            <p>{content.pricing.text}</p>
          </div>
          <div className={grid.grid3}>
            {content.pricing.cards.map((card) => (
              <article className={styles.priceCard} key={card.title}>
                <span>от 50 000 ₽</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
          <a className={styles.inlineCta} href="#lead-form">{content.pricing.cta}</a>
        </Container>
      </section>
    </>
  );
}

export function AeoIndustriesSection() {
  const { industries } = aeoServiceContent;

  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <SectionHeader title={industries.title} />
        <div className={grid.grid3}>
          {industries.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <span className={styles.cardIcon} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AeoTechnologiesSection() {
  const { technologies } = aeoServiceContent;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader title={technologies.title} />
        <div className={grid.grid3}>
          {technologies.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <span className={styles.cardIcon} aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
