import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsAnalytics({ content }: { content: VkAdsContent["analytics"] }) {
  return (
    <section className={`${styles.darkSection} ${styles.analytics}`} aria-labelledby="vkAdsAnalyticsTitle">
      <Container>
        <div className={styles.analyticsRow}>
          <div className={styles.analyticsIntro}>
            <span className={styles.darkPill}>{content.label}</span>
            <h2 id="vkAdsAnalyticsTitle">{content.title}</h2>
            <p>{content.text}</p>
          </div>
          <div className={grid.grid2}>
            {content.cards.map((card) => (
              <article className={styles.darkCard} key={card.title}>
                <span className={styles.analyticsIcon} aria-hidden="true">{card.icon}</span>
                <h3>{card.title}</h3><p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
        <p className={styles.gradientStatement}>{content.accent}</p>
      </Container>
    </section>
  );
}