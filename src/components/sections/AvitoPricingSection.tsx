import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoPricingSection.module.css";

interface Props { title: string; text: string; items: readonly (readonly [string, string, string])[]; }

export default function AvitoPricingSection({ title, text, items }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={grid.grid3}>
          {items.map(([itemTitle, itemText, price], index) => (
            <article className={`${styles.card} ${index === 1 ? styles.hot : ""}`} key={itemTitle}>
              <h3>{itemTitle}</h3>
              <p>{itemText}</p>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
