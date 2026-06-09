import styles from './ReactProcessSection.module.css';

type Props = { content: { label: string; title: string; text: string; steps: Array<{ number: string; title: string; text: string }> } };
export default function ReactProcessSection({ content }: Props) {
  return <section className={styles.section}><div className={styles.container}><span className={styles.label}>{content.label}</span><h2>{content.title}</h2><p className={styles.lead}>{content.text}</p><div className={styles.timeline}>{content.steps.map((step)=><article key={step.number}><b>{step.number}</b><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>;
}
