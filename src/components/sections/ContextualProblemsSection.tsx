import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ContextualServiceSections.module.css";

export default function ContextualProblemsSection({ data }: { data: { title: string; text: string; image: string; cards: readonly (readonly [string, string])[] } }) {
  return <section className={`${styles.section} ${styles.lightSection}`}><Container><div className={styles.split}><div><h2>{data.title}</h2><p className={styles.lead}>{data.text}</p></div><Image className={styles.visual} src={data.image} alt="" width={1200} height={900} /></div><div className={`${grid.grid2} ${styles.cardGrid}`}>{data.cards.map(([title,text])=><article className={styles.card} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}
