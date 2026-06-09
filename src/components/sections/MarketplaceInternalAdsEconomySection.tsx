import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; image: string; items: Array<{ title: string; text: string }> } };
export default function MarketplaceInternalAdsEconomySection({ content }: Props) {
  return <section className={styles.whiteSection}><Container><div className={styles.asymmetric}><Image className={styles.verticalVisual} src={content.image} alt="" width={1200} height={1500} /><div><div className={`${styles.card} ${styles.deepCard}`}><h2>{content.title}</h2><p>{content.text}</p></div><div className={`${grid.grid2} ${styles.tightCards}`}>{content.items.map((item) => <article className={styles.smallCard} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></div></Container></section>;
}
