import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsScenarios({ content }: { content: VkAdsContent["scenarios"] }) {
  return (
    <section className={styles.lightSection} aria-labelledby="vkAdsScenariosTitle">
      <Container>
        <div className={styles.centeredHeader}>
          <span className={styles.sectionPill}>{content.label}</span>
          <h2 id="vkAdsScenariosTitle">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid4}>
          {content.cards.map((card) => (
            <article
              key={card.title}
              className={card.featured ? styles.scenarioCardFeatured : styles.scenarioCard}
            >
              <span className={styles.scenarioIcon} aria-hidden="true">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}