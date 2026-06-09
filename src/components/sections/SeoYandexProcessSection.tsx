import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { seoYandexService } from "@/content/services/seo-yandex";
import styles from "./SeoYandexProcessSection.module.css";

export default function SeoYandexProcessSection() {
  const { process } = seoYandexService;
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.stickyCopy}>
            <span className={styles.sectionLabel}>Процесс</span>
            <h2>{process.title}</h2>
            <p>{process.description}</p>
            <Image src="/images/services/seo-yandex/process-visual.webp" alt="Процесс SEO-продвижения в Яндексе — Make All Perfect" width={1400} height={900} />
          </div>
          <div className={styles.timeline}>
            {process.steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.stepText}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
