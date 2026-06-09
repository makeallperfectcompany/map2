import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./MarketplaceInternalAdsHeroSection.module.css";

type Props = {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
};

export default function MarketplaceInternalAdsHeroSection({ content }: Props) {
  return (
    <section className={styles.hero}>
      <Image className={styles.bg} src={content.image} alt="" fill priority sizes="100vw" />
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">{content.primaryCta}</a>
            <a className={styles.secondary} href="#pricing">{content.secondaryCta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
