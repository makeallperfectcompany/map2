import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./InfluenceHeroSection.module.css";

type HeroContent = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  microCopy?: string;
  image: string;
};

export default function InfluenceHeroSection({ content }: { content: HeroContent }) {
  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={content.image} alt="" fill priority sizes="100vw" />
      <Container className={styles.heroContent}>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <div className={styles.actions}>
          <a className={styles.primaryBtn} href="#contact">{content.primaryCta}</a>
          <a className={styles.ghostBtn} href="#selection">{content.secondaryCta}</a>
        </div>
        {content.microCopy && <p className={styles.microCopy}>{content.microCopy}</p>}
      </Container>
    </section>
  );
}
