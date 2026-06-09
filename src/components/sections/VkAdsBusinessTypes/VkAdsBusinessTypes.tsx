import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsBusinessTypes.module.css";

interface Props { content: { title: string; description: string; items: string[][] } }
export default function VkAdsBusinessTypes({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className={grid.grid3}>
          {content.items.map(([title, text]) => (
            <article className={styles.card} key={title}>
              <div className={styles.icon} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
