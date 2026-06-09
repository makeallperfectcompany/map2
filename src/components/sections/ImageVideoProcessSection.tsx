import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ImageVideoProcessSection.module.css";

type Step = { code: string; title: string; text: string };
type ProcessData = { title: string; description: string; steps: Step[] };

export default function ImageVideoProcessSection({ data }: { data: ProcessData }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={grid.grid3}>
          {data.steps.map((step) => (
            <article className={styles.card} key={step.code}>
              <span>{step.code}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
