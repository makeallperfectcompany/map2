import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { wbExternalAdsContent } from "@/content/services/vneshnyaya-reklama-wildberries";
import styles from "./WbExternalAdsReadiness.module.css";

export default function WbExternalAdsReadiness() {
  const { readiness } = wbExternalAdsContent;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2>{readiness.title}</h2>
          <p>{readiness.description}</p>
        </div>
        <div className={styles.layout}>
          <div className={styles.visualCard}>
            <Image src={readiness.image} alt="Внешняя реклама Wildberries — аудит и подготовка карточки товара" width={1200} height={1500} sizes="(min-width: 1280px) 38vw, 100vw" />
          </div>
          <div className={styles.rightCol}>
            <article className={styles.accentCard}>
              <h3>{readiness.accentTitle}</h3>
              <p>{readiness.accentText}</p>
            </article>
            <div className={styles.cardGrid}>
              {readiness.cards.map((card) => (
                <article className={styles.card} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
