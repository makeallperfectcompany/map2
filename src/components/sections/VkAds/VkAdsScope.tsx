import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

type Props = { content: VkAdsContent["scope"] };

export default function VkAdsScope({ content }: Props) {
  return (
    <section className={styles.lightSection} aria-labelledby="vk-scope-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vk-scope-title">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid2}>
          <article className={styles.accentCard}>
            <span className={styles.accentCode}>{content.featured.code}</span>
            <h3>{content.featured.title}</h3>
            <p>{content.featured.text}</p>
          </article>
          <div className={grid.grid2}>
            {content.cards.map((card) => (
              <article key={card.title} className={styles.lightCardCompact}>
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