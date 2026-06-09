import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluencePricingSection.module.css";
import type { Card } from "@/content/services/influence-marketing";

type PricingContent = {
  title: string;
  price: string;
  text: string;
  cta: string;
  cards: (Card & { whoFor?: string })[];
};

export default function InfluencePricingSection({ content }: { content: PricingContent }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={grid.grid2}>
          <div className={styles.pricePanel}>
            <h2>{content.title}</h2>
            <strong>{content.price}</strong>
            <p>{content.text}</p>
            <a href="#contact">{content.cta}</a>
          </div>
          <div className={styles.priceCards}>
            {content.cards.map((card) => (
              <article className={styles.card} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.whoFor && <p className={styles.whoFor}>{card.whoFor}</p>}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
