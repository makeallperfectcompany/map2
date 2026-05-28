import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { VkAdsContent } from "@/content/services/vkAdsNew";
import styles from "./VkAds.module.css";

export default function VkAdsHowItWorks({ content }: { content: VkAdsContent["howItWorks"] }) {
  return (
    <section className={styles.gradientSection} aria-labelledby="vkAdsHowTitle">
      <Container>
        <header className={styles.sectionHead}>
          <div>
            <span className={styles.pill}>{content.label}</span>
            <h2 id="vkAdsHowTitle">{content.title}</h2>
          </div>
          <p>{content.text}</p>
        </header>
        <div className={grid.gridAsymmetric}>
          <figure className={styles.visualFrame} aria-hidden="true">
            <Image className={styles.visualImage} src={content.image} alt="" fill sizes="(min-width:1280px) 42vw, 100vw" />
          </figure>
          <div className={grid.grid2}>
            {content.cards.map((card, index) => (
              <article className={styles.whiteCard} key={card.title}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
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