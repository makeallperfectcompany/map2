import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ImageVideoFormatsSection.module.css";

type Card = { title: string; text: string };
type FormatsData = { title: string; description: string; image: string; cards: Card[] };

export default function ImageVideoFormatsSection({ data }: { data: FormatsData }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className={styles.visual}>
            <Image src={data.image} alt="" fill sizes="(max-width: 767px) 100vw, 38vw" />
          </div>
        </div>
        <div className={grid.grid3}>
          {data.cards.map((card, index) => (
            <article className={styles.card} key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
