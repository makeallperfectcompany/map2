import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { yandexKitContent } from "@/content/services/yandexKit";
import styles from "./YandexKitServiceSections.module.css";

export function YandexKitFitSection() {
  const { fit, features } = yandexKitContent;
  return <>
    <section className={`${styles.section} ${styles.lightSection}`}>
      <Container>
        <div className={`${grid.grid2} ${styles.alignCenter}`}>
          <div className={styles.sectionCopy}><span className={styles.pill}>Яндекс KIT</span><h2>{fit.title}</h2><p>{fit.description}</p><aside className={styles.notice}>{fit.note}</aside></div>
          <figure className={styles.visualCard}><Image src={fit.image} alt="" width={1536} height={1024} /></figure>
        </div>
      </Container>
    </section>
    <section className={`${styles.section} ${styles.whiteSection}`}>
      <Container>
        <div className={styles.sectionHead}><span className={styles.pill}>Состав работ</span><h2>Собираем магазин не как шаблон, а как рабочую систему продаж</h2></div>
        <div className={grid.grid3}>{features.map((item, index) => <article className={styles.infoCard} key={item.title}><span>{String(index + 1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </Container>
    </section>
  </>;
}

export function YandexKitScenariosSection() {
  return <section className={`${styles.section} ${styles.softSection}`}><Container><div className={styles.sectionHead}><span className={styles.pill}>Сценарии</span><h2>Подключаемся там, где находится ваш бизнес сейчас</h2></div><div className={grid.grid3}>{yandexKitContent.scenarios.map((item,index)=><article className={`${styles.scenarioCard} ${index===1?styles.accentPanel:""}`} key={item.title}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.audience}</p><ul>{item.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></Container></section>;
}

export function YandexKitIntegrationsSection() {
  const data = yandexKitContent.integrations;
  return <section className={`${styles.section} ${styles.whiteSection}`}><Container><div className={`${grid.grid2} ${styles.alignCenter}`}><figure className={styles.visualCard}><Image src={data.image} alt="" width={1536} height={1024}/></figure><div className={styles.sectionCopy}><span className={styles.pill}>Интеграции</span><h2>{data.title}</h2><p>{data.description}</p><div className={styles.integrationList}>{data.items.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></div></Container></section>;
}

export function YandexKitProcessSection() {
  return <section className={`${styles.section} ${styles.softSection}`}><Container><div className={grid.gridAsymmetric}><div className={styles.sectionCopy}><span className={styles.pill}>Процесс</span><h2>Пять этапов до опубликованного магазина</h2><p>Сначала проверяем применимость платформы, затем последовательно собираем и тестируем магазин.</p></div><ol className={styles.timeline}>{yandexKitContent.process.map((item,index)=><li key={item.title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></div></Container></section>;
}

export function YandexKitPriceSection() {
  const { price } = yandexKitContent;
  return <section className={`${styles.section} ${styles.whiteSection}`} id="price"><Container><div className={`${styles.pricePanel} ${styles.accentPanel}`}><div><span>Стоимость запуска</span><h2>{price.title}</h2><p>{price.text}</p></div><Link className={`${styles.btn} ${styles.btnAccent}`} href="#lead-form">{price.cta}<span>↗</span></Link></div></Container></section>;
}
