import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoProblemsSection.module.css";

interface Props { title: string; text: string; items: readonly (readonly [string, string])[]; }

export default function AvitoProblemsSection({ title, text, items }: Props) {
  return (
    <section className={styles.section}>
      <Container className={styles.layout}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className={grid.grid2}>
          {items.map(([itemTitle, itemText], index) => (
            <article className={`${styles.card} ${index === 0 ? styles.accent : ""}`} key={itemTitle}>
              <h3>{itemTitle}</h3>
              <p>{itemText}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
