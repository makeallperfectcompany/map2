import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

type Props = { content: VkAdsContent["transparency"] };

export default function VkAdsTransparency({ content }: Props) {
  return (
    <section className={styles.gradientSection} aria-labelledby="vk-transparency-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vk-transparency-title">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid2}>
          {content.cards.map((card, index) => (
            <article key={card.title} className={index === 0 ? styles.accentCard : styles.lightCard}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}