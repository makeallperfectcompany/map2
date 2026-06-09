import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import type { smmService } from '@/content/services/smm';
import styles from './SmmScopeSection.module.css';

type Props = { scope: typeof smmService.scope };

export function SmmScopeSection({ scope }: Props) {
  return (
    <section className={styles.section} aria-labelledby="smm-scope-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualWrap}>
            <Image className={styles.visual} src={scope.image} alt="" width={1200} height={1500} sizes="(max-width: 767px) 100vw, 38vw" />
          </div>
          <div className={styles.content}>
            <h2 id="smm-scope-title" className={styles.title}>{scope.title}</h2>
            <p className={styles.description}>{scope.description}</p>
            <div className={styles.cards}>
              {scope.cards.map((card) => (
                <article className={styles.card} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
