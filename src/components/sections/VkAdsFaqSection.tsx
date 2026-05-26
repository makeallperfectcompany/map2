import { Container } from "@/components/ui/Container/Container";
import { vkAdsContent as content } from "@/content/services/vkAds";
import styles from "./TargetedFaqSection.module.css";

export default function TargetedFaqSection() {
  return (
    <section className={styles.faqSection} id="faq">
      <Container>
        <div className={styles.inner}>
          <div className={styles.headerGrid}>
            <div className={styles.header}>
              <span className={styles.sectionLabel}>{content.faq.eyebrow}</span>
              <h2>{content.faq.title}</h2>
              <p>{content.faq.description}</p>
            </div>
            <article className={styles.ctaCard}>
              <small className={styles.ctaEyebrow}>AUDIT</small>
              <h3>Не нашли свой вопрос?</h3>
              <p>Разберём продукт, нишу и конкурентов — покажем, какие площадки и связки стоит подключать именно вам.</p>
              <a className={styles.ctaButton} href="#lead-form">
                Получить консультацию
              </a>
            </article>
          </div>
          <div className={styles.faqList}>
            {content.faq.items.map((item, index) => (
              <details key={item.question} className={styles.faqItem} open={index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  <h3>{item.question}</h3>
                  <i></i>
                </summary>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
