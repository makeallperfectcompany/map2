import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./InfluenceSelectionSection.module.css";

type SelectionContent = {
  title: string;
  text: string;
  image: string;
  criteria: string[];
};

export default function InfluenceSelectionSection({ content }: { content: SelectionContent }) {
  return (
    <section className={styles.section} id="selection">
      <Container>
        <div className={grid.grid2}>
          <div className={styles.textCol}>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
            <div className={styles.criteria}>
              {content.criteria.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className={styles.visualCard}>
            <Image src={content.image} alt="Абстрактная визуализация подбора и проверки блогеров" width={1200} height={1500} sizes="(min-width: 768px) 48vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
