import styles from './ReactSolutionsSection.module.css';

type Props = { content: { label: string; title: string; text: string; cta: string; items: Array<{ title: string; text: string }> } };
export default function ReactSolutionsSection({ content }: Props) {
  return <section className={styles.section}><div className={styles.container}><div className={styles.grid}><div className={styles.panel}><span>{content.label}</span><h2>{content.title}</h2><p>{content.text}</p><a href="#form">{content.cta}</a></div><div className={styles.list}>{content.items.map((item)=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></div></section>;
}
