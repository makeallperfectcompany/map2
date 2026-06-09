import Image from 'next/image';
import { Container } from '@/components/ui/Container/Container';
import styles from './SermSearchTrustSection.module.css';
export function SermSearchTrustSection() { return <section className={styles.section}><Container><div className={styles.grid}><div><h2>Решение о доверии принимают ещё в поиске</h2><p>Человек может не написать, не позвонить и не оставить заявку просто потому, что выдача вызвала сомнение.</p><p>SERM помогает сделать так, чтобы поисковая выдача не работала против вас.</p></div><div className={styles.visual}><Image src="/images/services/serm/search-reputation-visual.webp" alt="Абстрактный визуал поисковой репутации" fill /></div></div></Container></section>; }
