import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import type { VkAdsContent } from "@/content/services/vkAds";
import styles from "./VkAds.module.css";

export default function VkAdsHero({ content }: { content: VkAdsContent["hero"] }) {
  return (
    <section className={styles.hero} aria-labelledby="vkAdsHeroTitle">
      <Image className={styles.heroDesktopImage} src={content.desktopImage} alt="" fill priority sizes="100vw" />
      <Image className={styles.heroMobileImage} src={content.mobileImage} alt="" fill priority sizes="100vw" />
      <Container>
        <div className={styles.heroCopy}>
          <h1 id="vkAdsHeroTitle" className={styles.heroTitle}>{content.title}</h1>
          <p className={styles.heroLead}>{content.text}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="#contact">{content.primaryCta}<span>↗</span></Link>
            <Link className={styles.secondaryButton} href="#contact">{content.secondaryCta}<span>↗</span></Link>
          </div>
          <div className={styles.heroBullets}>
            {content.bullets.map((item) => <p key={item}>{item}</p>)}
          </div>
          <p className={styles.heroMicrotext}>{content.microtext}</p>
        </div>
      </Container>
    </section>
  );
}