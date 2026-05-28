import { Container } from '@/components/ui/Container/Container';
import { wordpressDevelopmentContent as content } from '@/content/services/wordpressDevelopment';
import grid from '@/styles/grid.module.css';
import styles from './WordpressProcessSection.module.css';
export function WordpressProcessSection(){const {process}=content;return <section className={styles.section}><Container><div className={grid.grid2}><div className={styles.heading}><p className={styles.label}>{process.label}</p><h2>{process.title}</h2></div></div><div className={grid.grid3}>{process.items.map((item,index)=><article key={item.title} className={styles.card}><p className={styles.number}>{String(index+1).padStart(2,'0')}</p><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></Container></section>}
