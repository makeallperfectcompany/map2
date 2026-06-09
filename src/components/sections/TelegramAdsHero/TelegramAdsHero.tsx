import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './TelegramAdsHero.module.css';

type Props = {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
};

export function TelegramAdsHero({ content }: Props) {
  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={content.image} alt="" fill priority sizes="100vw" />
      <Container className={styles.container}>
        <div className={styles.copy}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">{content.primaryCta}</a>
            <a className={styles.secondary} href="#faq">{content.secondaryCta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
