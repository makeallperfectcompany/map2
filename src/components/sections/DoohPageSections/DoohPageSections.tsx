import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./DoohPageSections.module.css";
import { naruzhnayaCifrovayaReklamaContent as content } from "@/content/services/naruzhnaya-cifrovaya-reklama";

export function DoohHeroSection() {
  const hero = content.hero;

  return (
    <section className={styles.heroSection} aria-labelledby="dooh-hero-title">
      <Image
        className={styles.heroBg}
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <Container className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="dooh-hero-title">{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#final-cta">{hero.primaryCta}</a>
            <a className={styles.secondaryButton} href="#media-plan">{hero.secondaryCta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DoohUseCasesSection() {
  const block = content.useCases;

  return (
    <section className={styles.lightSection} aria-labelledby="dooh-use-cases-title">
      <Container>
        <div className={`${grid.grid2} ${styles.visualTextGrid}`}>
          <div className={styles.verticalVisualCard}>
            <Image src={block.image} alt="Абстрактная карта городских DOOH-точек" width={1200} height={1500} sizes="(min-width: 768px) 42vw, 100vw" />
          </div>
          <div className={styles.textStack}>
            <h2 id="dooh-use-cases-title">{block.title}</h2>
            <p>{block.text}</p>
            <div className={`${grid.grid2} ${styles.compactCards}`}> 
              {block.cards.map((card) => (
                <article className={styles.whiteCard} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
            <a className={styles.inlineCta} href="#final-cta">{block.cta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DoohLaunchProcessSection() {
  const block = content.process;

  return (
    <section className={styles.whiteSection} aria-labelledby="dooh-process-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="dooh-process-title">{block.title}</h2>
          <p>{block.text}</p>
        </div>
        <div className={`${grid.gridAsymmetric} ${styles.processGrid}`}>
          <aside className={styles.bluePanel}>
            <span>DOOH / FULL CYCLE</span>
            <h3>От задачи бизнеса до контролируемого запуска</h3>
            <p>Собираем кампанию так, чтобы каждый экран, район и креатив имел понятную роль в общей маркетинговой системе.</p>
            <a href="#final-cta">{block.cta}</a>
          </aside>
          <div className={`${grid.grid2} ${styles.stepCards}`}> 
            {block.steps.map(([code, title, text]) => (
              <article className={styles.stepCard} key={code}>
                <span>{code}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DoohFormatsSection() {
  const block = content.formats;

  return (
    <section className={styles.lightSection} aria-labelledby="dooh-formats-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="dooh-formats-title">{block.title}</h2>
          <p>{block.text}</p>
        </div>
        <div className={`${grid.grid3} ${styles.formatCards}`}> 
          {block.cards.map(([title, text], index) => (
            <article className={styles.formatCard} key={title}>
              <span className={styles.cardIcon} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <a className={styles.centerCta} href="#final-cta">{block.cta}</a>
      </Container>
    </section>
  );
}

export function DoohMediaPlanSection() {
  const block = content.mediaPlan;

  return (
    <section id="media-plan" className={styles.whiteSection} aria-labelledby="dooh-media-title">
      <Container>
        <div className={`${grid.grid2} ${styles.mediaGrid}`}> 
          <div className={styles.textStack}>
            <h2 id="dooh-media-title">{block.title}</h2>
            <p>{block.text}</p>
            <ul className={styles.checkList}>
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className={styles.inlineCta} href="#final-cta">{block.cta}</a>
          </div>
          <div className={styles.mediaVisualCard}>
            <Image src={block.image} alt="Абстрактная система медиапланирования DOOH" width={1400} height={1050} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DoohPricingSection() {
  const block = content.pricing;

  return (
    <section className={styles.pricingSection} aria-labelledby="dooh-pricing-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="dooh-pricing-title">{block.title}</h2>
          <p>{block.text}</p>
        </div>
        <div className={`${grid.grid3} ${styles.pricingCards}`}> 
          {block.cards.map(([title, text, price]) => (
            <article className={styles.priceCard} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
        <a className={styles.centerCta} href="#final-cta">{block.cta}</a>
      </Container>
    </section>
  );
}

export function DoohIndustriesSection() {
  return (
    <section className={styles.lightSection} aria-labelledby="dooh-industries-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="dooh-industries-title">DOOH особенно полезен бизнесу, которому важно быть заметным в конкретных местах города</h2>
        </div>
        <div className={`${grid.grid3} ${styles.industryCards}`}> 
          {content.industries.map(([title, text]) => (
            <article className={styles.industryCard} key={title}>
              <span className={styles.industryIcon} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DoohTechnologiesSection() {
  return (
    <section className={styles.darkSection} aria-labelledby="dooh-tech-title">
      <Container>
        <div className={styles.darkHeader}>
          <h2 id="dooh-tech-title">Делаем DOOH управляемым каналом, а не просто размещением на красивых экранах</h2>
          <p>Используем digital-подход к наружной рекламе: планируем географию, расписание, частоту, креативные сценарии и дальнейшие касания в онлайн-каналах.</p>
        </div>
        <div className={`${grid.grid3} ${styles.techCards}`}> 
          {content.technologies.map(([code, title, text, tags]) => (
            <article className={styles.techCard} key={code as string}>
              <span>{code as string}</span>
              <h3>{title as string}</h3>
              <p>{text as string}</p>
              <div>{(tags as readonly string[]).map((tag) => <em key={tag}>{tag}</em>)}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DoohFaqSection() {
  return (
    <section className={styles.whiteSection} aria-labelledby="dooh-faq-title">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 id="dooh-faq-title">Вопросы о цифровой наружной рекламе</h2>
        </div>
        <div className={styles.faqList}>
          {content.faq.map(([question, answer]) => (
            <details className={styles.faqItem} key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
