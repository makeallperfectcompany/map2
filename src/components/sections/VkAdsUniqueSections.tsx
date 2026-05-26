import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { vkAdsContent as content } from "@/content/services/vkAds";
import styles from "./VkAdsUniqueSections.module.css";

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span className={`${styles.eyebrow} ${dark ? styles.eyebrowDark : ""}`}>
      {children}
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

/* ── Hero ─────────────────────────────── */

export function VkAdsHero() {
  return (
    <section className={styles.hero}>
      <Image
        src={content.hero.background}
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 1px"
        className={`${styles.heroBackground} ${styles.heroBackgroundDesktop}`}
        aria-hidden="true"
      />
      <Image
        src={content.hero.backgroundMobile}
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className={`${styles.heroBackground} ${styles.heroBackgroundMobile}`}
        aria-hidden="true"
      />
      <Container>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Главная</a>
              <span aria-hidden="true">—</span>
              <a href="#">Реклама</a>
              <span aria-hidden="true">—</span>
              <span>Реклама ВКонтакте</span>
            </nav>
            <h1>{content.hero.title}</h1>
            <p className={styles.lead}>{content.hero.description}</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#lead-form">
                {content.hero.primaryCta} <Arrow />
              </Link>
              <Link className={styles.ghostButton} href="#lead-form">
                {content.hero.secondaryCta} <Arrow />
              </Link>
            </div>
            <ul className={styles.heroBenefits}>
              {content.hero.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── How It Works ─────────────────────── */

export function VkAdsHowItWorks() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.howItWorks.eyebrow}</Eyebrow>
          <h2>{content.howItWorks.title}</h2>
          <p>{content.howItWorks.description}</p>
        </div>
        <div className={`${grid.grid2} ${grid.grid}`}>
          <div className={styles.visual}>
            <Image
              src="/images/services/targetirovannaya-reklama/how-it-works-visual.webp"
              alt=""
              width={800}
              height={940}
              className={styles.portraitImage}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className={`${grid.grid2} ${grid.grid}`}>
            {content.howItWorks.cards.map((card) => (
              <article key={card.code} className={styles.lightCard}>
                <span className={styles.number}>{card.code}</span>
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

/* ── Formats ─────────────────────────── */

export function VkAdsFormats() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${grid.grid} ${styles.splitHeading}`}>
          <div>
            <Eyebrow dark>{content.formats.eyebrow}</Eyebrow>
            <h2>{content.formats.title}</h2>
          </div>
          <p>{content.formats.description}</p>
        </div>
        <div className={`${grid.grid3} ${grid.grid}`}>
          {content.formats.cards.map((card) => (
            <article key={card.code} className={styles.darkCard}>
              <span className={styles.code}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.tags && (
                <div className={styles.tags}>
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Service ──────────────────────────── */

export function VkAdsService() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${grid.grid} ${styles.splitHeading}`}>
          <div>
            <Eyebrow>{content.service.eyebrow}</Eyebrow>
            <h2>{content.service.title}</h2>
          </div>
          <p>{content.service.description}</p>
        </div>
        <div className={`${grid.grid3} ${grid.grid}`}>
          {content.service.cards.map((card) => (
            <article key={card.code} className={styles.lightCard}>
              <span className={styles.codeLight}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Process ──────────────────────────── */

export function VkAdsProcess() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <Eyebrow>{content.process.eyebrow}</Eyebrow>
          <h2>{content.process.title}</h2>
          <p>{content.process.description}</p>
        </div>
        <div className={`${grid.grid3} ${grid.grid}`}>
          {content.process.steps.map((step) => (
            <article key={step.number} className={styles.processCard}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Approach ─────────────────────────── */

export function VkAdsApproach() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.approach.eyebrow}</Eyebrow>
          <h2>{content.approach.title}</h2>
          <p>{content.approach.description}</p>
        </div>
        <div className={`${grid.grid2} ${grid.grid} ${styles.composition}`}>
          <div className={styles.visual}>
            <Image
              src="/images/services/targetirovannaya-reklama/advantages-visual.webp"
              alt=""
              width={800}
              height={940}
              className={styles.portraitImage}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className={styles.approachPanel}>
            <article className={styles.highlightCard}>
              <span className={styles.highlightCode}>{content.approach.highlight.code}</span>
              <h3>{content.approach.highlight.title}</h3>
              <p>{content.approach.highlight.text}</p>
            </article>
            <div className={`${grid.grid2} ${grid.grid}`}>
              {content.approach.cards.map((card) => (
                <article key={card.code} className={styles.lightCard}>
                  <span className={styles.number}>{card.code}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
