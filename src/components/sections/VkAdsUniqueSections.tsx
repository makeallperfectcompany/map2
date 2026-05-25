import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { vkAdsContent } from "@/content/services/vkAds";
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

export function VkAdsHeroSection() {
  const { hero } = vkAdsContent;

  return (
    <section className={`${styles.section} ${styles.hero}`}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.heroColumns}`}>
          <div className={styles.heroText}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1>{hero.title}</h1>
            <p className={styles.heroDescription}>{hero.description}</p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#vk-ads-cost">
                {hero.primaryCta} <Arrow />
              </Link>
              <Link className={styles.ghostButton} href="#vk-ads-cost">
                {hero.secondaryCta} <Arrow />
              </Link>
            </div>
            <ul className={styles.heroBenefits}>
              {hero.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={1536}
              height={1024}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VkAdsInstrumentSection() {
  const { instrument } = vkAdsContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{instrument.eyebrow}</Eyebrow>
          <h2>{instrument.title}</h2>
          <p>{instrument.description}</p>
        </div>

        <div className={`${grid.gridAsymmetric} ${styles.instrumentColumns}`}>
          <div className={styles.visualCard}>
            <Image
              src={instrument.image}
              alt={instrument.imageAlt}
              width={1536}
              height={1024}
              className={styles.platformImage}
              loading="lazy"
            />
          </div>

          <div className={grid.grid3}>
            {instrument.cards.map((card) => (
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

export function VkAdsFormatsSection() {
  const { formats } = vkAdsContent;

  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.darkHeading}`}>
          <div>
            <Eyebrow dark>{formats.eyebrow}</Eyebrow>
            <h2>{formats.title}</h2>
          </div>
          <p>{formats.description}</p>
        </div>

        <div className={grid.grid3}>
          {formats.cards.map((card, index) => (
            <article
              className={`${styles.darkCard} ${index === 0 ? styles.darkCardFeatured : ""}`}
              key={card.code}
            >
              <span className={styles.code}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.tags ? (
                <div className={styles.tags}>
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VkAdsServiceSection() {
  const { service } = vkAdsContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.splitHeading}`}>
          <div>
            <Eyebrow>{service.eyebrow}</Eyebrow>
            <h2>{service.title}</h2>
          </div>
          <p>{service.description}</p>
        </div>
        <div className={grid.grid3}>
          {service.cards.map((card) => (
            <article className={styles.lightCard} key={card.code}>
              <span className={styles.number}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VkAdsProcessSection() {
  const { process } = vkAdsContent;

  return (
    <section className={`${styles.section} ${styles.softSection}`}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{process.eyebrow}</Eyebrow>
          <h2>{process.title}</h2>
          <p>{process.description}</p>
        </div>
        <div className={`${grid.grid3} ${styles.steps}`}>
          {process.steps.map((step) => (
            <article className={styles.stepCard} key={step.number}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <Link className={styles.primaryButton} href="#vk-ads-cost">
          {process.cta} <Arrow />
        </Link>
      </Container>
    </section>
  );
}

export function VkAdsAdvantagesSection() {
  const { advantages } = vkAdsContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{advantages.eyebrow}</Eyebrow>
          <h2>{advantages.title}</h2>
          <p>{advantages.description}</p>
        </div>

        <div className={`${grid.gridAsymmetric} ${styles.advantagesColumns}`}>
          <div className={styles.abstractVisual} aria-hidden="true">
            <div className={styles.visualPost}>
              <span />
              <span />
              <i />
            </div>
            <div className={styles.visualRing} />
            <div className={styles.visualBars}>
              <i /><i /><i />
            </div>
          </div>

          <div className={styles.benefits}>
            <article className={styles.highlightCard}>
              <span className={styles.highlightCode}>{advantages.highlight.eyebrow}</span>
              <h3>{advantages.highlight.title}</h3>
              <p>{advantages.highlight.text}</p>
            </article>
            <div className={grid.grid3}>
              {advantages.cards.map((card) => (
                <article className={styles.miniCard} key={card.code}>
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

export function VkAdsPricingSection() {
  const { pricing } = vkAdsContent;

  return (
    <section className={styles.section} id="vk-ads-cost">
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h2>{pricing.title}</h2>
          <p>{pricing.description}</p>
        </div>
        <div className={`${grid.grid3} ${styles.pricingCards}`}>
          {pricing.cards.map((card) => (
            <article
              className={`${styles.priceCard} ${card.featured ? styles.priceCardFeatured : ""}`}
              key={card.title}
            >
              {card.featured ? <span className={styles.badge}>Основной формат</span> : null}
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                className={card.featured ? styles.primaryButton : styles.ghostButton}
                href="#consultation"
              >
                {card.cta} <Arrow />
              </Link>
            </article>
          ))}
        </div>
        <p className={styles.note}>{pricing.note}</p>
      </Container>
    </section>
  );
}

export function VkAdsAudiencesSection() {
  const { audiences } = vkAdsContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <Eyebrow>{audiences.eyebrow}</Eyebrow>
          <h2>{audiences.title}</h2>
          <p>{audiences.description}</p>
        </div>
        <div className={`${grid.grid3} ${styles.audienceCards}`}>
          {audiences.cards.map((card) => (
            <article className={styles.lightCard} key={card.code}>
              <span className={styles.number}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <Link className={styles.textLink} href="#consultation">
          {audiences.cta} <Arrow />
        </Link>
      </Container>
    </section>
  );
}

export function VkAdsPrinciplesSection() {
  const { principles } = vkAdsContent;

  return (
    <section className={`${styles.section} ${styles.darkSection}`}>
      <Container>
        <div className={`${grid.gridAsymmetric} ${styles.principlesColumns}`}>
          <div>
            <Eyebrow dark>{principles.eyebrow}</Eyebrow>
            <h2>{principles.title}</h2>
            <p className={styles.darkDescription}>{principles.description}</p>
          </div>
          <ul className={styles.principlesList}>
            {principles.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
