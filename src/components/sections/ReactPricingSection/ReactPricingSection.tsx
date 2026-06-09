import styles from './ReactPricingSection.module.css';

type Props = { content: { label: string; title: string; text: string; price: string; note: string; includes: string[]; primaryCta: string; secondaryCta: string } };
export default function ReactPricingSection({ content }: Props) {
  return <section id="price" className={styles.section}><div className={styles.container}><div className={styles.grid}><div><span className={styles.label}>{content.label}</span><h2>{content.title}</h2><p className={styles.lead}>{content.text}</p><ul>{content.includes.map((item)=><li key={item}>{item}</li>)}</ul></div><aside className={styles.panel}><p>Разработка сайта на React</p><strong>{content.price}</strong><span>{content.note}</span><div><a className={styles.btnLight} href="#form">{content.primaryCta}</a><a className={styles.btnGhost} href="#form">{content.secondaryCta}</a></div></aside></div></div></section>;
}
