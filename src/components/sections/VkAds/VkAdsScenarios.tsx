import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

type Props = { content: VkAdsContent["scenarios"] };

export default function VkAdsScenarios({ content }: Props) {
  return (
    <section className={styles.lightSection} aria-labelledby="vk-scenarios-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vk-scenarios-title">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid2}>
          {content.cards.map((card, index) => (
            <article key={card.title} className={styles.lightCard}>
              <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <Link href="#contact" className={styles.inlineLink}>{content.cta}<span>↗</span></Link>
      </Container>
    </section>
  );
}