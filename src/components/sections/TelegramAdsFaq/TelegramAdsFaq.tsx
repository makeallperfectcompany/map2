import { Container } from '@/components/ui/Container/Container';
import styles from './TelegramAdsFaq.module.css';

type FaqItem = { question: string; answer: string };

type Props = {
  items: readonly FaqItem[];
};

export function TelegramAdsFaq({ items }: Props) {
  return (
    <section className={styles.section} id="faq">
      <Container>
        <div className={styles.head}>
          <h2>Частые вопросы о Telegram Ads</h2>
        </div>
        <div className={styles.list}>
          {items.map((item) => (
            <details className={styles.item} key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
