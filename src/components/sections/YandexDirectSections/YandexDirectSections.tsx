import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { yandexDirectContent } from "@/content/services/yandex-direct";
import styles from "./YandexDirectSections.module.css";

export function YandexDirectHeroSection() {
  const { hero } = yandexDirectContent;
  return (
    <section className={styles.heroSection}>
      <Container className={styles.heroInner}>
        <div className={styles.heroText}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className={styles.heroActions}>
            <a className={`${styles.btn} ${styles.btnAccent}`} href="#audit"><span>{hero.primaryCta}</span><span aria-hidden="true">↗</span></a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#contact"><span>{hero.secondaryCta}</span><span aria-hidden="true">↗</span></a>
          </div>
          <p className={styles.trustLine}>{hero.trustLine}</p>
        </div>
      </Container>
    </section>
  );
}

export function YandexDirectSystemSection() {
  const { system } = yandexDirectContent;
  return (
    <section className={styles.sectionLight}>
      <Container className={styles.splitLayout}>
        <div>
          <h2>{system.title}</h2>
          <p className={styles.lead}>{system.text}</p>
          <div className={`${grid.grid4} ${styles.cardsTight}`}>
            {system.cards.map(([title, text]) => <article className={styles.card} key={title}><span className={styles.dot} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
        <div className={`${styles.cssVisual} ${styles.systemVisual}`} aria-hidden="true"><i /><i /><i /><i /></div>
      </Container>
    </section>
  );
}

export function YandexDirectSetupSection() {
  const { setup } = yandexDirectContent;
  const icons = ["lens", "structure", "filter", "offer", "target", "check"];
  return (
    <section className={styles.sectionSoft}>
      <Container>
        <div className={styles.sectionHead}><h2>{setup.title}</h2><p>{setup.text}</p></div>
        <div className={grid.grid3}>
          {setup.cards.map(([title, text], index) => <article className={styles.serviceCard} key={title}><div className={`${styles.cssIcon} ${styles[icons[index]]}`} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </Container>
    </section>
  );
}

export function YandexDirectManagementSection() {
  const { management } = yandexDirectContent;
  return (
    <section className={styles.sectionWhite}>
      <Container className={styles.managementLayout}>
        <article className={styles.blueCard}><h2>{management.title}</h2><p>{management.text}</p></article>
        <div className={styles.workList}>{management.actions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Container>
      <Container className={styles.visualBand}><Image src="/images/services/yandex-direct/yandex-direct-management-visual.webp" alt="Настройка и ведение Яндекс Директ — Make All Perfect" width={1600} height={1000} /></Container>
    </section>
  );
}

export function YandexDirectAuditSection() {
  const { audit } = yandexDirectContent;
  return (
    <section id="audit" className={styles.sectionLight}>
      <Container className={styles.splitLayout}>
        <div>
          <h2>{audit.title}</h2>
          <p className={styles.lead}>{audit.text}</p>
          <ul className={styles.checkList}>{audit.checks.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className={`${styles.btn} ${styles.btnAccent} ${styles.auditCta}`} href="#contact"><span>{audit.cta}</span><span aria-hidden="true">↗</span></a>
        </div>
        <div className={`${styles.cssVisual} ${styles.auditVisual}`} aria-hidden="true"><i /><i /><i /></div>
      </Container>
    </section>
  );
}

export function YandexDirectPricingSection() {
  const { pricing } = yandexDirectContent;
  return (
    <section className={styles.sectionSoft}>
      <Container>
        <div className={styles.sectionHead}><h2>{pricing.title}</h2></div>
        <div className={grid.grid3}>
          {pricing.cards.map((card, index) => (
            <article className={`${styles.priceCard} ${index === 1 ? styles.featuredPrice : ""}`} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={styles.priceIncluded}>
                <span className={styles.priceIncludedLabel}>Что входит:</span>
                <ul>{card.included.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <strong>{card.price}</strong>
              <a className={styles.priceCta} href="#contact">Обсудить</a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function YandexDirectProcessSection() {
  const { process } = yandexDirectContent;
  return <section className={styles.sectionWhite}><Container className={styles.processLayout}><div><h2>{process.title}</h2><p className={styles.lead}>{process.text}</p></div><div className={styles.processCards}>{process.steps.map(([title, text], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}

export function YandexDirectFitSection() {
  const { fit } = yandexDirectContent;
  return <section className={styles.sectionLight}><Container><div className={styles.sectionHead}><h2>{fit.title}</h2></div><div className={grid.grid3}>{fit.cards.map(([title, text]) => <article className={styles.card} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}
