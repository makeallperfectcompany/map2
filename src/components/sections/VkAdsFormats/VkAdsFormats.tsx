import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsFormats.module.css";

interface Props { content: { title: string; description: string; items: string[][] } }
export default function VkAdsFormats({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className={styles.visualCard}>
          <Image src="/images/services/vk-ads/vk-ads-formats-visual.webp" alt="" width={1600} height={1000} className={styles.visual} sizes="100vw" />
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
