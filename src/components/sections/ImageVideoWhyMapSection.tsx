import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./ImageVideoWhyMapSection.module.css";

type Card = { title: string; text: string };
type WhyData = { title: string; description: string; image: string; cards: Card[] };

export default function ImageVideoWhyMapSection({ data }: { data: WhyData }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.copy}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className={styles.visual}>
            <Image src={data.image} alt="" fill sizes="(max-width: 767px) 100vw, 45vw" />
          </div>
        </div>
        <div className={grid.grid4}>
          {data.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
