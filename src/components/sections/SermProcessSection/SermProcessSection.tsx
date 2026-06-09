import { Container } from '@/components/ui/Container/Container';
import { sermContent } from '@/content/services/serm';
import styles from './SermProcessSection.module.css';

export function SermProcessSection() {
  const { process } = sermContent;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.sticky}>
            <h2>{process.title}</h2>
            <p>{process.lead}</p>
          </div>
          <div className={styles.timeline}>
            {process.steps.map((step, i) => (
              <article key={step.title}>
                <b>{String(i + 1).padStart(2, '0')}</b>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
