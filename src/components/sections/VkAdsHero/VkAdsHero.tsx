import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import styles from "./VkAdsHero.module.css";

interface Props {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

const trustItems = [
  { label: "Работаем на ROMI", value: "каждый шаг направлен на рост вашей прибыли" },
  { label: "Компетенции в VK Ads", value: "более 50 успешных запусков" },
  { label: "Полная прозрачность", value: "вы видите стратегию, цифры и ход работ" },
];

export default function VkAdsHero({ content }: Props) {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/images/services/vk-ads/vk-ads-hero-bg.webp"
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

          <div className={styles.trustBar}>
            <div className={styles.trustBarInner}>
              {trustItems.map((item) => (
                <div key={item.label} className={styles.trustItem}>
                  <span className={styles.trustLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
