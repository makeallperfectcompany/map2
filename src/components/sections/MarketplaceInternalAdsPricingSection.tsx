import { Container } from "@/components/ui/Container/Container";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { content: { title: string; text: string; note: string; price: string; cta: string } };
export default function MarketplaceInternalAdsPricingSection({ content }: Props) {
  return <section id="pricing" className={styles.whiteSection}><Container><div className={styles.pricingCard}><div><h2>{content.title}</h2><p>{content.text}</p><p className={styles.note}>{content.note}</p></div><div className={styles.priceBox}><span>Стоимость</span><strong>{content.price}</strong><a href="#contact">{content.cta}</a></div></div></Container></section>;
}
