import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AvitoHeroSection.module.css";

interface Props {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  price: string;
  image: string;
}

export default function AvitoHeroSection({ title, description, primaryCta, secondaryCta, price, image }: Props) {
  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={image} alt="Реклама на Avito — Make All Perfect" fill priority sizes="100vw" />
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#final-cta">{primaryCta}</a>
            <a className={styles.secondary} href="#avito-scope">{secondaryCta}</a>
          </div>
          <span className={styles.price}>{price}</span>
        </div>
      </Container>
    </section>
  );
}
