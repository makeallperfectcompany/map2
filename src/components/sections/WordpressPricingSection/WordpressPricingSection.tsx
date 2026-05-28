import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { wordpressDevelopmentContent as content } from '@/content/services/wordpressDevelopment';
import grid from '@/styles/grid.module.css';
import styles from './WordpressPricingSection.module.css';
export function WordpressPricingSection(){const {pricing}=content;return <section className={styles.section}><Container><p className={styles.label}>{pricing.label}</p><div className={`${grid.grid2} ${styles.heading}`}><h2>{pricing.title}</h2><p>{pricing.description}</p></div><div className={grid.grid4}>{pricing.items.map(item=><article key={item.title} className={`${styles.card} ${item.featured?styles.featured:''}`}><p className={styles.meta}>{item.meta}</p><h3>{item.title}</h3><p className={styles.text}>{item.description}</p><strong>{item.price}</strong><Link href="#request">{item.cta} ↗</Link></article>)}</div><div className={styles.addons}><div><strong>Дополнительные интеграции и сопровождение</strong><p>{pricing.addons}</p></div><Link href="#request" className={styles.button}>Получить расчёт проекта <span>↗</span></Link></div></Container></section>}
