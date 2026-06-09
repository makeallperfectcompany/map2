import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoScopeSection.module.css";

interface Props { title: string; items: readonly (readonly [string, string])[]; }

export default function AvitoScopeSection({ title, items }: Props) {
  return (
    <section className={styles.section} id="avito-scope">
      <Container>
        <div className={styles.header}><h2>{title}</h2></div>
        <div className={grid.grid3}>
          {items.map(([itemTitle, itemText], index) => (
            <article className={styles.card} key={itemTitle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{itemTitle}</h3>
              <p>{itemText}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
