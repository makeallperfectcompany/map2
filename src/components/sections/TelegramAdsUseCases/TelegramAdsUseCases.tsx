import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import grid from '@/styles/grid.module.css';
import styles from './TelegramAdsUseCases.module.css';

type Card = { title: string; text: string };

type Props = {
  content: {
    title: string;
    text: string;
    image: string;
    items: readonly Card[];
  };
};

export function TelegramAdsUseCases({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualWrap}>
            <Image src={content.image} alt="" width={1200} height={1500} className={styles.visual} />
          </div>
          <div className={styles.content}>
            <h2>{content.title}</h2>
            <p className={styles.lead}>{content.text}</p>
            <div className={grid.grid2}>
              {content.items.map((item) => (
                <article className={styles.card} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
