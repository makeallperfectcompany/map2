import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; items: Array<{ title: string; text: string }> } };
export default function MarketplaceInternalAdsIndustriesSection({ content }: Props) {
  return <section className={styles.industriesSection}><Container><div className={styles.header}><h2>{content.title}</h2><p>{content.text}</p></div><div className={`${grid.grid3} ${styles.cards}`}>{content.items.map((item) => <article className={styles.industryCard} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>;
}
