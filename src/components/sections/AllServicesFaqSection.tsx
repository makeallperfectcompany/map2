import { servicesFaq } from "@/content/services/all-services";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AllServicesFaqSection.module.css";
import grid from "@/styles/grid.module.css";

export default function AllServicesFaqSection() {
  return (
    <section className={styles.faqSection} aria-labelledby="services-faq-title">
      <Container>
        <div className={`${grid.grid2} ${styles.faqLayout}`}>
          <div className={styles.faqIntro}>
            <span>FAQ</span>
            <h2 id="services-faq-title">Вопросы, которые помогают выбрать направление</h2>
            <p>Собрали ответы для тех, кто выбирает между отдельной услугой, связкой каналов и комплексной работой.</p>
          </div>
          <div className={styles.faqList}>
            {servicesFaq.map((item) => (
              <details className={styles.faqItem} key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
