import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; image: string; items: Array<{ title: string; text: string }> } };
export default function MarketplaceInternalAdsProcessSection({ content }: Props) {
  return <section className={styles.lightSection}><Container><div className={styles.processLayout}><div className={styles.header}><h2>{content.title}</h2><p>{content.text}</p><Image className={styles.wideVisual} src={content.image} alt="" width={1400} height={900} /></div><ol className={styles.timeline}>{content.items.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></div></Container></section>;
}
