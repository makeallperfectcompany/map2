import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { crmMarketingPage as data } from "@/content/services/crmMarketing";
import styles from "./CrmMarketingPage.module.css";

export default function CrmMarketingPage() {
  return (
    <>   
      <section className={styles.heroSection} style={{ backgroundImage: `url(${data.hero.background})` }}>
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1>{data.hero.title}</h1>
            <p>{data.hero.description}</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryBtn} href="#lead-form">{data.hero.primaryCta}</a>
              <a className={styles.secondaryBtn} href="#lead-form">{data.hero.secondaryCta}</a>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.lightSection}><Container className={styles.valueGrid}>
        <div><h2>{data.value.title}</h2>{data.value.paragraphs.map((p) => <p className={styles.lead} key={p}>{p}</p>)}</div>
        <aside className={styles.valueSide}><div className={styles.bluePanel}><span>База перестаёт быть списком контактов и становится системой повторных продаж.</span><strong>Что вы получаете:</strong></div><div className={styles.miniGrid}>{data.value.cards.map((card) => <article key={card}><h3>{card}</h3></article>)}</div></aside>
      </Container></section>

      <section className={styles.darkSection}><Container><div className={styles.sectionHead}><h2>Настраиваем не разовую рассылку, а систему персональных касаний</h2><p>CRM-маркетинг работает, когда есть логика: кому, когда, в каком канале и с каким предложением обращаться. Мы собираем эту систему целиком.</p></div><div className={styles.scopeGrid}>{data.scope.map(([code,title,text]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>

      <section className={styles.lightSection}><Container className={styles.audienceGrid}><article className={styles.bigCard}><h2>CRM-маркетинг нужен бизнесу, где клиент принимает решение не за один визит</h2><p>Если в базе уже есть заявки, покупатели или подписчики, но системной работы с ними нет — вы теряете часть прибыли каждый месяц.</p></article><div className={styles.audienceCards}>{data.audience.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>

      <section className={styles.lightSection}><Container className={styles.processGrid}><div className={styles.stickyCopy}><h2>Сначала находим точки потерь — затем запускаем сценарии, которые можно измерить</h2><p className={styles.lead}>Процесс строится как управляемая система: аудит, стратегия, сегменты, автоматизация, тестирование и оптимизация.</p></div><div className={styles.timeline}>{data.process.map(([num,title,text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>

      <section className={styles.lightSection}><Container className={styles.automationGrid}><div><h2>Автоматизация работает по событиям, а не по догадкам</h2><p className={styles.lead}>Сильный CRM-маркетинг невозможен без данных. Сценарий должен понимать, что произошло: клиент оставил заявку, купил товар, не завершил заказ, давно не возвращался или проявил интерес к конкретной услуге. Мы подключаем все источники данных и связываем их в единую систему.</p><div className={styles.miniGrid}>{data.automation.map((item) => <article key={item}><h3>{item}</h3></article>)}</div></div><div className={styles.visualCard}><Image src="/images/services/crm-marketing/crm-automation-visual.webp" alt="" fill sizes="(min-width: 1280px) 520px, 100vw" /></div></Container></section>

      <section className={styles.lightSection}><Container className={styles.pricingGrid}><div className={styles.pricePanel}><span>Стоимость</span><strong>от 50 000 ₽</strong><p>Точная сумма зависит от объёма базы, числа каналов и сценариев, интеграций, объёма текстов, аналитики и сопровождения. На бесплатном аудите мы называем понятную вилку под вашу задачу — без скрытых платежей.</p><a className={styles.primaryBtn} href="#lead-form">{data.pricing.cta}</a></div><div className={styles.factorList}><h2>Стоимость CRM-маркетинга — от 50 000 ₽</h2><ul><li>объём и качество клиентской базы;</li><li>количество сегментов и сценариев;</li><li>набор каналов: email, SMS, мессенджеры, push;</li><li>интеграции с сайтом, CRM, рекламой и аналитикой;</li><li>регулярное сопровождение, тестирование и оптимизация.</li></ul></div></Container></section>

      <section className={styles.lightSection}><Container><div className={styles.sectionHead}><h2>Где CRM-маркетинг быстрее всего превращается в деньги</h2><p>CRM заметнее всего работает там, где клиент может вернуться, купить повторно, дозреть до решения или выбрать более дорогой продукт после серии точных касаний.</p></div><div className={styles.industriesGrid}>{data.industries.map(([title,text,img]) => <article key={title}><Image src={img} alt="" width={96} height={96} /><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>

      <section className={styles.darkSection}><Container><div className={styles.sectionHead}><h2>Технологии, которые делают CRM-маркетинг управляемым</h2><p>CRM-маркетинг работает на связке данных, событий, сегментов, каналов и аналитики.</p></div><div className={styles.techStats}>{data.technologies.map((tech) => <article key={tech.code}><h3>{tech.code}</h3><p>{tech.text}</p></article>)}</div></Container></section>

    </>
  );
}
