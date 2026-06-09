import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; image: string; items: Array<{ title: string; text: string }> } };
export default function MarketplaceInternalAdsPlatformsSection({ content }: Props) {
  return <section className={styles.lightSection}><Container><div className={styles.splitTop}><div className={styles.header}><h2>{content.title}</h2><p>{content.text}</p></div><Image className={styles.visual} src={content.image} alt="" width={1200} height={900} /></div><div className={`${grid.grid4} ${styles.cards}`}>{content.items.map((item, index) => <article className={`${styles.card} ${index === 0 ? styles.blueCard : ""}`} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>;
}
