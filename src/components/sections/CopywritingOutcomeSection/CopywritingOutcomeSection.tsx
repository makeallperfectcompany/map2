import { Container } from "@/components/ui/Container/Container";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";
import grid from "@/styles/grid.module.css";
import styles from "./CopywritingOutcomeSection.module.css";

export default function CopywritingOutcomeSection() {
  const { outcome } = copywritingServiceContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{outcome.title}</h2>
        </div>
        <div className={grid.grid3}>
          {outcome.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
