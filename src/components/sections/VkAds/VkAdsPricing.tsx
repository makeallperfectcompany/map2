import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAdsNew";
import styles from "./VkAds.module.css";

export default function VkAdsPricing({ content }: { content: VkAdsContent["pricing"] }) {
  return (
    <section id="pricing" className={styles.lightSection} aria-labelledby="vkAdsPricingTitle">
      <Container>
        <header className={styles.sectionHead}>
          <div><span className={styles.pill}>{content.label}</span><h2 id="vkAdsPricingTitle">{content.title}</h2></div>
          <p>{content.text}</p>
        </header>
        <div className={grid.grid2}>
          <article className={styles.priceMain}>
            <span className={styles.code}>{content.offer.code}</span>
            <h3>{content.offer.title}</h3>
            <p className={styles.price}>{content.offer.price} <small>{content.offer.period}</small></p>
            <ul>{content.offer.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <Link className={styles.whiteButton} href="#contact">{content.offer.cta}<span>↗</span></Link>
          </article>
          <div className={styles.priceSide}>
            {content.support.map((card) => (
              <article className={styles.whiteCard} key={card.title}>
                <h3>{card.title}</h3><p>{card.text}</p>
                {card.cta ? <Link className={styles.inlineLink} href="#contact">{card.cta}<span>↗</span></Link> : null}
              </article>
            ))}
          </div>
        </div>
        <p className={styles.pricingNote}>{content.note}</p>
      </Container>
    </section>
  );
}