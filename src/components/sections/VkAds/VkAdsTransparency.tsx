import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsTransparency({ content }: { content: VkAdsContent["transparency"] }) {
  return (
    <section className={styles.gradientSection} aria-labelledby="vkAdsTransparencyTitle">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vkAdsTransparencyTitle">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid2}>
          {content.cards.map((card, index) => (
            <article className={index === 0 ? styles.accentCard : styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}