import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import { sermContent } from '@/content/services/serm';
import styles from './SermHeroSection.module.css';

export function SermHeroSection() {
  const { hero } = sermContent;
  return (
    <section className={styles.hero}>
      <Image src={hero.desktopImage} alt="" fill priority className={styles.bg} />
      <Container>
        <div className={styles.copy}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#final-cta">{hero.primaryCta}</a>
            <a className={styles.secondary} href={hero.secondaryHref || "#process"}>{hero.secondaryCta}</a>
          </div>
          <div className={styles.note}>{hero.priceNote}</div>
        </div>
      </Container>
    </section>
  );
}
