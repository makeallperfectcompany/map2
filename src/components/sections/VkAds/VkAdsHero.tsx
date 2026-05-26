import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

type Props = { content: VkAdsContent["hero"] };

export default function VkAdsHero({ content }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="vk-ads-hero-title">
      <Image className={styles.heroDesktopImage} src={content.desktopImage} alt="" fill priority sizes="100vw" />
      <Image className={styles.heroMobileImage} src={content.mobileImage} alt="" fill priority sizes="100vw" />
      <Container>
        <div className={styles.heroCopy}>
          <h1 id="vk-ads-hero-title" className={styles.heroTitle}>{content.title}</h1>
          <p className={styles.heroText}>{content.text}</p>
          <div className={styles.heroActions}>
            <Link href="#contact" className={styles.primaryButton}>{content.primaryCta}<span>↗</span></Link>
            <Link href="#pricing" className={styles.secondaryButton}>{content.secondaryCta}<span>↗</span></Link>
          </div>
          <div className={styles.heroBullets}>
            {content.bullets.map((bullet) => <p key={bullet}>{bullet}</p>)}
          </div>
          <p className={styles.heroMicrotext}>{content.microtext}</p>
        </div>
      </Container>
    </section>
  );
}