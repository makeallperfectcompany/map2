import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { targetAdsContent } from "@/content/services/targetirovannaya-reklama";
import styles from "./TargetAdsPageSections.module.css";

const content = targetAdsContent;

export function TargetAdsHeroSection() {
  return (
    <section className={styles.heroSection}>
      <Image className={styles.heroBg} src={content.hero.background} alt="" fill priority sizes="100vw" />
      <Image className={styles.heroObject} src={content.hero.object} alt="" width={1200} height={900} priority />
      <Container className={styles.heroInner}>
        <div className={styles.heroText}>
          <h1>{content.hero.title}</h1>
          <p>{content.hero.description}</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#final-cta">{content.hero.primaryCta}</a>
            <a className={styles.ghostButton} href="#pricing">{content.hero.secondaryCta}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TargetAdsNeedSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.split}>
        <div className={styles.sectionCopy}>
          <h2>Показываем предложение тем, для кого оно действительно может стать решением</h2>
          <p>Таргетированная реклама обращается к аудитории по интересам, поведению, географии и признакам спроса. Вместо ожидания запроса в поиске мы выстраиваем первое касание там, где потенциальный клиент уже проводит время — в соцсетях и мессенджерах.</p>
        </div>
        <div className={styles.verticalVisual}>
          <Image src="/images/services/targetirovannaya-reklama/strategy-visual.webp" alt="Абстрактная визуализация сегментации аудитории" width={1200} height={1500} sizes="(min-width: 768px) 48vw, 100vw" />
        </div>
      </Container>
      <Container className={`${grid.grid2} ${styles.cardGrid}`}>
        {content.need.map((item, index) => (
          <article className={`${styles.card} ${index === 3 ? styles.blueCard : ""}`} key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}

export function TargetAdsPlatformsSection() {
  return (
    <section className={styles.lightSection}>
      <Container className={styles.sectionHead}>
        <h2>Выбираем площадку под сценарий покупки, а не по привычке</h2>
        <p>У каждой площадки своя логика внимания и действия. Подбираем каналы, где предложение естественно встречается с нужной аудиторией и ведёт её к заявке.</p>
      </Container>
      <Container className={grid.grid3}>
        {content.platforms.map((item) => <article className={styles.card} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </Container>
    </section>
  );
}

export function TargetAdsIncludedSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.asymmetric}>
        <div className={styles.bluePanel}>
          <h2>Внутри услуги — не рекламный кабинет, а управляемая система привлечения заявок</h2>
          <p>Берём на себя стратегию, материалы, запуск и оптимизацию — чтобы бизнес видел, где находятся точки роста и сколько стоит каждая заявка.</p>
          <a className={styles.lightButton} href="#final-cta">Получить план запуска</a>
        </div>
        <div className={`${grid.grid2} ${styles.miniCards}`}>
          {content.included.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Container>
    </section>
  );
}

export function TargetAdsProcessSection() {
  return (
    <section className={styles.lightSection}>
      <Container className={styles.splitReverse}>
        <div className={styles.wideVisual}>
          <Image src="/images/services/targetirovannaya-reklama/process-visual.webp" alt="Визуализация этапов запуска и оптимизации рекламных кампаний" width={1600} height={1000} sizes="(min-width: 768px) 48vw, 100vw" />
        </div>
        <div className={styles.sectionCopy}>
          <h2>Запускаем рекламу последовательно — чтобы каждая гипотеза была проверяемой</h2>
          <p>Сначала определяем задачу и логику привлечения, затем масштабируем только то, что подтверждается действиями аудитории.</p>
        </div>
      </Container>
      <Container className={styles.processList}>
        {content.process.map((item, index) => <article key={item.title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </Container>
    </section>
  );
}

export function TargetAdsChannelsSection() {
  return <section className={styles.section}><Container className={styles.asymmetric}><div className={styles.sectionCopy}><h2>Реклама работает сильнее, когда связана с предложением, контентом и аналитикой</h2><p>Не ограничиваемся настройкой показов. Проверяем, куда ведём пользователя, что он увидит после клика и какие данные помогут принять следующее решение.</p></div><div className={styles.bluePanelSmall}><h3>Строим рекламную систему, в которой бюджет приводит к понятным действиям и заявкам</h3><p>От аудитории и креатива до посадочной страницы и аналитики — соединяем элементы так, чтобы бизнес видел весь путь до заявки и её стоимость.</p></div></Container></section>;
}

export function TargetAdsPricingSection() {
  return <section className={styles.lightSection} id="pricing"><Container className={styles.pricingBox}><div className={styles.sectionCopy}><h2>Стоимость зависит от объёма запуска, площадок и количества гипотез</h2><p>Перед стартом оцениваем задачу, рекламный бюджет, готовность посадочных страниц, аналитику, количество площадок и объём креативов.</p></div><div className={styles.priceCard}><span>Стоимость</span><strong>от 50 000 ₽</strong><p>Финальный объём работ фиксируется после короткого разбора задачи.</p><a className={styles.lightButton} href="#final-cta">Рассчитать стоимость</a></div></Container></section>;
}

export function TargetAdsIndustriesSection() {
  return <section className={styles.section}><Container className={styles.sectionHead}><h2>Адаптируем таргет под нишу, аудиторию и цикл сделки</h2><p>Один подход не может одинаково работать для интернет-магазина, медицинской клиники, застройщика и онлайн-школы.</p></Container><Container className={grid.grid3}>{content.industries.map((title) => <article className={styles.card} key={title}><h3>{title}</h3><p>Подбираем аудитории, оффер и формат касания под реальную экономику ниши.</p></article>)}</Container></section>;
}

export function TargetAdsTechnologiesSection() {
  return <section className={styles.darkSection}><Container className={styles.sectionHead}><h2>Технологии помогают видеть не показы, а реальную эффективность рекламы</h2><p>Работа строится вокруг данных: событий, UTM, пикселей, ретаргетинга, отчётности и контроля запусков.</p></Container><Container className={grid.grid3}>{content.technologies.map((item) => <article className={styles.techCard} key={item.code}><b>{item.code}</b><h3>{item.title}</h3><p>{item.text}</p></article>)}</Container></section>;
}

export function TargetAdsFaqSection() {
  return <section className={styles.lightSection}><Container className={styles.sectionHead}><h2>Часто задаваемые вопросы о таргетированной рекламе</h2><p>Собрали короткие ответы на вопросы, которые чаще всего задают перед запуском таргета: стоимость, бюджет, сроки, площадки, гарантии и участие клиента.</p></Container><Container className={styles.faqList}>{content.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</Container></section>;
}
