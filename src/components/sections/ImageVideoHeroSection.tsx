import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./ImageVideoHeroSection.module.css";

type HeroData = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  trustTriggers?: string[];
};

export default function ImageVideoHeroSection({ data }: { data: HeroData }) {
  return (
    <section className={styles.heroSection} aria-labelledby="image-video-hero-title">
      <Image className={styles.heroBg} src={data.image} alt="" fill priority sizes="100vw" />
      <Container className={styles.container}>
        <div className={styles.copy}>
          <h1 id="image-video-hero-title">{data.title}</h1>
          <p>{data.description}</p>
          <div className={styles.actions}>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#final-cta">
              <span className={styles.label}>{data.primaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#faq">
              <span className={styles.label}>{data.secondaryCta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          {data.trustTriggers && (
            <div className={styles.trustLine}>
              {data.trustTriggers.map((t, i) => (
                <span key={t}>{i > 0 && <span className={styles.dot}>·</span>}{t}</span>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
