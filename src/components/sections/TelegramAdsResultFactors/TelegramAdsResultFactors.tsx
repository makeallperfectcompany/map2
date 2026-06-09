import { Container } from '@/components/ui/Container/Container';
import grid from '@/styles/grid.module.css';
import styles from './TelegramAdsResultFactors.module.css';

type Card = { title: string; text: string };

type Props = {
  content: {
    title: string;
    text: string;
    items: readonly Card[];
  };
};

export function TelegramAdsResultFactors({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.accent}>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
          </div>
          <div className={grid.grid3}>
            {content.items.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
