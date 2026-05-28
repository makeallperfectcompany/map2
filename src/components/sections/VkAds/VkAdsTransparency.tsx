import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAdsNew";
import styles from "./VkAds.module.css";

export default function VkAdsTransparency({ content }: { content: VkAdsContent["transparency"] }) {
  return (
    <section className={styles.lightSection} aria-labelledby="vkAdsTransparencyTitle">
      <Container>
        <header className={styles.sectionHead}>
          <div><span className={styles.pill}>{content.label}</span><h2 id="vkAdsTransparencyTitle">{content.title}</h2></div>
          <p>{content.text}</p>
        </header>
        <div className={grid.grid2}>
          {content.cards.map((card, index) => (
            <article className={index === 0 ? styles.blueCardCompact : styles.whiteCard} key={card.title}>
              <h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}