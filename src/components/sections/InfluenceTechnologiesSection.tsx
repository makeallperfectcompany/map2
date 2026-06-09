import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluenceTechnologiesSection.module.css";
import type { Card } from "@/content/services/influence-marketing";

type TechnologiesContent = {
  title: string;
  text: string;
  stats: Card[];
  cards: Card[];
};

export default function InfluenceTechnologiesSection({ content }: { content: TechnologiesContent }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid3}>
          {content.stats.map((stat) => (
            <div className={styles.stat} key={stat.title}>
              <b>{stat.title}</b>
              <span>{stat.text}</span>
            </div>
          ))}
        </div>
        <div className={grid.grid3}>
          {content.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
