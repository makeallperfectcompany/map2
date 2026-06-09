import { Container } from '@/components/ui/Container/Container';
import styles from './LocalSeoDifferenceSection.module.css';
import { localSeoContent } from '@/content/services/localSeo';
export function LocalSeoDifferenceSection(){const s=localSeoContent.difference;return <section className={styles.section}><Container><div className={styles.grid}><div><h2>{s.title}</h2><p>{s.text}</p></div><div className={styles.cards}>{s.cards.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></Container></section>}
