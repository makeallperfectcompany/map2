import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { sermContent } from "@/content/services/serm";
import styles from "./SermHeroSection.module.css";

export default function SermHeroSection() {
  const { hero } = sermContent;
  return (
    <section className={styles.heroSection}>
      <Image className={`${styles.background} ${styles.desktopBackground}`} src={hero.desktopImage} alt="" fill priority sizes="100vw" />
      <Image className={`${styles.background} ${styles.mobileBackground}`} src={hero.mobileImage} alt="" fill priority sizes="100vw" />
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1>{hero.title}</h1>
          <p className={styles.lead}>{hero.description}</p>
          <p className={styles.priceLine}>Стоимость работ — <strong>{hero.price}</strong>. {hero.priceNote}</p>
          <div className={styles.heroActions}>
            <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
              <span className={styles.label}>{hero.primaryCta}</span><Arrow light />
            </OpenConsultationButton>
            <Link href={hero.secondaryHref} className={`${styles.btn} ${styles.btnGhost}`}>
              <span className={styles.label}>{hero.secondaryCta}</span><Arrow />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
function Arrow({ light = false }: { light?: boolean }) { const stroke = light ? "white" : "currentColor"; return <span className={styles.arrWrap}><svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>; }
