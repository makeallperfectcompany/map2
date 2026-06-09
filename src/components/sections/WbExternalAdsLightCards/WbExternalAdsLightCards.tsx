import { Container } from "@/components/ui/Container/Container";
import styles from "./WbExternalAdsLightCards.module.css";

interface Card { title: string; text: string; }
interface Props { title: string; description?: string; cards: Card[]; }

export default function WbExternalAdsLightCards({ title, description, cards }: Props) {
  return <section className={styles.section}><Container><div className={styles.header}><h2>{title}</h2>{description ? <p>{description}</p> : null}</div><div className={styles.grid}>{cards.map((card)=>(<article className={styles.card} key={card.title}><h3>{card.title}</h3><p>{card.text}</p></article>))}</div></Container></section>;
}
