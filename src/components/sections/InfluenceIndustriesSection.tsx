import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluenceIndustriesSection.module.css";
import type { Card } from "@/content/services/influence-marketing";

type IndustriesContent = {
  title: string;
  text: string;
  cards: Card[];
};

export default function InfluenceIndustriesSection({ content }: { content: IndustriesContent }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid3}>
          {content.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <span aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
