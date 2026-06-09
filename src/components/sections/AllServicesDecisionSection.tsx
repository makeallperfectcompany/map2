import { decisionSteps, workFormats } from "@/content/services/all-services";
import { Container } from "@/components/ui/Container/Container";
import styles from "./AllServicesDecisionSection.module.css";
import grid from "@/styles/grid.module.css";

export default function AllServicesDecisionSection() {
  return (
    <>
      <section className={styles.decisionSection} aria-labelledby="decision-title">
        <Container>
          <div className={`${grid.grid2} ${styles.decisionLayout}`}>
            <div className={styles.stickyCopy}>
              <h2 id="decision-title">Не начинаем с инструмента — сначала разбираемся в задаче</h2>
              <p>
                Реклама, SEO, сайт или CRM не существуют отдельно от экономики бизнеса.
                Поэтому мы сначала определяем, где рост действительно упирается в маркетинг,
                и только потом предлагаем набор работ.
              </p>
              <a href="#lead-form">Получить рекомендацию →</a>
            </div>
            <div className={styles.stepsList}>
              {decisionSteps.map((step) => (
                <article className={styles.stepCard} key={step.mark}>
                  <span>{step.mark}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.formatsSection} aria-labelledby="formats-title">
        <Container>
          <div className={styles.bluePanel}>
            <div className={`${grid.grid2} ${styles.panelGrid}`}>
              <div className={styles.panelCopy}>
                <h2 id="formats-title">Одна услуга — когда задача понятна. Комплекс — когда нужен рост всей системы.</h2>
                <p>
                  Можно подключить одно направление, собрать несколько специалистов вокруг проекта
                  или передать нам маркетинг как внешней команде полного цикла.
                </p>
              </div>
              <div className={styles.formatCards}>
                {workFormats.map((format) => (
                  <article className={styles.formatCard} key={format.title}>
                    <h3>{format.title}</h3>
                    <p>{format.text}</p>
                    <a href="#lead-form">{format.link} →</a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
