import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { yandexKitContent } from "@/content/services/yandexKit";
import styles from "./YandexKitServiceSections.module.css";

export default function YandexKitHeroSection() {
  const { hero } = yandexKitContent;
  return (
    <section className={styles.heroSection}>
      <picture className={styles.heroBackground} aria-hidden="true">
        <source media="(width < 768px)" srcSet={hero.mobileImage} />
        <Image src={hero.desktopImage} alt="" fill priority sizes="100vw" className={styles.heroImage} />
      </picture>
      <Container className={styles.heroContainer}>
        <div className={styles.heroCopy}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          {'trustText' in hero && hero.trustText && <p className={styles.trustText}>{hero.trustText}</p>}
          <div className={styles.heroActions}>
            <Link className={`${styles.btn} ${styles.btnAccent}`} href="#lead-form"><span>{hero.primaryCta}</span><span>↗</span></Link>
            <Link className={`${styles.btn} ${styles.btnGhost}`} href="#price"><span>{hero.secondaryCta}</span><span>↗</span></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
