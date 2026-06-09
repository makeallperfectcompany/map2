import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ContextualServiceSections.module.css";
export default function ContextualScopeSection({ data }: { data: { title: string; cards: readonly (readonly [string, string, string])[] } }) { return <section className={styles.section}><Container><h2>{data.title}</h2><div className={`${grid.grid3} ${styles.cardGrid}`}>{data.cards.map(([code,title,text])=><article className={styles.card} key={title}><span className={styles.code}>{code}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>; }
