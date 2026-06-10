import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./TelegramAdsHero.module.css";

interface Props {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export default function TelegramAdsHero({ content }: Props) {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/services/telegram-ads/hero-bg.webp"
        alt=""
        fill
        priority
        className={styles.heroBg}
        sizes="100vw"
      />
      <Container className={styles.container}>
        <div className={styles.copy}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>{content.primaryCta}</a>
            <a href="#pricing" className={styles.secondary}>{content.secondaryCta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
