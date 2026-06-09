import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './LocalSeoHeroSection.module.css';
import { localSeoContent } from '@/content/services/localSeo';

export function LocalSeoHeroSection() {
  const { hero } = localSeoContent;

  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={hero.image} alt="Локальное SEO продвижение — Make All Perfect" fill priority sizes="100vw" />
      <Container>
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <h1 className={styles.heroTitle}>{hero.title}</h1>
            <p className={styles.heroLead}>{hero.description}</p>
            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnAccent}`} href="#final-cta">{hero.primaryCta}<span>↗</span></a>
              <a className={`${styles.btn} ${styles.btnGhost}`} href="#cases">{hero.secondaryCta}<span>↗</span></a>
            </div>
            <p className={styles.trustLine}>{hero.trustLine}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
