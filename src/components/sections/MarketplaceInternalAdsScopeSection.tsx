import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; items: Array<{ title: string; text: string; icon: string }> } };
export default function MarketplaceInternalAdsScopeSection({ content }: Props) {
  return <section className={styles.whiteSection}><Container><div className={styles.header}><h2>{content.title}</h2><p>{content.text}</p></div><div className={`${grid.grid3} ${styles.cards}`}>{content.items.map((item) => <article className={`${styles.card} ${styles.iconCard}`} key={item.title}><Image src={item.icon} alt="" width={80} height={80} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>;
}
