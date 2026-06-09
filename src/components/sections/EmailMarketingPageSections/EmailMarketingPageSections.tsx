import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { emailMarketingContent } from "@/content/services/emailMarketing";
import styles from "./EmailMarketingPageSections.module.css";

function ArrowIcon() {
  return (
    <span className={styles.arrWrap} aria-hidden="true">
      <svg className={styles.arr} viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function EmailMarketingHero() {
  const { hero } = emailMarketingContent;

  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={hero.background} alt="" fill priority sizes="100vw" />
      <div className={styles.heroShade} aria-hidden="true" />
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1>{hero.title}</h1>
            <p>{hero.description}</p>
            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnAccent}`} href="#contact">
                <span>{hero.primaryCta}</span>
                <ArrowIcon />
              </a>
              <Link className={`${styles.btn} ${styles.btnGhost}`} href="#process">
                <span>{hero.secondaryCta}</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingValueSection() {
  const { value } = emailMarketingContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.valueGrid}`}>
          <article className={styles.bluePanel}>
            <span className={styles.panelCode}>EMAIL / RETENTION</span>
            <h2>{value.title}</h2>
            <p>{value.text}</p>
          </article>
          <div className={styles.supportCards}>
            {value.cards.map((card) => (
              <article key={card.title}>
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

export function EmailMarketingIncludedSection() {
  const { included } = emailMarketingContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.grid2} ${styles.twoCol}`}> 
          <div className={styles.visualCard}>
            <Image src={included.image} alt="Абстрактная система email-коммуникаций" width={1200} height={1500} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div className={styles.copyCol}>
            <h2>{included.title}</h2>
            <p className={styles.lead}>{included.text}</p>
            <div className={styles.featureList}>
              {included.items.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingScenariosSection() {
  const { scenarios } = emailMarketingContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{scenarios.title}</h2>
          <p>{scenarios.text}</p>
        </div>
        <div className={styles.scenarioShell}>
          <Image src={scenarios.image} alt="Карта сценариев email-маркетинга" width={1600} height={1000} sizes="100vw" />
          <div className={styles.scenarioPills} aria-label="Сценарии email-маркетинга">
            {scenarios.items.map((item) => <h3 key={item}>{item}</h3>)}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingProcessSection() {
  const { process } = emailMarketingContent;

  return (
    <section className={styles.section} id="process">
      <Container>
        <div className={styles.processGrid}>
          <div className={styles.stickyCopy}>
            <h2>{process.title}</h2>
            <p>{process.text}</p>
          </div>
          <div className={styles.timeline}>
            {process.steps.map((step, index) => (
              <article key={step.title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingPriceSection() {
  const { price } = emailMarketingContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.priceGrid}>
          <article className={styles.pricePanel}>
            <h2>{price.title}</h2>
            <p>{price.text}</p>
            <strong>{price.price}</strong>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#contact">
              <span>{price.cta}</span>
              <ArrowIcon />
            </a>
          </article>
          <div className={styles.priceVisual}>
            <Image src={price.image} alt="Планирование и аналитика email-маркетинга" width={1200} height={900} sizes="(min-width: 768px) 55vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingIndustriesSection() {
  const { industries } = emailMarketingContent;

  return (
    <section className={`${styles.section} ${styles.industriesSection}`}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>Email-маркетинг особенно полезен бизнесу, где важны повторные касания</h2>
        </div>
        <div className={grid.grid3}>
          {industries.map((industry) => (
            <article className={styles.industryCard} key={industry.title}>
              <Image src={industry.icon} alt="" width={512} height={512} />
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingTechnologiesSection() {
  const { technologies } = emailMarketingContent;

  return (
    <section className={`${styles.section} ${styles.techSection}`}>
      <Container>
        <div className={`${styles.sectionHead} ${styles.darkHead}`}>
          <h2>Данные, автоматизации и аналитика — основа email-маркетинга, который можно масштабировать</h2>
          <p>Используем email-канал не как ручную отправку писем, а как технологичную систему.</p>
        </div>
        <div className={grid.grid3}>
          {technologies.map((tech) => (
            <article className={styles.techCard} key={tech.code}>
              <span>{tech.code}</span>
              <h3>{tech.title}</h3>
              <p>{tech.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EmailMarketingFaqSection() {
  const { faq } = emailMarketingContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.faqGrid}>
          <div>
            <h2>Вопросы об email-маркетинге</h2>
            <p className={styles.lead}>Коротко закрываем основные сомнения перед запуском канала.</p>
          </div>
          <div className={styles.faqList}>
            {faq.map((item, index) => (
              <details key={item.title} open={index === 0}>
                <summary>{item.title}</summary>
                <p>{item.text}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
