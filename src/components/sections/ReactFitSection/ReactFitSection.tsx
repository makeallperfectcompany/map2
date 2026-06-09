import Image from 'next/image';
import styles from './ReactFitSection.module.css';

type Props = { content: { label: string; title: string; text: string; image: string; cards: Array<{ title: string; text: string }> } };
export default function ReactFitSection({ content }: Props) {
  return <section className={styles.section}><div className={styles.container}><div className={styles.grid}><div className={styles.visual}><Image src={content.image} alt="" width={1200} height={1500}/></div><div><span className={styles.label}>{content.label}</span><h2>{content.title}</h2><p className={styles.lead}>{content.text}</p><div className={styles.cardGrid}>{content.cards.map((card)=><article key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></div></div></div></section>;
}
