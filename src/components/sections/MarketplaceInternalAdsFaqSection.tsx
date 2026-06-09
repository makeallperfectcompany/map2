import { Container } from "@/components/ui/Container/Container";
import styles from "./MarketplaceInternalAdsSharedSections.module.css";

type Props = { items: Array<{ question: string; answer: string }> };
export default function MarketplaceInternalAdsFaqSection({ items }: Props) {
  return <section className={styles.whiteSection}><Container><div className={styles.faqLayout}><div className={styles.header}><h2>Что важно знать о внутренней рекламе на маркетплейсах</h2><p>Ответы на вопросы, которые чаще всего появляются перед запуском или пересборкой рекламы внутри площадок.</p></div><div className={styles.faqList}>{items.map((item) => <details key={item.question} className={styles.faqItem}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></Container></section>;
}
