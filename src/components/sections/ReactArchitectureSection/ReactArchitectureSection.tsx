import Image from 'next/image';
import styles from './ReactArchitectureSection.module.css';

type Props = { content: { label: string; title: string; text: string[]; image: string; points: string[] } };
export default function ReactArchitectureSection({ content }: Props) {
  return <section className={styles.section}><div className={styles.container}><div className={styles.grid}><div><span className={styles.label}>{content.label}</span><h2>{content.title}</h2>{content.text.map((p)=><p className={styles.lead} key={p}>{p}</p>)}<div className={styles.points}>{content.points.map((point)=><p key={point}>{point}</p>)}</div></div><div className={styles.visual}><Image src={content.image} alt="" width={1200} height={1500}/></div></div></div></section>;
}
