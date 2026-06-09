import Image from "next/image";
import { googleSeoContent } from "@/content/services/prodvizhenie-v-google";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./GoogleSeoPageSections.module.css";

const content = googleSeoContent;

export function GoogleSeoHeroSection() {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${content.hero.background})` }}>
      <div className={styles.heroShade} />
      <Container className={styles.heroInner}>
        <div className={styles.heroContent}>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <div className={styles.heroActions}>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#contact">
              <span className={styles.label}>{content.hero.primaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#contact">
              <span className={styles.label}>{content.hero.secondaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          {content.hero.trustTriggers && (
            <div className={styles.trustLine}>
              {content.hero.trustTriggers.map((t, i) => (
                <span key={t}>{i > 0 && <span className={styles.dot}>·</span>}{t}</span>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export function GoogleSeoUniqueSections() {
  return (
    <>
      <section className={styles.sectionLight}>
        <Container className={styles.splitLayout}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Стратегия</span>
            <h2>{content.strategy.title}</h2>
            {content.strategy.text.map((text) => <p key={text}>{text}</p>)}
          </div>
          <div className={grid.grid2}>
            {content.strategy.cards.map((card) => <article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className={styles.darkSection}>
        <Container>
          <div className={`${styles.sectionHead} ${styles.darkHead}`}>
            <span className={`${styles.sectionLabel} ${styles.darkLabel}`}>Диагностика</span>
            <h2>{content.blockers.title}</h2>
            <p>{content.blockers.text}</p>
          </div>
          <div className={grid.grid3}>
            {content.blockers.cards.map((card, index) => (
              <article className={styles.darkCard} key={card.title}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.sectionLight}>
        <Container className={styles.workflowLayout}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Состав работ</span>
            <h2>{content.scope.title}</h2>
            <p>{content.scope.text}</p>
          </div>
          <figure className={styles.visualCard}>
            <Image src={content.scope.visual} alt="" width={1400} height={1000} sizes="(max-width: 768px) 100vw, 1280px" />
          </figure>
          <div className={styles.scopeGrid}>
            <article className={styles.blueCard}><h3>{content.scope.accent.title}</h3><p>{content.scope.accent.text}</p></article>
            {content.scope.cards.map((card) => <article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className={styles.sectionNeutral}>
        <Container className={styles.timelineLayout}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Процесс</span>
            <h2>{content.process.title}</h2>
            <p>{content.process.text}</p>
          </div>
          <ol className={styles.timeline}>
            {content.process.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}
          </ol>
        </Container>
      </section>

      <section className={styles.sectionLight}>
        <Container className={styles.priceLayout}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Стоимость</span>
            <h2>{content.price.title}</h2>
            <p>{content.price.text}</p>
          </div>
          <aside className={styles.priceCard}>
            <p>Продвижение сайта в Google</p>
            <strong>{content.price.value}</strong>
            <span>в месяц</span>
            <ul>{content.price.details.map((item) => <li key={item}>{item}</li>)}</ul>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#contact"><span>{content.price.cta}</span><span>↗</span></a>
          </aside>
        </Container>
      </section>

      <section className={styles.sectionLight}>
        <Container className={styles.sitesLayout}>
          <figure className={styles.verticalVisual}>
            <Image src={content.suitableSites.visual} alt="" width={1200} height={1500} sizes="(max-width: 768px) 100vw, 42vw" />
          </figure>
          <div>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>Типы проектов</span>
              <h2>{content.suitableSites.title}</h2>
              <p>{content.suitableSites.text}</p>
            </div>
            <div className={grid.grid2}>
              {content.suitableSites.cards.map((card) => <article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export const googleSeoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Продвижение сайта в Google",
  provider: { "@type": "Organization", name: "Make All Perfect", url: "https://makeallperfect.ru" },
  areaServed: "RU",
  serviceType: "SEO-продвижение сайта в Google",
  offers: { "@type": "Offer", price: "50000", priceCurrency: "RUB", description: "Продвижение сайта в Google от 50 000 рублей в месяц" },
};
