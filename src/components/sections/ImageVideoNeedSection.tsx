import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ImageVideoNeedSection.module.css";

type Card = { title: string; text: string };
type NeedData = { title: string; description: string; image: string; cards: Card[] };

export default function ImageVideoNeedSection({ data }: { data: NeedData }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualCard}>
            <Image src={data.image} alt="" fill sizes="(max-width: 767px) 100vw, 42vw" />
          </div>
          <div className={styles.content}>
            <h2>{data.title}</h2>
            <p className={styles.lead}>{data.description}</p>
            <div className={grid.grid2}>
              {data.cards.map((card) => (
                <article className={styles.card} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
