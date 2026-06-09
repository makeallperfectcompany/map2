import { Container } from '@/components/ui/Container/Container';
import type { smmService } from '@/content/services/smm';
import styles from './SmmFormatsSection.module.css';

type Props = { formats: typeof smmService.formats };

export function SmmFormatsSection({ formats }: Props) {
  return (
    <section className={styles.section} aria-labelledby="smm-formats-title">
      <Container>
        <div className={styles.header}>
          <h2 id="smm-formats-title">{formats.title}</h2>
          <p>{formats.description}</p>
        </div>
        <div className={styles.cards}>
          {formats.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <strong>{card.price}</strong>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
