import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAdsNew";
import styles from "./VkAds.module.css";

export default function VkAdsScope({ content }: { content: VkAdsContent["scope"] }) {
  return (
    <section className={styles.lightSection} aria-labelledby="vkAdsScopeTitle">
      <Container>
        <header className={styles.sectionHead}>
          <div><span className={styles.pill}>{content.label}</span><h2 id="vkAdsScopeTitle">{content.title}</h2></div>
          <p>{content.text}</p>
        </header>
        <div className={grid.grid2}>
          <article className={styles.blueCard}>
            <span className={styles.code}>{content.featured.code}</span>
            <h3>{content.featured.title}</h3>
            <p>{content.featured.text}</p>
            <div className={styles.blueTags}>{content.featured.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
          <div className={grid.grid2}>
            {content.cards.map((card) => <article className={styles.whiteCard} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}
          </div>
        </div>
      </Container>
    </section>
  );
}