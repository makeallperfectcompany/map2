import { Container } from '@/components/ui/Container/Container';
import grid from '@/styles/grid.module.css';
import styles from './TelegramAdsServiceScope.module.css';

type Card = { title: string; text: string };

type Props = {
  content: {
    title: string;
    text: string;
    items: readonly Card[];
  };
};

export function TelegramAdsServiceScope({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid3}>
          {content.items.map((item, index) => (
            <article className={styles.card} key={item.title}>
              <span className={styles.code}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
