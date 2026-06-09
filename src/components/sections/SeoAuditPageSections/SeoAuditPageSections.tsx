import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { seoAuditContent } from "@/content/services/kompleksnyj-seo-audit-sajta";
import styles from "./SeoAuditPageSections.module.css";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SeoAuditHeroSection() {
  const { hero } = seoAuditContent;

  return (
    <section className={styles.heroSection}>
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        className={styles.heroImage}
        sizes="100vw"
      />
      <div className={styles.heroOverlay} />
      <Container className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.heroActions}>
            <a className={cn(styles.button, styles.buttonPrimary)} href="#final-cta">
              {hero.primaryCta}
            </a>
            <a className={cn(styles.button, styles.buttonGhost)} href="#price">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditNeedSection() {
  const { need } = seoAuditContent;

  return (
    <section className={cn(styles.section, styles.lightSection)}>
      <Container>
        <header className={styles.sectionHead}>
          <h2>{need.title}</h2>
          <p>{need.text}</p>
        </header>
        <div className={grid.grid4}>
          {need.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <span>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditScopeSection() {
  const { scope } = seoAuditContent;

  return (
    <section className={cn(styles.section, styles.whiteSection)}>
      <Container>
        <header className={styles.sectionHead}>
          <h2>{scope.title}</h2>
          <p>{scope.text}</p>
        </header>
        <div className={grid.grid3}>
          {scope.cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <span>{card.code}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditAutoCheckSection() {
  const { autoCheck } = seoAuditContent;

  return (
    <section className={cn(styles.section, styles.lightSection)}>
      <Container>
        <div className={cn(grid.grid2, styles.alignCenter)}>
          <div>
            <h2>{autoCheck.title}</h2>
            <p className={styles.lead}>{autoCheck.text}</p>
            <div className={styles.miniList}>
              <p><b>Не все ошибки одинаково важны.</b> Одна техническая проблема может тормозить весь раздел, а десятки мелких замечаний почти не влиять на результат.</p>
              <p><b>SEO нельзя оценивать без конкурентов.</b> Страница может быть технически корректной, но проигрывать выдаче по структуре, полноте и доверию.</p>
              <p><b>Отчёт должен превращаться в работу.</b> Главная ценность аудита — понятная последовательность внедрения.</p>
            </div>
          </div>
          <figure className={styles.visualCard}>
            <Image src={autoCheck.image} alt="Абстрактный визуал экспертного SEO-аудита" width={1200} height={1500} />
          </figure>
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditDeliverablesSection() {
  const { deliverables } = seoAuditContent;

  return (
    <section className={cn(styles.section, styles.whiteSection)}>
      <Container>
        <div className={cn(grid.grid2, styles.alignCenter)}>
          <figure className={styles.visualCard}>
            <Image src={deliverables.image} alt="Абстрактная дорожная карта SEO-аудита" width={1200} height={1500} />
          </figure>
          <div>
            <div className={styles.blueCard}>
              <h2>{deliverables.title}</h2>
              <p>{deliverables.text}</p>
            </div>
            <div className={cn(grid.grid2, styles.smallCards)}>
              {deliverables.cards.map((card) => (
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

export function SeoAuditProcessSection() {
  return (
    <section className={cn(styles.section, styles.lightSection)}>
      <Container>
        <div className={grid.grid2}>
          <div className={styles.introCard}>
            <h2>Погружаемся в проект, проверяем систему и собираем план действий</h2>
            <p>Процесс построен так, чтобы аудит был не формальным документом, а рабочей основой для SEO, разработки и маркетинга.</p>
          </div>
          <div className={styles.steps}>
            {seoAuditContent.process.map((step) => (
              <article key={step.title}>
                <span>{step.code}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditPriceSection() {
  const { price } = seoAuditContent;

  return (
    <section className={cn(styles.section, styles.whiteSection)} id="price">
      <Container>
        <div className={styles.pricePanel}>
          <div>
            <h2>{price.title}</h2>
            <p>{price.text}</p>
          </div>
          <aside className={styles.priceCard}>
            <span>Стоимость</span>
            <strong>{price.value}</strong>
            <p>Перед стартом уточняем задачу и масштаб сайта, чтобы не продавать лишнее.</p>
            <a className={cn(styles.button, styles.buttonPrimary)} href="#final-cta">
              {price.cta}
            </a>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditSiteTypesSection() {
  return (
    <section className={cn(styles.section, styles.lightSection)}>
      <Container>
        <header className={styles.sectionHead}>
          <h2>Аудит нужен не только проблемным сайтам — он помогает принимать решения перед ростом</h2>
        </header>
        <div className={grid.grid3}>
          {seoAuditContent.siteTypes.map((card) => (
            <article className={styles.card} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditIndustriesSection() {
  return (
    <section className={cn(styles.section, styles.lightSection)}>
      <Container>
        <header className={styles.sectionHead}>
          <h2>Проверяем сайты в нишах, где SEO влияет не только на трафик, но и на заявки</h2>
        </header>
        <div className={grid.grid4}>
          {seoAuditContent.industries.map((industry) => (
            <article className={styles.industryCard} key={industry}>{industry}</article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditTechnologiesSection() {
  return (
    <section className={cn(styles.section, styles.darkSection)}>
      <Container>
        <header className={cn(styles.sectionHead, styles.darkHead)}>
          <h2>Используем данные, чтобы отделить критичные ошибки от информационного шума</h2>
          <p>Контент блока адаптирован под комплексный SEO-аудит и не копирует карточки главной страницы механически.</p>
        </header>
        <div className={grid.grid3}>
          {seoAuditContent.technologies.map((tech) => (
            <article className={styles.techCard} key={tech.code}>
              <span>{tech.code}</span>
              <h3>{tech.title}</h3>
              <p>{tech.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SeoAuditFaqSection() {
  return (
    <section className={cn(styles.section, styles.whiteSection)}>
      <Container>
        <div className={grid.grid2}>
          <div>
            <h2>FAQ по комплексному SEO-аудиту</h2>
            <p className={styles.lead}>Уникальные вопросы под интент и возражения этой услуги. UI можно заменить существующим FAQ-аккордеоном проекта.</p>
          </div>
          <div className={styles.faqList}>
            {seoAuditContent.faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
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
