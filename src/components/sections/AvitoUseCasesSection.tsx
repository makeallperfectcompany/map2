import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoUseCasesSection.module.css";

interface Props { title: string; text: string; image: string; items: readonly (readonly [string, string])[]; }

export default function AvitoUseCasesSection({ title, text, image, items }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.grid2} ${styles.layout}`}>
          <div className={styles.visualCard}>
            <Image src={image} alt="Avito особенно силён там, где клиент уже ищет решение" width={1200} height={1500} sizes="(max-width: 768px) 100vw, 48vw" />
          </div>
          <div>
            <div className={styles.header}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className={`${grid.grid2} ${styles.cards}`}>
              {items.map(([itemTitle, itemText]) => (
                <article className={styles.card} key={itemTitle}>
                  <h3>{itemTitle}</h3>
                  <p>{itemText}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
