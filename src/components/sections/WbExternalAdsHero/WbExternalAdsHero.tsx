import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";
import styles from "./WbExternalAdsHero.module.css";

export default function WbExternalAdsHero() {
  const { hero } = wbExternalAdsContent;

  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={hero.image} alt="Внешняя реклама Wildberries под ключ — Make All Perfect" fill priority sizes="100vw" />
      <Container className={styles.heroContainer}>
        <div className={styles.copy}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="#lead-form">{hero.primaryCta}</Link>
            <Link className={styles.secondaryCta} href="#lead-form">{hero.secondaryCta}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
