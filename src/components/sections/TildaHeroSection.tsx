import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaHeroSection.module.css";

export default function TildaHeroSection() {
  return (
    <section className={styles.heroSection}>
      <Image className={styles.desktopBackground} src="/images/services/tilda/hero-tilda-desktop.webp" alt="Разработка сайта на Tilda под ключ — Make All Perfect" fill priority sizes="100vw" />
      <Image className={styles.mobileBackground} src="/images/services/tilda/hero-tilda-mobile.webp" alt="Разработка сайта на Tilda под ключ — Make All Perfect" fill priority sizes="100vw" />
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1>{tildaService.hero.title}</h1>
          <p>{tildaService.hero.description}</p>
          <div className={styles.heroActions}>
            <Link className={`${styles.btn} ${styles.btnAccent}`} href="#lead-form"><span>{tildaService.hero.primaryCta}</span><span aria-hidden="true">↗</span></Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="#scope"><span>{tildaService.hero.secondaryCta}</span><span aria-hidden="true">↓</span></Link>
          </div>
          <p className={styles.trustLine}>{tildaService.hero.trustLine}</p>
        </div>
      </Container>
    </section>
  );
}
