import Image from "next/image";
import { marketingConsultingContent as content } from "@/content/services/marketing-consulting";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketingConsultingPageSection.module.css";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function HeroBtnArrow({ color }: { color: string }) {
  return (
    <span style={{ position: "relative", zIndex: 2, width: 14, height: 14, overflow: "hidden", display: "inline-block", flexShrink: 0 }}>
      <svg viewBox="0 0 14 14" fill="none" style={{ width: 14, height: 14, display: "block", transition: "transform .45s var(--ease-snap)" }} className={styles.arrMain}>
        <path d="M3 11L11 3M11 3H4M11 3V10" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg viewBox="0 0 14 14" fill="none" style={{ position: "absolute", inset: 0, transform: "translate(-140%, 140%)", transition: "transform .45s var(--ease-snap)" }} className={styles.arrGhost}>
        <path d="M3 11L11 3M11 3H4M11 3V10" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export function MarketingConsultingHeroSection() {
  return (
    <section className={styles.hero}>
      <Image className={styles.heroBg} src={content.hero.image} alt="" fill priority sizes="100vw" />
      <Container className={styles.heroContainer}>
        <div className={`${grid.grid2} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#final-cta">
                <span className={styles.label}>{content.hero.primaryCta}</span>
                <HeroBtnArrow color="white" />
              </a>
              <a className={styles.ghostButton} href="#cases">
                <span className={styles.label}>{content.hero.secondaryCta}</span>
                <HeroBtnArrow color="currentColor" />
              </a>
            </div>
          </div>
          <div className={styles.heroSpacer} aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}

export function MarketingConsultingUniqueSections() {
  return (
    <>
      <section className={styles.section}>
        <Container>
          <div className={`${grid.gridAsymmetric} ${styles.situationLayout}`}>
            <div className={styles.visualCard}>
              <Image src={content.situations.visual} alt="" width={1200} height={900} sizes="(min-width: 768px) 48vw, 100vw" />
            </div>
            <div className={styles.copyStack}>
              <span className={styles.sectionLabel}>Зачем нужен консалтинг</span>
              <h2>{content.situations.title}</h2>
              <p className={styles.lead}>{content.situations.text}</p>
              <div className={`${grid.grid2} ${styles.compactGrid}`}>
                {content.situations.cards.map((card) => (
                  <article className={styles.smallCard} key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>Что разбираем</span>
            <h2>{content.audit.title}</h2>
            <p>{content.audit.text}</p>
          </div>
          <div className={`${grid.grid3} ${styles.cardsGrid}`}>
            {content.audit.cards.map((card, index) => (
              <article className={styles.auditCard} key={card.title}>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={`${grid.gridAsymmetric} ${styles.resultsLayout}`}>
            <article className={styles.bluePanel}>
              <span className={styles.bluePanelLabel}>Результат работы</span>
              <h2>{content.results.title}</h2>
              <p>{content.results.text}</p>
            </article>
            <div className={`${grid.grid2} ${styles.compactGrid}`}>
              {content.results.cards.map((card) => (
                <article className={styles.resultCard} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>Процесс</span>
            <h2>{content.process.title}</h2>
          </div>
          <div className={styles.timeline}>
            {content.process.steps.map((step) => (
              <article className={styles.stepCard} key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={`${grid.gridAsymmetric} ${styles.priceLayout}`}>
            <div>
              <span className={styles.sectionLabel}>Стоимость</span>
              <h2>{content.price.title}</h2>
              <p className={styles.lead}>{content.price.text}</p>
            </div>
            <aside className={styles.priceCard}>
              <span>Стоимость услуги</span>
              <strong>{content.price.value}</strong>
              <p>{content.price.note}</p>
              <a className={styles.primaryButton} href="#final-cta">
                <span className={styles.label}>{content.price.cta}</span>
                <HeroBtnArrow color="white" />
              </a>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

export function MarketingConsultingIndustriesSection() {
  return (
    <section className={styles.industriesSection}>
      <Container>
        <div className={styles.industryHeader}>
          <div>
            <span className={styles.sectionLabel}>Отрасли и задачи</span>
            <h2>{content.industries.title}</h2>
          </div>
          <p>{content.industries.text}</p>
        </div>
        <div className={`${grid.grid3} ${styles.industryGrid}`}>
          {content.industries.cards.map((card, index) => (
            <article className={styles.industryCard} key={card.title}>
              <div className={styles.cardTop}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
              </div>
              <p>{card.text}</p>
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className={styles.industryCTA}>Не нашли свою сферу? Опишите задачу — скажем, поможет ли консалтинг именно вам.</p>
      </Container>
    </section>
  );
}

export function MarketingConsultingTechnologiesSection() {
  return (
    <section className={styles.technologiesSection}>
      <Container>
        <div className={styles.techHeader}>
          <div>
            <span className={styles.darkLabel}>Технологии и подход</span>
            <h2>{content.technologies.title}</h2>
          </div>
          <p>{content.technologies.text}</p>
        </div>
        <div className={`${grid.grid3} ${styles.techGrid}`}>
          {content.technologies.cards.map((card) => (
            <article className={`${styles.techCard} ${card.accent ? styles.techAccent : ""}`} key={card.code}>
              <span className={styles.techCode}>{card.code}</span>
              <h3>{card.title}</h3>
              <p className={styles.techMuted}>{card.muted}</p>
              <p>{card.text}</p>
              <div className={styles.darkTags}>
                {card.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function MarketingConsultingFaqData() {
  return null;
}

export const marketingConsultingFaq = content.faq;

export function MarketingConsultingFaqSection() {
  return (
    <section className={styles.faqSection}>
      <Container>
        <div className={styles.faqHeader}>
          <span className={styles.sectionLabel}>FAQ</span>
          <h2>Вопросы о маркетинговом консалтинге</h2>
        </div>
        <div className={styles.faqList}>
          {content.faq.map((item) => (
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
