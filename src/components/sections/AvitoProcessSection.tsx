import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./AvitoProcessSection.module.css";

interface Props { title: string; text: string; image: string; items: readonly (readonly [string, string])[]; }

export default function AvitoProcessSection({ title, text, image, items }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.grid2} ${styles.layout}`}>
          <div>
            <div className={styles.header}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className={styles.timeline}>
              {items.map(([itemTitle, itemText], index) => (
                <article key={itemTitle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{itemTitle}</h3>
                    <p>{itemText}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.visualCard}>
            <Image src={image} alt="Процесс настройки рекламы на Avito — Make All Perfect" width={1200} height={1500} sizes="(max-width: 768px) 100vw, 48vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
