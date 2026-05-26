import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

type Props = { content: VkAdsContent["howItWorks"] };

export default function VkAdsHowItWorks({ content }: Props) {
  return (
    <section className={styles.gradientSection} aria-labelledby="vk-how-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vk-how-title">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.gridAsymmetric}>
          <div className={styles.visualFrame}>
            <Image src={content.image} alt={content.imageAlt} fill sizes="(min-width: 1280px) 38vw, 100vw" className={styles.visualImage} />
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
        </div>
        <p className={styles.seoText}>{content.seoText}</p>
      </Container>
    </section>
  );
}