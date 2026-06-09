import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { WordPressContent } from "@/content/services/wordpress";
import styles from "./WordPressFormatsSection.module.css";
type Props = { content: WordPressContent["formats"] };
export default function WordPressFormatsSection({ content }: Props) { return <section className={styles.section}><Container><header className={styles.header}><span className={styles.label}>Форматы сайтов</span><h2>{content.title}</h2><p>{content.description}</p></header><div className={grid.grid4}>{content.items.map((item,index)=><article className={styles.card} key={item.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>; }
