import { Container } from "@/components/ui/Container/Container";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";
import grid from "@/styles/grid.module.css";
import styles from "./CopywritingFormatsSection.module.css";

export default function CopywritingFormatsSection() {
  const { formats } = copywritingServiceContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{formats.title}</h2>
        </div>
        <div className={grid.grid3}>
          {formats.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <span className={styles.code}>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
