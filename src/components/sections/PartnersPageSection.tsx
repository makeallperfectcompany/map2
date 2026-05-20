import {
  clientBenefits,
  faq,
  partnerAudience,
  partnerBenefits,
  partnershipFormats,
  processSteps,
  recommendServices,
} from "@/content/partners";
import styles from "./PartnersPageSection.module.css";

export default function PartnersPageSection() {
  return (
    <main className={styles.partnersPage}>
      <section className={styles.hero} aria-labelledby="partners-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>Партнёрская программа</div>
            <h1 id="partners-title">Зарабатывайте на рекомендациях клиентов, которым нужен сильный маркетинг</h1>
            <p>
              Передавайте нам компании, которым нужны реклама, SEO, маркетплейсы, сайты,
              контент, CRM, PR или комплексное продвижение. Мы берём на себя консультацию,
              стратегию, продажу и ведение проекта, а вы получаете партнёрское вознаграждение.
            </p>
            <div className={styles.heroActions}>
              <a href="#become-partner">Стать партнёром</a>
              <a href="#how-it-works">Как это работает</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rewardSection} aria-label="Партнёрское вознаграждение">
        <div className={styles.container}>
          <div className={styles.rewardCard}>
            <div>
              <span>Главное условие</span>
              <h2>10–20% от суммы сделки ежемесячно</h2>
              <p>
                Вы рекомендуете клиента, мы закрываем потребность в маркетинге и ведём проект.
                Если клиент заключает договор, вы получаете партнёрское вознаграждение по согласованным условиям.
              </p>
            </div>
            <div className={styles.rewardMiniGrid}>
              <article>
                <h3>Без необходимости продавать</h3>
                <p>Достаточно передать контакт или познакомить нас с клиентом.</p>
              </article>
              <article>
                <h3>Прозрачная фиксация</h3>
                <p>Клиент закрепляется за партнёром, условия фиксируются до старта.</p>
              </article>
              <article>
                <h3>Долгосрочный доход</h3>
                <p>Если клиент продолжает работать с агентством, вознаграждение может начисляться регулярно.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Кому подходит</span>
            <h2>Партнёрка для тех, кто работает с бизнесом и видит потребность в маркетинге</h2>
          </div>
          <div className={styles.cardsGrid}>
            {partnerAudience.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Что можно рекомендовать</span>
            <h2>Услуги Make All Perfect, которые закрывают разные задачи клиента</h2>
          </div>
          <div className={styles.servicesGrid}>
            {recommendServices.map((item) => (
              <article className={styles.serviceCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.processLayout}>
            <div className={styles.stickyTitle}>
              <span>Как это работает</span>
              <h2>Понятный процесс без хаоса и серых зон</h2>
              <p>
                Мы фиксируем источник клиента, берём на себя диагностику и продажу,
                а партнёр получает вознаграждение по согласованной логике.
              </p>
            </div>

            <div className={styles.steps}>
              {processSteps.map((step, index) => (
                <article className={styles.stepCard} key={step.title}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnerBenefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Для партнёра</span>
            <h2>Что получает партнёр</h2>
          </div>

          <div className={styles.benefitGrid}>
            {partnerBenefits.map((item) => (
              <article className={styles.benefitCard} key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.clientBenefitsSection}>
        <div className={styles.container}>
          <div className={styles.clientBenefitsCard}>
            <div>
              <span>Для клиента</span>
              <h2>Что получает клиент</h2>
              <p>
                Партнёру важно рекомендовать нас без риска для своей репутации.
                Поэтому клиент получает не просто подрядчика, а понятную диагностику,
                стратегию и команду полного цикла.
              </p>
            </div>

            <ul>
              {clientBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Форматы</span>
            <h2>Можно начать с одной рекомендации или выстроить постоянное партнёрство</h2>
          </div>
          <div className={styles.formatGrid}>
            {partnershipFormats.map((item, index) => (
              <article className={styles.formatCard} key={item.title}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.rulesSection}>
        <div className={styles.container}>
          <div className={styles.rulesCard}>
            <div>
              <span>Прозрачность</span>
              <h2>Фиксируем условия заранее и работаем аккуратно</h2>
            </div>
            <div className={styles.rulesList}>
              <p>Размер процента, срок выплат и порядок коммуникации обсуждаются до передачи клиента.</p>
              <p>Если клиент пришёл от вас, он закрепляется за вами как партнёром.</p>
              <p>Мы честно скажем, если клиенту не подходим или задача не в нашей зоне экспертизы.</p>
              <p>Вознаграждение начисляется после фактической оплаты клиента.</p>
              <p>Данные клиента и условия сделки не передаются третьим лицам.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>FAQ</span>
            <h2>Ответы на частые вопросы</h2>
          </div>
          <div className={styles.faqList}>
            {faq.map((item) => (
              <article className={styles.faqItem} key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="become-partner">
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <span>Стать партнёром Make All Perfect</span>
            <h2>Если у вас есть клиенты, которым нужен сильный маркетинг, передайте нам контакт</h2>
            <p>
              Мы аккуратно проведём диагностику, предложим решение и заранее зафиксируем ваши партнёрские условия.
            </p>
            <div className={styles.finalActions}>
              <a href="mailto:makeallperfectcompany@gmail.com?subject=Партнёрская программа Make All Perfect">
                Стать партнёром
              </a>
              <a href="https://t.me/makeallperfectcompany" target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
