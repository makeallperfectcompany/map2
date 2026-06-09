import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import type { smmService } from '@/content/services/smm';
import styles from './SmmHeroSection.module.css';

type Props = {
  hero: typeof smmService.hero;
};

export function SmmHeroSection({ hero }: Props) {
  return (
    <section className={styles.heroSection} aria-labelledby="smm-hero-title">
      <Image className={styles.heroBg} src={hero.image} alt="" fill priority sizes="100vw" />
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="smm-hero-title" className={styles.title}>{hero.title}</h1>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#final-cta">{hero.primaryCta}</a>
            <a className={styles.secondaryButton} href="#smm-process">{hero.secondaryCta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
