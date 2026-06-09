import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import type { smmService } from '@/content/services/smm';
import styles from './SmmImpactSection.module.css';

type Props = { impact: typeof smmService.impact };

export function SmmImpactSection({ impact }: Props) {
  return (
    <section className={styles.section} aria-labelledby="smm-impact-title">
      <Container>
        <div className={styles.header}>
          <h2 id="smm-impact-title">{impact.title}</h2>
          <p>{impact.description}</p>
        </div>
        <div className={styles.visualCard}>
          <Image src={impact.image} alt="" width={1600} height={1000} sizes="100vw" />
        </div>
        <div className={styles.cards}>
          {impact.cards.map((card) => (
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
