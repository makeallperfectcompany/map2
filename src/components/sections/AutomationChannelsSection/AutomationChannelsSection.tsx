import Image from 'next/image';
import grid from '@/styles/grid.module.css';
import styles from './AutomationChannelsSection.module.css';

export function AutomationChannelsSection({ data }: { data: { title: string; text: string; image: string; cards: Array<{ title: string; text: string }> } }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div><h2>{data.title}</h2><p>{data.text}</p></div>
          <div className={styles.visual}><Image src={data.image} alt="Абстрактная сеть каналов чат-ботов и автоматизаций" width={1600} height={1000} /></div>
        </div>
        <div className={grid.grid3}>
          {data.cards.map((card) => <article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
