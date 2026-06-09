import { Container } from "@/components/ui/Container/Container";
import styles from "./ContextualAdvertisingHeroSection.module.css";

type HeroData = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  background: string;
  accent: string;
  trustItems?: readonly (readonly [string, string])[];
};

export default function ContextualAdvertisingHeroSection({ data }: { data: HeroData }) {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroInner}>
        <div className={styles.left}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#contact">{data.primaryCta}</a>
            <a className={styles.secondaryButton} href="#audit">{data.secondaryCta}</a>
          </div>
          {data.trustItems && (
            <div className={styles.trustBar}>
              {data.trustItems.map(([label, value]) => (
                <div className={styles.trustItem} key={label}>
                  <span className={styles.trustLabel}>{label}</span>
                  <span className={styles.trustValue}>{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.right}>
          <img
            className={styles.heroLogo}
            src="/assets/home/hero/logo-hero.png"
            alt="Make All Perfect"
            title="Make All Perfect"
          />
        </div>
      </Container>
    </section>
  );
}
