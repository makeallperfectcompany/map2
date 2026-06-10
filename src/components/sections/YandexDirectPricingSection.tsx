import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoPricingSection.module.css";

interface PricingCard {
  title: string;
  text: string;
  price: string;
  included: string[];
}

interface Props {
  title: string;
  text: string;
  cards: PricingCard[];
}

export default function YandexDirectPricingSection({ title, text, cards }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={grid.grid3}>
          {cards.map((card, index) => (
            <article className={`${styles.card} ${index === 1 ? styles.hot : ""}`} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <strong>{card.price}</strong>
              <ul>
                {card.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
