import { Container } from '@/components/ui/Container/Container';
import { wordpressDevelopmentContent as content } from '@/content/services/wordpressDevelopment';
import grid from '@/styles/grid.module.css';
import styles from './WordpressDevelopmentSection.module.css';
export function WordpressDevelopmentSection(){const {development}=content;return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.heading}`}><div><p className={styles.label}>{development.label}</p><h2>{development.title}</h2></div><p>{development.description}</p></div><div className={grid.grid3}>{development.items.map((item,index)=><article key={item.title} className={`${styles.card} ${index===3?styles.featured:''}`}><p className={styles.meta}>{item.meta}</p><h3>{item.title}</h3><strong>{item.meta}</strong><p className={styles.text}>{item.text}</p></article>)}</div></Container></section>}
