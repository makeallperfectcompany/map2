import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsPricing.module.css";

interface Props { content: { title: string; description: string; price: string; cta: string; items: string[][] } }
export default function VkAdsPricing({ content }: Props) {
  return (
    <section className={styles.section} id="pricing">
      <Container>
        <div className={styles.top}>
          <div>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </div>
          <aside className={styles.priceCard}>
            <span>Стоимость услуги</span>
            <strong>{content.price}</strong>
            <a href="#contact">{content.cta}</a>
          </aside>
        </div>
        <div className={grid.grid3}>
          {content.items.map(([title, text]) => (
            <article className={styles.card} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
