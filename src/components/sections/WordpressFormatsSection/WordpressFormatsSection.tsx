import { Container } from '@/components/ui/Container/Container';
import { wordpressDevelopmentContent as content } from '@/content/services/wordpressDevelopment';
import grid from '@/styles/grid.module.css';
import styles from './WordpressFormatsSection.module.css';
export function WordpressFormatsSection(){const {formats}=content;return <section className={styles.section}><Container><p className={styles.label}>{formats.label}</p><div className={`${grid.grid2} ${styles.heading}`}><h2>{formats.title}</h2><p>{formats.description}</p></div><div className={grid.grid4}>{formats.items.map((item,index)=><article key={item.title} className={`${styles.card} ${index===0?styles.featured:''}`}><p className={styles.meta}>{item.meta}</p><h3>{item.title}</h3><p className={styles.text}>{item.text}</p><div className={styles.tags}>{item.tags?.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div></Container></section>}
