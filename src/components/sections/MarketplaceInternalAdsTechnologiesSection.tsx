import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; items: Array<{ code: string; title: string; text: string }> } };
export default function MarketplaceInternalAdsTechnologiesSection({ content }: Props) {
  return <section className={styles.techSection}><Container><div className={styles.darkHeader}><h2>{content.title}</h2><p>{content.text}</p></div><div className={`${grid.grid3} ${styles.techGrid}`}>{content.items.map((item) => <article className={styles.techCard} key={item.code}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>;
}
