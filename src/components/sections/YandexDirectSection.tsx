import { Container } from "@/components/ui/Container/Container";
import Link from "next/link";
import { cases } from "@/content/cases";
import {
  heroInfo,
  howItWorks,
  servicesData,
  advantagesData,
  processData,
  pricingData,
  fitData,
  expertiseData,
  faqData,
} from "@/content/services/yandexDirect";
import HomeIndustriesSection from "@/components/sections/HomeIndustriesSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import styles from "./YandexDirectSection.module.css";

function Label({ children }: { children: React.ReactNode }) {
  return <span className={styles.pillLabel}>{children}</span>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Hero() {
  return (
    <section className={styles.hero}>
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
            {/* Desktop: benefits below buttons */}
            {/* Mobile: benefits shown at ≤1024px */}
            <ul className={styles.heroBenefits}>
              {heroInfo.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <img
              className={styles.heroVisual}
              src="/images/services/yandex-direct/hero-visual.png"
              alt=""
            />
            {/* Desktop: benefits inline in right column */}
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

function Niches() {
  return <HomeIndustriesSection />;
}

function HowItWorks() {
  return (
    <section className={styles.section}>
      <Container>
      <div className={styles.heading}>
        <Label>{howItWorks.label}</Label>
        <h2>{howItWorks.title}</h2>
        <p>{howItWorks.text}</p>
      </div>
      <div className={styles.howGrid}>
        <div className={styles.flowVisual}>
          <img
            className={styles.flowImage}
            src="/images/services/yandex-direct/flow.webp"
            alt=""
            loading="lazy"
          />
        </div>
        <div className={styles.formatGrid}>
          {howItWorks.formats.map((item) => (
            <article className={styles.lightCard} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className={styles.darkSection}>
      <Container>
      <div className={styles.darkHeading}>
        <div>
          <Label>{servicesData.label}</Label>
          <h2>{servicesData.title}</h2>
        </div>
        <p>{servicesData.text}</p>
      </div>
      <div className={styles.servicesGrid}>
        {servicesData.items.map((item, i) => (
          <article
            className={`${styles.darkCard} ${i === 0 ? styles.activeDarkCard : ""}`}
            key={item.code}
          >
            <small>{item.code}</small>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className={styles.darkTags}>
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
      </Container>
    </section>
  );
}

function Advantages() {
  return (
    <section className={styles.section}>
      <Container>
      <div className={styles.heading}>
        <Label>{advantagesData.label}</Label>
        <h2>{advantagesData.title}</h2>
        <p>{advantagesData.text}</p>
      </div>
      <div className={styles.advantagesGrid}>
        <div className={styles.analyticsVisual}>
          <img
            className={styles.analyticsImage}
            src="/images/services/yandex-direct/analytics.webp"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <article className={styles.blueCard}>
            <small>{advantagesData.blueCard.subtitle}</small>
            <h3>{advantagesData.blueCard.title}</h3>
            <p>{advantagesData.blueCard.text}</p>
          </article>
          <div className={styles.benefitGrid}>
            {advantagesData.benefits.map((item, i) => (
              <article key={item.title}>
                <small>0{i + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

function Process() {
  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
      <div className={styles.heading}>
        <Label>{processData.label}</Label>
        <h2>{processData.title}</h2>
        <p>{processData.text}</p>
      </div>
      <div className={styles.stepsGrid}>
        {processData.steps.map((step, i) => (
          <article key={step.title}>
            <small>0{i + 1}</small>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
      <a className={styles.btnPrimary} href="#pricing">
        Обсудить запуск рекламы <Arrow />
      </a>
      </Container>
    </section>
  );
}

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
        {pricingData.packages.map((item) => (
          <article
            className={item.featured ? styles.featuredPackage : styles.packageCard}
            key={item.title}
          >
            {item.featured && <span className={styles.badge}>Основной формат</span>}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ul>
              {item.items.map((value) => <li key={value}>{value}</li>)}
            </ul>
            <a
              className={item.featured ? styles.btnPrimary : styles.btnSecondary}
              href="#lead-form"
            >
              {item.cta} <Arrow />
            </a>
          </article>
        ))}
      </div>
      <p className={styles.pricingNote}>Финальная стоимость рассчитывается после знакомства с задачей, сайтом, нишей и планируемым рекламным бюджетом.</p>
      </Container>
    </section>
  );
}

function Cases() {
  const topCases = cases.slice(0, 3);
  return (
    <section className={`${styles.section} ${styles.casesSection}`}>
      <Container>
      <div className={styles.rowHeading}>
        <div className={styles.heading}>
          <Label>Кейсы</Label>
          <h2>Результаты, которые можно проверить в цифрах</h2>
          <p>Подтверждённые проекты и реальные показатели из нашей практики.</p>
        </div>
        <Link href="/cases" className={styles.textLink}>Смотреть все кейсы <Arrow /></Link>
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

function Fit() {
  return (
    <section className={styles.section}>
      <Container>
      <div className={styles.heading}>
        <Label>{fitData.label}</Label>
        <h2>{fitData.title}</h2>
      </div>
      <div className={styles.fitGrid}>
        <article className={styles.fitCard}>
          <h3>Реклама будет полезна, если</h3>
          <ul>
            {fitData.suitable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={styles.contrastCard}>
          <Label>{fitData.contrast.subtitle}</Label>
          <h3>{fitData.contrast.title}</h3>
          <p>{fitData.contrast.text}</p>
          <a className={styles.whiteButton} href="#lead-form">Получить консультацию <Arrow /></a>
        </article>
      </div>
      </Container>
    </section>
  );
}

function Expertise() {
  return (
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
        {expertiseData.items.map((item) => (
          <article key={item.code}>
            <small>{item.code}</small>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section className={styles.section}>
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
          <a className={styles.whiteButton} href="#lead-form">Получить консультацию</a>
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

export default function YandexDirectSection() {
  return (
    <main className={styles.page}>
      <Hero />
      <Niches />
      <HowItWorks />
      <Services />
      <Advantages />
      <Process />
      <Pricing />
      <Cases />
      <Fit />
      <Expertise />
      <Faq />
      <FinalCtaSection />
    </main>
  );
}
