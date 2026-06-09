import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { seoYandexService } from "@/content/services/seo-yandex";
import styles from "./SeoYandexHeroSection.module.css";

export default function SeoYandexHeroSection() {
  const { hero } = seoYandexService;
  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src="/images/services/seo-yandex/hero-bg.webp" alt="SEO-продвижение сайта в Яндексе — Make All Perfect" fill priority sizes="100vw" />
      <Container className={styles.heroInner}>
        <div className={styles.copyOnly}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.heroActions}>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#final-cta">{hero.primaryCta}</a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#pricing">{hero.secondaryCta}</a>
          </div>
          <p className={styles.trustLine}>{hero.trustLine}</p>
        </div>

      </Container>
    </section>
  );
}
