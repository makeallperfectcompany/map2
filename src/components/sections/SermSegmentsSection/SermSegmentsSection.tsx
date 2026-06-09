import styles from './SermSegmentsSection.module.css';
import { Container } from '@/components/ui/Container/Container';
const items = ['Для компании','Для продукта','Для персоны','Для работодателя'];
export function SermSegmentsSection() { return <section className={styles.section}><Container><div className={styles.grid}><div><h2>SERM для компаний, продуктов и персон</h2><p>Поисковая репутация особенно важна там, где перед решением человек обязательно проверяет бренд, руководителя или продукт.</p></div><div className={styles.cards}>{items.map((item) => <article key={item}><h3>{item}</h3><p>Сегмент и его поисковые риски описаны в утверждённом тексте.</p></article>)}</div></div></Container></section>; }
