import Image from "next/image";
import { homeAdvantages } from "@/content/home/advantages";
import { Container } from "@/components/ui/Container/Container";
import styles from "./HomeAdvantagesSection.module.css";

interface AdvantagesContent {
  label: string;
  kicker: string;
  title: string;
  description: string;
  visual: string;
  mainCard: { title: string; text: string };
  items: { title: string; text: string }[];
}

export default function HomeAdvantagesSection({ content }: { content?: AdvantagesContent }) {
  const data = content ?? homeAdvantages;

  return (
    <section className={styles.advantagesSection}>
      <Container className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{data.label}</span>
          <p className={styles.kicker}>{data.kicker}</p>
        </div>

        <div className={styles.layoutRow}>
          <div className={styles.h2Column}>
            <h2>{data.title}</h2>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.visualCard}>
              <Image
                src={data.visual}
                alt=""
                title="Преимущества работы"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                priority={false}
              />
            </div>
          </div>

          <div className={styles.contentColumn}>
            <article className={styles.mainCard}>
              <span>Full-cycle growth</span>
              <h3>{data.mainCard.title}</h3>
              <p>{data.mainCard.text}</p>
            </article>

            <div className={styles.cardsGrid}>
              {data.items.map((item, index) => (
                <article className={styles.advantageCard} key={item.title}>
                  <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
