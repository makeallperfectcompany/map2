import Image from "next/image";
import { homeAdvantages } from "@/content/home/advantages";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeAdvantagesSection.module.css";

export default function HomeAdvantagesSection() {
  return (
    <section className={styles.advantagesSection}>
      <Container className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{homeAdvantages.label}</span>
          <p className={styles.kicker}>{homeAdvantages.kicker}</p>
        </div>

        <div className={styles.layoutRow}>
          <div className={styles.h2Column}>
            <h2>{homeAdvantages.title}</h2>
            <p className={styles.description}>{homeAdvantages.description}</p>
          </div>

          <div className={styles.contentColumn}>
            <article className={styles.mainCard}>
              <span>Full-cycle growth</span>
              <h3>{homeAdvantages.mainCard.title}</h3>
              <p>{homeAdvantages.mainCard.text}</p>
            </article>

            <div className={styles.cardsGrid}>
              {homeAdvantages.items.map((item, index) => (
                <article className={styles.advantageCard} key={item.title}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className={styles.visualCard}>
              <Image
                src={homeAdvantages.visual}
                alt=""
                title="Преимущества работы"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
