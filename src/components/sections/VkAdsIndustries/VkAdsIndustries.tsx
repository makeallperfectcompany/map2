import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsIndustries.module.css";
interface Props { content: { title: string; items: string[][] } }
export default function VkAdsIndustries({ content }: Props) {
  return <section className={styles.section}><Container><h2 className={styles.title}>{content.title}</h2><div className={grid.grid3}>{content.items.map(([title,text])=><article className={styles.card} key={title}><div className={styles.icon}/><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}
