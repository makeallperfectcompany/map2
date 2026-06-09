import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsTechnologies.module.css";
interface Props { content: { title: string; description: string; stats: string[][]; items: string[][] } }
export default function VkAdsTechnologies({ content }: Props) {
  return <section className={styles.section}><Container><div className={styles.head}><div><h2 className={styles.title}>{content.title}</h2><p>{content.description}</p></div><div className={styles.stats}>{content.stats.map(([v,l])=><div key={v}><strong>{v}</strong><span>{l}</span></div>)}</div></div><div className={styles.visual}><Image src="/images/services/vk-ads/vk-ads-tech-visual.webp" alt="" width={1600} height={1000}/></div><div className={grid.grid3}>{content.items.map(([title,text])=><article className={styles.card} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}
