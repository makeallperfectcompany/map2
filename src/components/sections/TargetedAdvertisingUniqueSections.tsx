import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { targetedAdvertisingContent as content } from "@/content/services/targetedAdvertising";
import styles from "./TargetedAdvertisingUniqueSections.module.css";

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

export function TargetedAdvertisingHero() {
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
              <a href="#">Таргетированная реклама</a>
              <span aria-hidden="true">—</span>
              <span>Реклама ВКонтакте и Telegram</span>
            </nav>
            <h1>{content.hero.title}</h1>
            <p className={styles.lead}>{content.hero.description}</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#consultation">
                {content.hero.primaryCta} <Arrow />
              </Link>
              <Link className={styles.ghostButton} href="#consultation">
                {content.hero.secondaryCta} <Arrow />
              </Link>
            </div>
            <ul className={styles.heroBenefits}>
              {content.hero.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TargetedAdvertisingHowItWorks() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.howItWorks.eyebrow}</Eyebrow>
          <h2>{content.howItWorks.title}</h2>
          <p>{content.howItWorks.description}</p>
        </div>
        <div className={`${grid.grid2} ${styles.composition}`}>
          <div className={styles.visual}>
            <Image
              src={content.howItWorks.visual}
              alt=""
              width={800}
              height={940}
              className={styles.portraitImage}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className={grid.grid2}>
            {content.howItWorks.cards.map((card) => (
              <article className={styles.lightCard} key={card.code}>
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

export function TargetedAdvertisingPlatforms() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.splitHeading}`}>
          <div>
            <Eyebrow dark>{content.platforms.eyebrow}</Eyebrow>
            <h2>{content.platforms.title}</h2>
          </div>
          <p>{content.platforms.description}</p>
        </div>
        <div className={grid.grid4}>
          {content.platforms.cards.map((card, index) => (
            <article className={`${styles.darkCard} ${index === 0 ? styles.darkCardSelected : ""}`} key={card.code}>
              <span className={styles.code}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={styles.tags}>
                {card.tags?.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TargetedAdvertisingService() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.splitHeading}`}>
          <div>
            <Eyebrow>{content.service.eyebrow}</Eyebrow>
            <h2>{content.service.title}</h2>
          </div>
          <p>{content.service.description}</p>
        </div>
        <div className={grid.grid3}>
          {content.service.cards.map((card) => (
            <article className={styles.lightCard} key={card.code}>
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

export function TargetedAdvertisingProcess() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={`${styles.heading} ${styles.headingCentered}`}>
          <Eyebrow>{content.process.eyebrow}</Eyebrow>
          <h2>{content.process.title}</h2>
          <p>{content.process.description}</p>
        </div>
        <div className={grid.grid3}>
          {content.process.steps.map((step) => (
            <article className={styles.processCard} key={step.number}>
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

export function TargetedAdvertisingApproach() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{content.approach.eyebrow}</Eyebrow>
          <h2>{content.approach.title}</h2>
          <p>{content.approach.description}</p>
        </div>
        <div className={`${grid.grid2} ${styles.composition}`}>
          <div className={styles.visual}>
            <Image
              src={content.approach.visual}
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
            <div className={grid.grid2}>
              {content.approach.cards.map((card) => (
                <article className={styles.lightCard} key={card.code}>
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
