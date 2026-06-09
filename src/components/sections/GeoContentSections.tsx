import { Container } from "@/components/ui/Container/Container";
import { geoServiceContent } from "@/content/services/geo-prodvizhenie-v-nejrosetyah";
import grid from "@/styles/grid.module.css";
import styles from "./GeoContentSections.module.css";

function SectionHeader({ title, text }: { title: string; text?: string }) {
  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function GeoIntroSection() {
  const { intro } = geoServiceContent;

  return (
    <section className={styles.lightSection}>
      <Container>
        <SectionHeader title={intro.title} text={intro.text} />
        <div className={grid.grid4}>
          {intro.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GeoScopeSection() {
  const { scope } = geoServiceContent;

  return (
    <section className={styles.whiteSection}>
      <Container>
        <div className={grid.gridAsymmetric}>
          <aside className={styles.bluePanel}>
            <h2>{scope.title}</h2>
            <p>{scope.text}</p>
          </aside>
          <div className={styles.compactList}>
            {scope.cards.map((card) => (
              <article className={styles.compactCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function GeoFitSection() {
  const { fit } = geoServiceContent;

  return (
    <section className={styles.lightSection}>
      <Container>
        <SectionHeader title={fit.title} text={fit.text} />
        <div className={grid.grid3}>
          {fit.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GeoServiceScopeSection() {
  const { serviceScope } = geoServiceContent;

  return (
    <section className={styles.darkSection}>
      <Container>
        <SectionHeader title={serviceScope.title} text={serviceScope.text} />
        <div className={grid.grid3}>
          {serviceScope.cards.map((card) => (
            <article className={styles.darkCard} key={card.title}>
              <strong>{card.code}</strong>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GeoProcessSection() {
  const { process } = geoServiceContent;

  return (
    <section className={styles.whiteSection} id="how-it-works">
      <Container>
        <SectionHeader title={process.title} />
        <div className={styles.timeline}>
          {process.steps.map((step, index) => (
            <article className={styles.step} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GeoPricingSection() {
  const { pricing } = geoServiceContent;

  return (
    <section className={styles.lightSection}>
      <Container>
        <div className={grid.gridAsymmetric}>
          <aside className={styles.pricePanel}>
            <h2>{pricing.title}</h2>
            <strong>{pricing.price}</strong>
            <p>{pricing.text}</p>
            <a href="#final-cta" className={styles.priceButton}>Получить смету после бесплатного аудита</a>
          </aside>
          <div className={styles.compactList}>
            {pricing.formats.map((format) => (
              <article className={styles.compactCard} key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function GeoWhyMapSection() {
  const { why } = geoServiceContent;

  return (
    <section className={styles.whiteSection}>
      <Container>
        <div className={grid.grid2}>
          <SectionHeader title={why.title} text={why.text} />
          <div className={styles.compactList}>
            {why.cards.map((card) => (
              <article className={styles.compactCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function GeoIndustriesSection() {
  const { industries } = geoServiceContent;

  return (
    <section className={styles.lightSection}>
      <Container>
        <SectionHeader title={industries.title} />
        <div className={grid.grid4}>
          {industries.cards.map((card, index) => (
            <article className={styles.card} key={card.title}>
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GeoTechnologiesSection() {
  const { technologies } = geoServiceContent;

  return (
    <section className={styles.techSection}>
      <Container>
        <SectionHeader title={technologies.title} text={technologies.description} />
        <div className={grid.grid3}>
          {technologies.cards.map((card) => (
            <article className={`${styles.techCard} ${card.accent ? styles.techAccent : ""}`} key={card.title}>
              <span className={styles.techCode}>{card.code}</span>
              <h3>{card.title}</h3>
              <p className={styles.techMuted}>{card.muted}</p>
              <p>{card.text}</p>
              <div className={styles.tags}>
                {card.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GeoFaqSection() {
  const { faq } = geoServiceContent;

  return (
    <section className={styles.whiteSection}>
      <Container>
        <SectionHeader title="Вопросы о GEO-продвижении" />
        <div className={styles.faqList}>
          {faq.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
