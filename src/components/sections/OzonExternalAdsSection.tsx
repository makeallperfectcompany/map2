import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { ozonExternalAdsContent as content } from "@/content/services/ozonExternalAds";
import styles from "./OzonExternalAdsSection.module.css";

function CardGrid({ cards, dark = false }: { cards: readonly { title: string; text: string }[]; dark?: boolean }) {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <article className={dark ? styles.darkCard : styles.card} key={card.title}>
          <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function OzonExternalAdsSection() {
  return (
    <>
      <section className={styles.heroSection}>
        <Image className={styles.heroBg} src={content.hero.image} alt="Внешняя реклама для Ozon под ключ — Make All Perfect" fill priority sizes="100vw" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <Container className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">{content.hero.primaryCta}</a>
              <a className={styles.secondaryButton} href="#pricing">{content.hero.secondaryCta}</a>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.sectionHeaderWide}>
            <h2>{content.intro.title}</h2>
            <p>{content.intro.text}</p>
          </div>
          <div className={styles.visualFeatureGrid}>
            <div className={styles.verticalVisual}>
              <Image src={content.intro.image} alt="Система внешнего трафика для Ozon — аналитика, каналы и экономика" fill sizes="(min-width: 1280px) 520px, 100vw" />
            </div>
            <div className={styles.featureStack}>
              <article className={styles.blueCard}>
                <h3>{content.intro.accentTitle}</h3>
                <p>{content.intro.accentText}</p>
              </article>
              <div className={styles.grid2}>{content.intro.cards.map((card) => (
                <article className={styles.cardCompact} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionWhite}>
        <Container>
          <div className={styles.sectionHeaderWide}><h2>{content.fit.title}</h2></div>
          <CardGrid cards={content.fit.cards} />
        </Container>
      </section>

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.auditGrid}>
            <div>
              <h2>{content.audit.title}</h2>
              <p className={styles.leadText}>{content.audit.text}</p>
              <ul className={styles.checkList}>
                {content.audit.checklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={styles.verticalVisual}>
              <Image src={content.audit.image} alt="Аудит карточки Ozon и проверка экономики перед запуском внешней рекламы" fill sizes="(min-width: 1280px) 520px, 100vw" />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionWhite}>
        <Container>
          <div className={styles.sectionHeaderWide}>
            <h2>{content.channels.title}</h2>
            <p>{content.channels.text}</p>
          </div>
          <div className={styles.wideVisual}>
            <Image src={content.channels.image} alt="Каналы внешней рекламы для Ozon — Яндекс Директ, VK Ads, Telegram, блогеры" fill sizes="(min-width: 1280px) 1120px, 100vw" />
          </div>
          <CardGrid cards={content.channels.cards} />
        </Container>
      </section>

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.processGrid}>
            <div className={styles.stickyHeader}><h2>{content.process.title}</h2></div>
            <div className={styles.timeline}>
              {content.process.steps.map((step, index) => (
                <article className={styles.timelineItem} key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionWhite} id="pricing">
        <Container>
          <div className={styles.pricingPanel}>
            <div>
              <span className={styles.pricePill}>{content.pricing.price}</span>
              <h2>{content.pricing.title}</h2>
              <p>{content.pricing.text}</p>
            </div>
            <div className={styles.pricingCards}>{content.pricing.cards.map((card) => (
              <article className={styles.priceCard} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>
            ))}</div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.sectionHeaderWide}><h2>{content.included.title}</h2></div>
          <CardGrid cards={content.included.cards} />
        </Container>
      </section>

      <section className={styles.darkSection}>
        <Container>
          <div className={styles.darkHeader}><h2>{content.mistakes.title}</h2></div>
          <CardGrid cards={content.mistakes.cards} dark />
        </Container>
      </section>

      <section className={styles.sectionWhite}>
        <Container>
          <div className={styles.sectionHeaderWide}><h2>{content.industries.title}</h2><p>{content.industries.text}</p></div>
          <CardGrid cards={content.industries.cards} />
        </Container>
      </section>

      <section className={styles.techSection}>
        <Container>
          <div className={styles.techHeader}><h2>{content.technologies.title}</h2></div>
          <div className={styles.techStats}>{content.technologies.stats.map((stat) => (
            <article key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></article>
          ))}</div>
          <CardGrid cards={content.technologies.cards} dark />
        </Container>
      </section>

      {/* Production integration point: connect existing shared components here in strict order:
          CasesSection → HomeReviewsSection → HomeAboutSection → HomeBlogSection.
          Do not duplicate their implementation inside this unique section package. */}

      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.faqGrid}>
            <div><h2>Вопросы о внешней рекламе для Ozon</h2></div>
            <div className={styles.faqList}>{content.faq.map((item) => (
              <details className={styles.faqItem} key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}</div>
          </div>
        </Container>
      </section>

      <section className={styles.finalCta} id="contact">
        <Container>
          <div className={styles.finalPanel}>
            <div><h2>{content.finalCta.title}</h2><p>{content.finalCta.text}</p></div>
            <a className={styles.finalButton} href="#contact">{content.finalCta.cta}</a>
          </div>
        </Container>
      </section>
    </>
  );
}
