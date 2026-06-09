import { Container } from '@/components/ui/Container/Container';
import type { smmService } from '@/content/services/smm';
import styles from './SmmProcessSection.module.css';

type Props = { process: typeof smmService.process };

export function SmmProcessSection({ process }: Props) {
  return (
    <section id="smm-process" className={styles.section} aria-labelledby="smm-process-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.stickyText}>
            <h2 id="smm-process-title">{process.title}</h2>
            <p>{process.description}</p>
          </div>
          <div className={styles.steps}>
            {process.steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
