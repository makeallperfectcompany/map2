import { Container } from "@/components/ui/Container/Container";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";
import grid from "@/styles/grid.module.css";
import styles from "./CopywritingProblemSection.module.css";

export default function CopywritingProblemSection() {
  const { problem } = copywritingServiceContent;

  return (
    <section className={`${styles.section} ${styles.light}`}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{problem.title}</h2>
          <p>{problem.text}</p>
        </div>
        <div className={grid.grid4}>
          {problem.cards.map((card) => (
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
