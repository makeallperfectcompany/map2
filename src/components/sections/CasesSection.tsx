import { cases } from "@/content/cases";
import { Container } from "@/components/ui/Container/Container";
import styles from "./CasesSection.module.css";

export default function CasesSection() {
  return (
    <section className={styles.casesSection} id="cases" aria-labelledby="cases-title">
      <Container>
        <div className={styles.top}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>Кейсы</div>
            <h2 className={styles.title} id="cases-title">
              Результаты, которые видно в цифрах
            </h2>
            <p className={styles.lead}>
              Показываем не просто красивые запуски, а системную работу: стратегия, трафик,
              упаковка, аналитика и рост ключевых показателей бизнеса.
            </p>
          </div>

          <div className={styles.topActions}>
            <a className={styles.allCasesLink} href="/cases">
              Смотреть все кейсы <span>↗</span>
            </a>
          </div>
        </div>

        <div className={styles.caseGrid}>
          {cases.slice(0, 3).map((item) => (
            <article className={styles.caseCard} key={item.slug}>
              <div className={styles.caseCover}>
                <img
                  src={item.cover}
                  alt=""
                  title={item.title}
                  className={styles.caseCoverImg}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.caseBody}>
                <div className={styles.contentBody}>
                  <h3>{item.title}</h3>
                  <p>{item.lead}</p>
                </div>
                <span className={styles.readMore}>Открыть →</span>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </section>
  );
}
