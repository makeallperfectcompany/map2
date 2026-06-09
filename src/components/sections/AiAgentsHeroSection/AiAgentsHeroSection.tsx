import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { aiAgentsService } from "@/content/services/sozdanie-ii-agentov";
import styles from "./AiAgentsHeroSection.module.css";

export default function AiAgentsHeroSection() {
  const { hero, trustBar } = aiAgentsService;
  return (
    <section className={styles.heroSection}>
      <Image src={hero.background} alt="" fill priority sizes="100vw" className={styles.heroBg} />
      <Container className={styles.content}>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#lead-form">
            <span className={styles.label}>{hero.primaryCta}</span>
            <span className={styles.arrWrap}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.arrBase}>
                <path d="M4.5 13.5L13.5 4.5M13.5 4.5H5.55M13.5 4.5V12.45" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.arrHover}>
                <path d="M4.5 13.5L13.5 4.5M13.5 4.5H5.55M13.5 4.5V12.45" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a className={styles.secondary} href="#pricing">
            <span className={styles.label}>{hero.secondaryCta}</span>
            <span className={styles.arrWrap}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.arrBase}>
                <path d="M4.5 13.5L13.5 4.5M13.5 4.5H5.55M13.5 4.5V12.45" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.arrHover}>
                <path d="M4.5 13.5L13.5 4.5M13.5 4.5H5.55M13.5 4.5V12.45" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        <p className={styles.trustNote}>{hero.trustNote}</p>
        <div className={styles.trustBar}>
          {trustBar.items.map((item) => (
            <span key={item.label} className={styles.trustItem}>{item.label}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
