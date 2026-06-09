import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './TelegramAdsProcess.module.css';

type Card = { title: string; text: string };

type Props = {
  content: {
    title: string;
    image: string;
    items: readonly Card[];
  };
};

export function TelegramAdsProcess({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2>{content.title}</h2>
        </div>
        <div className={styles.layout}>
          <div className={styles.steps}>
            {content.items.map((item, index) => (
              <article className={styles.step} key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Image src={content.image} alt="" width={1440} height={900} className={styles.visual} />
        </div>
      </Container>
    </section>
  );
}
