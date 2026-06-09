import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsWhenWorks.module.css";

interface Props { content: { title: string; description: string; items: string[][] } }
export default function VkAdsWhenWorks({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className={grid.grid4}>
          {content.items.map(([title, text], index) => (
            <article className={styles.card} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
