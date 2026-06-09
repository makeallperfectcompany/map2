import { Container } from "@/components/ui/Container/Container";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";
import styles from "./WbExternalAdsPricing.module.css";

export default function WbExternalAdsPricing() {
  const { pricing } = wbExternalAdsContent;
  return <section className={styles.section}><Container className={styles.layout}><div><h2>{pricing.title}</h2><strong>{pricing.price}</strong><p>{pricing.description}</p></div><div className={styles.cards}>{pricing.formats.map((item)=>(<article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>))}</div></Container></section>;
}
