import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./VkAdsWorkflow.module.css";

interface Props { content: { title: string; description: string; items: string[][] } }
export default function VkAdsWorkflow({ content }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.visualWrap}>
            <Image src="/images/services/vk-ads/vk-ads-system-visual.webp" alt="" width={1200} height={1400} className={styles.visual} sizes="(min-width: 1280px) 42vw, 100vw" />
          </div>
          <div>
            <div className={styles.head}>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
            </div>
            <div className={grid.grid2}>
              {content.items.map(([title, text]) => (
                <article className={styles.card} key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
