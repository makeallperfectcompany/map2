import { Container } from "@/components/ui/Container/Container";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { copywritingServiceContent } from "@/content/services/kopirajting-dlya-sajta";
import styles from "./CopywritingPricingSection.module.css";

export default function CopywritingPricingSection() {
  const { pricing } = copywritingServiceContent;

  return (
    <section className={styles.section} id="copywriting-pricing">
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2>{pricing.title}</h2>
            <p>{pricing.text}</p>
          </div>
          <article className={styles.priceCard}>
            <span>{pricing.name}</span>
            <strong>{pricing.price}</strong>
            <p>{pricing.note}</p>
            {pricing.triggerText && <p className={styles.triggerText}>{pricing.triggerText}</p>}
            <OpenConsultationButton as="a" className={`${styles.btn} ${styles.btnAccent}`}>
              <span>{pricing.cta}</span>
              <span className={styles.arrWrap} aria-hidden="true"><svg className={`${styles.arr} ${styles.arrMain}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><svg className={`${styles.arr} ${styles.arrGhost}`} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </OpenConsultationButton>
          </article>
        </div>
      </Container>
    </section>
  );
}
