import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluenceProcessSection.module.css";
import type { Card } from "@/content/services/influence-marketing";

type ProcessContent = {
  title: string;
  text: string;
  steps: Card[];
};

export default function InfluenceProcessSection({ content }: { content: ProcessContent }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.sectionHead}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid3}>
          {content.steps.map((step, index) => (
            <article className={styles.step} key={step.title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
