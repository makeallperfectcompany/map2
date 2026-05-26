import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsHowItWorks({ content }: { content: VkAdsContent["howItWorks"] }) {
  return (
    <section className={styles.gradientSection} aria-labelledby="vkAdsHowTitle">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="vkAdsHowTitle">{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.gridAsymmetric}>
          <div className={styles.visualFrame} aria-hidden="true">
            <Image className={styles.visualImage} src={content.image} alt="" fill sizes="(min-width:1280px) 38vw, 100vw" />
          </div>
          <div className={grid.grid2}>
            {content.cards.map((card, index) => (
              <article key={card.title} className={styles.card}>
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