import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container/Container';
import { wordpressDevelopmentContent as content } from '@/content/services/wordpressDevelopment';
import grid from '@/styles/grid.module.css';
import styles from './WordpressMarketingFoundationSection.module.css';
export function WordpressMarketingFoundationSection(){const {marketing}=content;return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.layout}`}><div className={styles.copy}><p className={styles.label}>{marketing.label}</p><h2>{marketing.title}</h2><p className={styles.description}>{marketing.description}</p><div className={`${grid.grid2} ${styles.items}`}>{marketing.items.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><Link href="#request" className={styles.button}>Обсудить структуру сайта <span>↗</span></Link><p className={styles.disclaimer}>{marketing.disclaimer}</p></div><figure className={styles.visual}><Image src={marketing.image} alt="" fill sizes="(min-width: 1280px) 46vw, 100vw" className={styles.image}/></figure></div></Container></section>}
