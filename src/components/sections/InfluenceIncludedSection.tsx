import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluenceIncludedSection.module.css";
import type { Card } from "@/content/services/influence-marketing";

type IncludedContent = {
  title: string;
  text: string;
  summary?: string;
  image: string;
  cards: Card[];
};

export default function InfluenceIncludedSection({ content }: { content: IncludedContent }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={grid.grid2}>
          <div className={styles.visualCard}>
            <Image src={content.image} alt="Абстрактная визуализация этапов инфлюенс-маркетинга" width={1200} height={1500} sizes="(min-width: 768px) 48vw, 100vw" />
          </div>
          <div className={styles.contentCol}>
            <div className={styles.accentCard}>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
            </div>
            {content.summary && <p className={styles.summary}>{content.summary}</p>}
            <div className={grid.grid2}>
              {content.cards.map((card) => (
                <article className={styles.card} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
