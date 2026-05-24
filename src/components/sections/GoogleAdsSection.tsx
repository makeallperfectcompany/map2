import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { cases } from "@/content/cases";
import {
  heroInfo,
  industriesData,
  availabilityData,
  servicesData,
  approachData,
  casesData,
  processData,
  pricingData,
  transparencyData,
  suitabilityData,
  expertiseData,
  technologyData,
  faqData,
  relatedData,
} from "@/content/services/googleAds";
import styles from "./GoogleAdsSection.module.css";

/* ─────────── Shared UI Helpers ─────────── */

function Label({ children }: { children: React.ReactNode }) {
  return <span className={styles.pillLabel}>{children}</span>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

/* ─────────── Hero ─────────── */

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        className={styles.heroBg}
        src="/images/services/google-ads/google-ads-hero-background.webp"
        alt=""
        aria-hidden="true"
      />
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <h1 className={styles.heroTitle}>{heroInfo.title}</h1>
            <p className={styles.heroLead}>{heroInfo.text}</p>
            <div className={styles.heroActions}>
              <a href={heroInfo.primaryCta.href} className={`${styles.btn} ${styles.btnAccent}`}>
                <span className={styles.label}>{heroInfo.primaryCta.text}</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
              <a href={heroInfo.secondaryCta.href} className={`${styles.btn} ${styles.btnGhost}`}>
                <span className={styles.label}>{heroInfo.secondaryCta.text}</span>
                <span className={styles.arrWrap}>
                  <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
            <div className={styles.heroBenefits}>
              {heroInfo.benefits.map((item) => (
                <div key={item}>
                  <i aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <img
              className={styles.heroVisual}
              src="/images/services/google-ads/google-ads-hero-element.webp"
              alt=""
            />
            <div className={styles.heroBenefitsInline} aria-label="Преимущества">
              {heroInfo.benefits.reduce<React.ReactNode[]>((acc, item, i) => {
                if (i > 0) acc.push(<i key={`dot-${i}`} aria-hidden="true" />);
                acc.push(<span key={item}>{item}</span>);
                return acc;
              }, [])}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Industries ─────────── */

function Industries() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.industriesIntro}>
          <div className={styles.heading}>
            <Label>{industriesData.label}</Label>
            <h2>{industriesData.title}</h2>
            <p>{industriesData.text}</p>
          </div>
          <aside className={styles.focusCard}>
            <small>{industriesData.focus.kicker}</small>
            <h3>{industriesData.focus.title}</h3>
            <p>{industriesData.focus.text}</p>
            <div className={styles.metricRow}>
              {industriesData.focus.metrics.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </aside>
        </div>
        <div className={styles.industriesGrid}>
          {industriesData.cards.map((card) => (
            <article className={styles.lightCard} key={card.key}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={styles.tagRow}>
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

/* ─────────── Availability ─────────── */

function Availability() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.availIntro}>
          <Label>{availabilityData.label}</Label>
          <h2>{availabilityData.title}</h2>
          <p>{availabilityData.text}</p>
        </div>
        <div className={styles.availBody}>
          <div className={styles.availVisual}>
            <img
              src="/images/services/google-ads/google-ads-markets.webp"
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.availCards}>
            {availabilityData.cards.map((card) => (
              <article className={styles.lightCard} key={card.code}>
                <span className={styles.cardCode}>{card.code}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
            <aside className={styles.noticeCard}>
              <h3>{availabilityData.notice.title}</h3>
              <p>{availabilityData.notice.text}</p>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Services (dark) ─────────── */

function Services() {
  return (
    <section className={styles.darkSection} id="services">
      <Container>
        <div className={styles.darkHeading}>
          <div>
            <Label>{servicesData.label}</Label>
            <h2>{servicesData.title}</h2>
          </div>
          <p>{servicesData.text}</p>
        </div>
        <div className={styles.servicesGrid}>
          {servicesData.cards.map((card, i) => (
            <article
              className={`${styles.darkCard} ${i === 0 ? styles.activeDarkCard : ""}`}
              key={card.code}
            >
              <small>{card.code}</small>
              <h3>{card.title}</h3>
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

/* ─────────── Approach ─────────── */

function Approach() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Label>{approachData.label}</Label>
          <h2>{approachData.title}</h2>
          <p>{approachData.text}</p>
        </div>
        <div className={styles.approachGrid}>
          <div className={styles.approachVisual}>
            <img
              src="/images/services/google-ads/google-ads-performance.webp"
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.approachRight}>
            <article className={styles.blueCard}>
              <small>{approachData.featured.kicker}</small>
              <h3>{approachData.featured.title}</h3>
              <p>{approachData.featured.text}</p>
            </article>
            <div className={styles.approachCards}>
              {approachData.cards.map((card) => (
                <article key={card.code}>
                  <span className={styles.cardCode}>{card.code}</span>
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

/* ─────────── Process ─────────── */

function Process() {
  return (
    <section className={`${styles.section} ${styles.softSection}`} id="process">
      <Container>
        <div className={styles.heading}>
          <Label>{processData.label}</Label>
          <h2>{processData.title}</h2>
          <p>{processData.text}</p>
        </div>
        <div className={styles.stepsGrid}>
          {processData.items.map((step) => (
            <article key={step.number}>
              <span className={styles.cardCode}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <a className={styles.btnPrimary} href="#contact">
          Обсудить запуск рекламы <Arrow />
        </a>
      </Container>
    </section>
  );
}

/* ─────────── Pricing ─────────── */

function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <Container>
        <div className={styles.heading}>
          <Label>{pricingData.label}</Label>
          <h2>{pricingData.title}</h2>
          <p>{pricingData.text}</p>
        </div>
        <div className={styles.packagesGrid}>
          {pricingData.cards.map((item) => (
            <article
              className={item.featured ? styles.featuredPackage : styles.packageCard}
              key={item.title}
            >
              {item.featured && <span className={styles.badge}>Основной формат</span>}
              <small>{item.subtitle}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.items.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
              <a
                className={item.featured ? styles.btnPrimary : styles.btnSecondary}
                href="#contact"
              >
                {item.cta} <Arrow />
              </a>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}>{pricingData.note}</p>
      </Container>
    </section>
  );
}

/* ─────────── Transparency ─────────── */

function Transparency() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Label>Прозрачность</Label>
          <h2>{transparencyData.title}</h2>
        </div>
        <div className={styles.transparencyGrid}>
          {transparencyData.items.map((item) => (
            <article className={styles.lightCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Cases ─────────── */

function Cases() {
  const topCases = cases.slice(0, 3);
  return (
    <section className={`${styles.section} ${styles.casesSection}`}>
      <Container>
        <div className={styles.rowHeading}>
          <div className={styles.heading}>
            <Label>{casesData.label}</Label>
            <h2>{casesData.title}</h2>
            <p>{casesData.text}</p>
          </div>
          <Link href="/cases" className={styles.textLink}>
            Смотреть все кейсы <Arrow />
          </Link>
        </div>
        <div className={styles.casesGrid}>
          {topCases.map((c) => (
            <a className={styles.caseCard} key={c.slug} href={c.url}>
              <div className={styles.caseImage}>
                <img src={c.cover} alt={c.title} loading="lazy" decoding="async" />
              </div>
              <div className={styles.caseBody}>
                <span className={styles.caseCategory}>{c.category}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <span className={styles.readMore}>Открыть →</span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Suitability ─────────── */

function Suitability() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Label>{suitabilityData.label}</Label>
          <h2>{suitabilityData.title}</h2>
        </div>
        <div className={styles.fitGrid}>
          <article className={styles.fitCard}>
            <h3>Реклама будет полезна, если</h3>
            <ul>
              {suitabilityData.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article className={styles.contrastCard}>
            <Label>{suitabilityData.card.kicker}</Label>
            <h3>{suitabilityData.card.title}</h3>
            <p>{suitabilityData.card.text}</p>
            <a className={styles.whiteButton} href="#contact">
              {suitabilityData.card.cta} <Arrow />
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Expertise (dark) + Technology ─────────── */

function Expertise() {
  return (
    <>
      <section className={styles.darkSection}>
        <Container>
          <div className={styles.darkHeading}>
            <div>
              <Label>{expertiseData.label}</Label>
              <h2>{expertiseData.title}</h2>
            </div>
            <p>{expertiseData.text}</p>
          </div>
          <div className={styles.expertiseGrid}>
            {expertiseData.cards.map((card) => (
              <article key={card.code}>
                <small>{card.code}</small>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.heading}>
            <Label>{technologyData.label}</Label>
            <h2>{technologyData.title}</h2>
          </div>
          <div className={styles.techGrid}>
            {technologyData.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

/* ─────────── FAQ ─────────── */

function Faq() {
  return (
    <section className={styles.section} id="faq">
      <Container>
        <div className={styles.faqHeading}>
          <div className={styles.heading}>
            <Label>{faqData.label}</Label>
            <h2>{faqData.title}</h2>
          </div>
          <article className={styles.contrastCard}>
            <small>AUDIT</small>
            <h3>Не нашли свой вопрос?</h3>
            <p>Разберём задачу и подходящий формат рекламы лично.</p>
            <a className={styles.whiteButton} href="#contact">
              Получить консультацию
            </a>
          </article>
        </div>
        <div className={styles.faqList}>
          {faqData.items.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                <span>0{i + 1}</span>
                {item.q}
                <i>+</i>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Related Services ─────────── */

function Related() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={styles.heading}>
          <Label>{relatedData.label}</Label>
          <h2>{relatedData.title}</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedData.items.map((item) => (
            <a className={styles.relatedCard} href={item.href} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className={styles.readMore}>Подробнее →</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────── Main Export ─────────── */

export default function GoogleAdsSection() {
  return (
    <main className={styles.page}>
      <Hero />
      <Industries />
      <Availability />
      <Services />
      <Approach />
      <Process />
      <Pricing />
      <Transparency />
      <Cases />
      <Suitability />
      <Expertise />
      <Faq />
      <Related />
      <FinalCtaSection />
    </main>
  );
}
