import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluenceFormatsSection.module.css";
import type { Card } from "@/content/services/influence-marketing";

type FormatsContent = {
  title: string;
  text: string;
  cards: Card[];
};

export default function InfluenceFormatsSection({ content }: { content: FormatsContent }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={styles.formatOrbit} aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
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
