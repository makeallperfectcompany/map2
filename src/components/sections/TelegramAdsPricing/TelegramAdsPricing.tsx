import { Container } from '@/components/ui/Container/Container';
import grid from '@/styles/grid.module.css';
import styles from './TelegramAdsPricing.module.css';

type PricingCard = { title: string; text: string; price: string; featured?: boolean };

type Props = {
  content: {
    title: string;
    text: string;
    items: readonly PricingCard[];
  };
};

export function TelegramAdsPricing({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2>{content.title}</h2>
          <p>{content.text}</p>
        </div>
        <div className={grid.grid3}>
          {content.items.map((item) => (
            <article className={item.featured ? `${styles.card} ${styles.featured}` : styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
