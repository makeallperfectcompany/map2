import { Container } from "@/components/ui/Container/Container";
import styles from "./ImageVideoScopeSection.module.css";

type Card = { title: string; text: string };
type ScopeData = { title: string; description: string; cta: string; cards: Card[] };

export default function ImageVideoScopeSection({ data }: { data: ScopeData }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <a href="#final-cta">{data.cta}</a>
          </div>
          <div className={styles.stackCard}>
            {data.cards.map((card) => (
              <article key={card.title}>
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
