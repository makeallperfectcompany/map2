import { Container } from "@/components/ui/Container/Container";
import styles from "./WbExternalAdsDarkCards.module.css";

interface Card { title: string; text: string; code?: string; }
interface Props { title: string; description: string; cards: Card[]; }

export default function WbExternalAdsDarkCards({ title, description, cards }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}><h2>{title}</h2><p>{description}</p></div>
        <div className={styles.grid}>{cards.map((card, index)=>(<article className={styles.card} key={card.title}><b>{card.code || String(index+1).padStart(2,"0")}</b><h3>{card.title}</h3><p>{card.text}</p></article>))}</div>
      </Container>
    </section>
  );
}
