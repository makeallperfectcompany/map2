import { Container } from "@/components/ui/Container/Container";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";
import styles from "./WbExternalAdsProcess.module.css";

export default function WbExternalAdsProcess() {
  const { process } = wbExternalAdsContent;
  return <section className={styles.section}><Container><div className={styles.header}><h2>{process.title}</h2></div><div className={styles.grid}>{process.cards.map((card,index)=>(<article className={styles.card} key={card.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{card.title}</h3><p>{card.text}</p></article>))}</div></Container></section>;
}
