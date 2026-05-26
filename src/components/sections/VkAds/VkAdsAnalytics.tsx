import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

type Props = { content: VkAdsContent["analytics"] };

export default function VkAdsAnalytics({ content }: Props) {
  return (
    <section className={styles.darkSection} aria-labelledby="vk-analytics-title">
      <Container>
        <div className={grid.gridAsymmetric}>
          <div className={styles.analyticsIntro}>
            <span className={styles.darkCode}>PERFORMANCE</span>
            <h2 id="vk-analytics-title">{content.title}</h2>
            <p>{content.text}</p>
          </div>
          <div className={grid.grid2}>
            {content.cards.map((card) => (
              <article key={card.title} className={styles.darkCard}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
        <p className={styles.performanceBar}>{content.accent}</p>
      </Container>
    </section>
  );
}