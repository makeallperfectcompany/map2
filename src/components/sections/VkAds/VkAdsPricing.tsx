import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsPricing({ content }: { content: VkAdsContent["pricing"] }) {
  return (
    <section id="pricing" className={styles.lightSection} aria-labelledby="vkAdsPricingTitle">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vkAdsPricingTitle">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid2}>
          <article className={styles.priceMain}>
            <span className={styles.darkCode}>{content.main.code}</span>
            <h3>{content.main.title}</h3>
            <p className={styles.priceValue}>{content.main.price} <small>{content.main.period}</small></p>
            <ul>{content.main.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <Link href="#contact" className={styles.primaryButton}>{content.main.cta}<span>↗</span></Link>
          </article>
          <div className={styles.priceSide}>
            <article className={styles.cardCompact}>
              <h3>{content.budgetCard.title}</h3>
              <p>{content.budgetCard.text}</p>
            </article>
            <article className={styles.cardCompact}>
              <h3>{content.calculationCard.title}</h3>
              <p>{content.calculationCard.text}</p>
              <Link href="#contact" className={styles.inlineLink}>{content.calculationCard.cta}<span>↗</span></Link>
            </article>
          </div>
        </div>
        <p className={styles.pricingNote}>{content.note}</p>
      </Container>
    </section>
  );
}