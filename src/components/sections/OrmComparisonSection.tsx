import Link from "next/link";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import { ormContent } from "@/content/services/orm";
import grid from "@/styles/grid.module.css";
import styles from "./OrmComparisonSection.module.css";
export default function OrmComparisonSection() { const { comparison } = ormContent; return <section className={styles.section}><Container><div className={styles.header}><h2>{comparison.title}</h2><p>{comparison.description}</p></div><div className={`${grid.grid2} ${styles.cards}`}><article className={`${styles.card} ${styles.primary}`}><span>ORM</span><h3>Управление репутацией в интернете</h3><ul>{comparison.orm.map((v) => <li key={v}>{v}</li>)}</ul></article><article className={styles.card}><span>SERM</span><h3>Репутация в поисковой выдаче</h3><ul>{comparison.serm.map((v) => <li key={v}>{v}</li>)}</ul></article></div><div className={styles.footer}><p>{comparison.conclusion}</p><Link href={comparison.linkHref}>{comparison.linkLabel}</Link><OpenConsultationButton as="a" className={styles.cta}>{comparison.cta}</OpenConsultationButton></div></Container></section>; }
