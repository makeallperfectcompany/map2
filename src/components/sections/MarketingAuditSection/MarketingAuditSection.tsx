import Image from "next/image";
import { marketingAuditContent as content } from "@/content/services/marketing-audit";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./MarketingAuditSection.module.css";

export function MarketingAuditHero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94) 0%, rgba(255,255,255,.76) 37%, rgba(255,255,255,0) 62%), url(${content.hero.background})` }}
    >
      <Container className={styles.heroInner}>
        <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
        <h1>{content.hero.title}</h1>
        <p className={styles.lead}>{content.hero.description}</p>
        <div className={styles.heroActions}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#final-cta">
            <span className={styles.label}>{content.hero.primaryCta}</span>
            <span className={styles.arrWrap}>
              <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a className={`${styles.btn} ${styles.btnGhost}`} href="#marketing-audit-scope">
            <span className={styles.label}>{content.hero.secondaryCta}</span>
            <span className={styles.arrWrap}>
              <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        <div className={styles.heroMarker}>{content.hero.marker}</div>
        <div className={styles.principles}>
          {content.hero.principles.map((item, index) => (
            <span key={item}>{item}{index < content.hero.principles.length - 1 ? <i /> : null}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function MarketingAuditSections() {
  return (
    <>
      <section className={styles.section} id="marketing-audit-need">
        <Container>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Когда нужен аудит</p>
            <h2>Маркетинг вроде работает, но результат непредсказуемый? Значит, пора в нём разобраться</h2>
            <p>Аудит нужен не только когда всё плохо. Чаще всего его заказывают перед ростом бюджета, сменой подрядчика или масштабированием — чтобы понять, что реально влияет на заявки, продажи и окупаемость, а что только тратит деньги.</p>
          </div>
          <div className={grid.grid4}>
            {content.need.map((item, index) => (
              <article className={styles.card} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.darkSection} id="marketing-audit-scope">
        <Container>
          <div className={styles.darkTop}>
            <div>
              <p className={`${styles.eyebrow} ${styles.lightBlue}`}>Состав проверки</p>
              <h2>Проверяем не отдельный рекламный кабинет, а всю связку маркетинга</h2>
            </div>
            <p>Ищем не красивые замечания для отчёта, а реальные точки потерь — от оффера и посадочной страницы до аналитики, качества трафика и того, как принимаются решения.</p>
          </div>
          <div className={grid.grid3}>
            {content.scope.map((item) => (
              <article className={styles.darkCard} key={item.code}>
                <span>{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} id="marketing-audit-result">
        <Container className={styles.resultLayout}>
          <div className={styles.resultVisual}>
            <Image src="/images/services/marketing-audit/marketing-audit-result-visual.webp" alt="" width={900} height={1200} sizes="(min-width: 768px) 48vw, 100vw" />
          </div>
          <div className={styles.resultCopy}>
            <p className={styles.eyebrow}>Результат</p>
            <h2>На выходе — не отчёт ради отчёта, а карта решений с понятной очередностью</h2>
            <p>Мы фиксируем проблему, показываем её влияние на бизнес в деньгах и переводим выводы в конкретный план. Сразу видно: что исправлять немедленно, что тестировать и куда не стоит тратить ресурс прямо сейчас.</p>
            <div className={grid.grid2}>
              {content.result.map((item) => (
                <article className={styles.smallCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} id="marketing-audit-process">
        <Container>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Как проходит аудит</p>
            <h2>Спокойный процесс без хаоса: от цели бизнеса до защищённого плана внедрения</h2>
          </div>
          <div className={styles.steps}>
            {content.process.map((item, index) => (
              <article className={styles.card} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.priceSection} id="marketing-audit-price">
        <Container>
          <div className={styles.priceBox}>
            <div>
              <p className={`${styles.eyebrow} ${styles.lightBlue}`}>Стоимость и формат</p>
              <h2>{content.price.title}</h2>
              <p>{content.price.text}</p>
            </div>
            <a className={`${styles.btn} ${styles.whiteBtn}`} href="#final-cta">
              <span className={styles.label}>{content.price.cta}</span>
              <span className={styles.arrWrap}>
                <svg className={styles.arrMain} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className={styles.arrGhost} viewBox="0 0 14 14" fill="none">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </Container>
      </section>

      <section className={styles.darkSection} id="marketing-audit-technologies">
        <Container>
          <div className={styles.darkTop}>
            <div>
              <p className={`${styles.eyebrow} ${styles.lightBlue}`}>Технологии аудита</p>
              <h2>Данные, гипотезы и приоритеты — в одной системе принятия решений</h2>
            </div>
            <p>Мы не выдаём набор разрозненных замечаний. Каждый вывод опирается на данные и превращается в гипотезу, которую можно внедрить и проверить по метрикам.</p>
          </div>
          <div className={grid.grid3}>
            {content.technologies.map((item) => (
              <article className={styles.darkCard} key={item.code}>
                <span>{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} id="marketing-audit-faq">
        <Container>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2>Частые вопросы о маркетинговом аудите</h2>
          </div>
          <div className={styles.faqList}>
            {content.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
