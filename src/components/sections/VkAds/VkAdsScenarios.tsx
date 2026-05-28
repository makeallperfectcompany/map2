import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsScenarios({ content }: { content: VkAdsContent["scenarios"] }) {
  return (
    <section className={styles.lightSection} aria-labelledby="vkAdsScenariosTitle">
      <Container>
        <header className={styles.centeredHead}>
          <span className={styles.pill}>{content.label}</span>
          <h2 id="vkAdsScenariosTitle">{content.title}</h2>
          <p>{content.text}</p>
        </header>
        <div className={grid.grid4}>
          {content.cards.map((card) => (
            <article className={card.featured ? styles.scenarioFeatured : styles.scenarioCard} key={card.title}>
              <span className={styles.scenarioIcon} aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.centerAction}>
          <Link className={styles.inlineLink} href="#contact">{content.cta}<span>↗</span></Link>
        </div>
      </Container>
    </section>
  );
}