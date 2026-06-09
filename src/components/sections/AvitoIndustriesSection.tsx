import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoIndustriesSection.module.css";

interface Props { items: readonly (readonly [string, string])[]; }

export default function AvitoIndustriesSection({ items }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.label}>ОТРАСЛИ</span>
          <h2>Продвигаем на Авито и Avito ниши, где важны спрос, доверие и быстрый контакт</h2>
        </div>
        <div className={grid.grid3}>
          {items.map(([title, text], index) => (
            <article className={styles.card} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
