import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { wordpressDevelopmentContent as content } from '@/content/services/wordpressDevelopment';
import grid from '@/styles/grid.module.css';
import styles from './WordpressHeroSection.module.css';

export function WordpressHeroSection() {
  const { hero } = content;
  return (
    <section className={styles.section}>
      <picture className={styles.background} aria-hidden="true">
        <source media="(max-width: 767px)" srcSet={hero.mobileImage} />
        <Image src={hero.desktopImage} alt="" fill priority sizes="100vw" className={styles.backgroundImage} />
      </picture>
      <Container className={styles.container}>
        <div className={grid.grid2}>
          <div className={styles.copy}>
            <p className={styles.label}>{hero.label}</p>
            <h1 className={styles.title}>{hero.title}</h1>
            <p className={styles.description}>{hero.description}</p>
            <div className={styles.actions}>
              <Link href="#request" className={styles.primaryButton}>{hero.primaryCta} <span>↗</span></Link>
              <Link href="#cases" className={styles.secondaryButton}>{hero.secondaryCta} <span>↗</span></Link>
            </div>
            <span className={styles.spacer} aria-hidden="true" />
          </div>
        </div>
      </Container>
      <Container className={styles.bullets}>
        {hero.bullets.map((bullet, index) => <span key={bullet} className={styles.bullet}>{index > 0 && <i />} {bullet}</span>)}
      </Container>
    </section>
  );
}
