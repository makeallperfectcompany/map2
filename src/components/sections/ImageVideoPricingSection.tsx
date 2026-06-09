import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ImageVideoPricingSection.module.css";

type Card = { title: string; text: string };
type PricingData = { title: string; description: string; note: string; cards: Card[] };

export default function ImageVideoPricingSection({ data }: { data: PricingData }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <strong>{data.note}</strong>
          </div>
          <div className={grid.grid3}>
            {data.cards.map((card) => (
              <article className={styles.card} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
