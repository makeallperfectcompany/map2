import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { marketplaceProductCardsContent as content } from "@/content/services/marketplace-product-cards";
import styles from "./MarketplaceProductCardsPage.module.css";

export default function MarketplaceProductCardsPage() {
  return (
    <>
      <section className={styles.heroSection}>
        <Image className={styles.heroBg} src={content.hero.image} alt="Создание и оптимизация карточек товаров для маркетплейсов — Make All Perfect" fill priority sizes="100vw" />
        <Container className={styles.heroContent}>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryBtn} href="#final-cta">{content.hero.primaryCta}</a>
            <a className={styles.secondaryBtn} href="#audit">{content.hero.secondaryCta}</a>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container className={styles.twoCol}>
          <figure className={styles.visualCard}>
            <Image src={content.value.image} alt="Абстрактная карточка товара и элементы поиска" width={1200} height={1500} />
          </figure>
          <div>
            <h2>{content.value.title}</h2>
            <p className={styles.lead}>{content.value.text}</p>
            <div className={grid.grid2}>
              {content.value.cards.map(([title, text]) => (
                <article className={styles.smallCard} key={title}><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHead}><h2>{content.scope.title}</h2><p>{content.scope.text}</p></div>
          <div className={grid.grid3}>
            {content.scope.cards.map(([title, text], index) => (
              <article className={styles.featureCard} key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} id="audit">
        <Container className={styles.asym}>
          <div><h2>{content.audit.title}</h2><p className={styles.lead}>{content.audit.text}</p><a className={styles.primaryBtn} href="#final-cta">{content.audit.cta}</a></div>
          <figure className={styles.wideVisual}><Image src={content.audit.image} alt="Аудит и оптимизация карточки товара" width={1400} height={1000} /></figure>
        </Container>
      </section>

      <section className={styles.darkSection}>
        <Container className={styles.darkGrid}>
          <div><h2>{content.seo.title}</h2><p>{content.seo.text}</p><div className={styles.techTags}>{content.seo.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          <figure className={styles.darkVisual}><Image src={content.seo.image} alt="Технологичная структура SEO карточки товара" width={1400} height={900} /></figure>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHead}><h2>{content.platforms.title}</h2><p>{content.platforms.text}</p></div>
          <figure className={styles.platformVisual}><Image src={content.platforms.image} alt="Адаптация карточки под разные маркетплейсы" width={1600} height={900} /></figure>
          <div className={grid.grid4}>{content.platforms.cards.map(([title, text]) => <article className={styles.smallCard} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHead}><h2>{content.process.title}</h2></div>
          <div className={grid.grid3}>{content.process.cards.map(([title, text], index) => <article className={styles.featureCard} key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container className={styles.pricePanel}>
          <div><h2>{content.pricing.title}</h2><p>{content.pricing.text}</p><strong>{content.pricing.price}</strong><a className={styles.whiteBtn} href="#final-cta">{content.pricing.cta}</a></div>
          <ul>{content.pricing.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </Container>
      </section>

      {/* Далее в page.tsx подключаются реальные shared-компоненты проекта:
          Industries with content.industries → Technologies with content.technologies → Cases → Reviews → About → Blog → FAQ with content.faq → Final CTA with content.finalCta → Footer */}
    </>
  );
}
