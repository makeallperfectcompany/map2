import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { avitoContent as content } from "@/content/services/avito";
import styles from "./AvitoUniqueSections.module.css";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";

/* ── Pill-лейбл как на главной ──────────────────────────────────── */
function SectionLabel({ children }: { children: string }) {
  return <span className={styles.sectionLabel}>{children}</span>;
}

/* ── Герой (светлый, Apple-стиль, доверительная плашка) ──────────── */
export function AvitoHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{content.hero.title}</h1>
          <p className={styles.heroLead}>{content.hero.description}</p>

          <div className={styles.heroActions}>
            <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
              <span className={styles.btnLabel}>{content.hero.primaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </OpenConsultationButton>

            <Link href="/cases" className={`${styles.btn} ${styles.btnGhost}`}>
              <span className={styles.btnLabel}>{content.hero.secondaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust bar */}
          <div className={styles.trustBar}>
            <div className={styles.trustBarInner}>
              <div className={styles.trustItem}>
                <span className={styles.trustLabel}>С 2017 года в маркетинге</span>
                <span className={styles.trustValue}>строим продвижение на опыте, аналитике и понимании бизнеса</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustLabel}>Не продаём лишние услуги</span>
                <span className={styles.trustValue}>предлагаем только то, что действительно нужно для роста</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustLabel}>Полная прозрачность в работе</span>
                <span className={styles.trustValue}>вы видите стратегию, цифры и ход работ на каждом этапе</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <img
            className={styles.heroLogo}
            src="/assets/home/hero/logo-hero.png"
            alt="Make All Perfect"
            title="Make All Perfect"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Что входит в услугу ──────────────────────────────────────────── */
export function AvitoServicesSection() {
  return (
    <section className={styles.darkSection}>
      <Container>
        <div className={styles.darkHeader}>
          <span className={styles.darkLabel}>{content.services.eyebrow}</span>
          <h2>{content.services.title}</h2>
          <p className={styles.darkDesc}>{content.services.description}</p>
        </div>
        <div className={grid.grid3}>
          {content.services.cards.map((card) => (
            <article className={styles.darkCard} key={card.code}>
              <img
                className={styles.darkCardIcon}
                src={`/assets/services/avito/icons/icon-${card.code}.webp`}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
              />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Преимущества (как на главной: h2 + 2x2 карточки) ─────────── */
export function AvitoAdvantagesSection() {
  return (
    <section className={styles.avitoAdvSection}>
      <Container className={styles.avitoAdvInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{content.advantages.eyebrow}</span>
          <p className={styles.kicker}>Почему выбирают нас</p>
        </div>

        <div className={styles.avitoAdvRow}>
          <div className={styles.avitoAdvLeft}>
            <h2>{content.advantages.title}</h2>
            <div className={styles.avitoAdvVisual}>
              <img
                src="/images/home/advantages-visual.webp"
                alt=""
                title="Преимущества"
              />
            </div>
          </div>

          <div className={styles.avitoAdvRight}>
            <div className={styles.avitoAdvGrid}>
              {content.advantages.cards.map((card, index) => (
                <article className={styles.avitoAdvCard} key={card.code}>
                  <span className={styles.avitoAdvNumber}>{String(index + 1).padStart(2, "0")}</span>
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

/* ── Как мы работаем (сетка карточек вместо таймлайна) ────────────── */
export function AvitoProcessSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <SectionLabel>{content.process.eyebrow}</SectionLabel>
          <h2>{content.process.title}</h2>
        </div>
        <div className={styles.processGrid}>
          {content.process.steps.map((step) => (
            <article className={styles.glassCard} key={step.number}>
              <span className={styles.cardCode}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Для кого подходит (тёмная секция как ServicesSection) ───────── */
export function AvitoOpportunitiesSection() {
  return (
    <section className={styles.darkSection}>
      <Container>
        <div className={styles.darkHeader}>
          <span className={styles.darkLabel}>{content.opportunities.eyebrow}</span>
          <h2>{content.opportunities.title}</h2>
        </div>
        <div className={grid.grid4}>
          {content.opportunities.cards.map((card) => (
            <article className={styles.darkCard} key={card.code}>
              <span className={styles.darkCode}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Стоимость ────────────────────────────────────────────────────── */
export function AvitoPricingSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.sectionHeader} ${styles.headerCentered}`}>
          <SectionLabel>{content.pricing.eyebrow}</SectionLabel>
          <h2>{content.pricing.title}</h2>
          <p className={styles.sectionDesc}>{content.pricing.description}</p>
        </div>
        <div className={styles.pricingGrid}>
          {content.pricing.tiers.map((tier, index) => (
            <article
              className={`${styles.pricingCard} ${index === 1 ? styles.pricingFeatured : ""}`}
              key={tier.name}
            >
              {index === 1 && <span className={styles.pricingBadge}>Рекомендуем</span>}
              <div className={styles.pricingHeader}>
                <h3 className={styles.pricingName}>{tier.name}</h3>
                <p className={styles.pricingSubtitle}>{tier.subtitle}</p>
              </div>
              <div className={styles.pricingBody}>
                <div className={styles.pricingAmount}>{tier.price}</div>
                <p className={styles.pricingBudget}>{tier.budget}</p>
                <ul className={styles.pricingFeatures}>
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.pricingNote}>{content.pricing.note}</p>
        <div className={styles.pricingCtaWrapper}>
          <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
            <span className={styles.btnLabel}>{content.pricing.cta}</span>
          </OpenConsultationButton>
        </div>
      </Container>
    </section>
  );
}
