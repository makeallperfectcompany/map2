import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsScope({ content }: { content: VkAdsContent["scope"] }) {
  return (
    <section className={styles.lightSection} aria-labelledby="vkAdsScopeTitle">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vkAdsScopeTitle">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid2}>
          <article className={styles.accentCard}>
            <span className={styles.darkCode}>{content.featured.code}</span>
            <h3>{content.featured.title}</h3>
            <p>{content.featured.text}</p>
            <div className={styles.accentTags}>{content.featured.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
          <div className={grid.grid2}>
            {content.cards.map((card) => (
              <article className={styles.cardCompact} key={card.title}>
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