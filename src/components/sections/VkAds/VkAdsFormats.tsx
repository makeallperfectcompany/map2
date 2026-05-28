import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAdsNew";
import styles from "./VkAds.module.css";

export default function VkAdsFormats({ content }: { content: VkAdsContent["formats"] }) {
  return (
    <section className={styles.darkSection} aria-labelledby="vkAdsFormatsTitle">
      <Container>
        <header className={styles.darkHead}>
          <div><span className={styles.darkPill}>{content.label}</span><h2 id="vkAdsFormatsTitle">{content.title}</h2></div>
          <p>{content.text}</p>
        </header>
        <div className={grid.grid3}>
          {content.cards.map((card) => (
            <article className={card.featured ? styles.darkFeatured : styles.darkCard} key={card.code}>
              <span className={styles.code}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={styles.tags}>{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}