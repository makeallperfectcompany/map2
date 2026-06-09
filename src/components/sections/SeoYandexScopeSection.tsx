import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { seoYandexService } from "@/content/services/seo-yandex";
import styles from "./SeoYandexScopeSection.module.css";

export default function SeoYandexScopeSection() {
  const { scope } = seoYandexService;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <aside className={styles.panel}>
            <h2>{scope.title}</h2>
            <p>{scope.description}</p>
            <Image src="/images/services/seo-yandex/seo-system-visual.webp" alt="Система SEO-продвижения в Яндексе — Make All Perfect" width={1400} height={1000} />
          </aside>
          <div className={styles.list}>
            {scope.items.map((item, index) => (
              <article className={styles.item} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
