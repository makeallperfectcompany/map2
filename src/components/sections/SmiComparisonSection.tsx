import Link from "next/link";
import OpenConsultationButton from "@/components/forms/OpenConsultationButton";
import { Container } from "@/components/ui/Container/Container";
import { smiContent } from "@/content/services/publikatsii-v-smi";
import grid from "@/styles/grid.module.css";
import styles from "./OrmComparisonSection.module.css";
export default function SmiComparisonSection() { const { comparison } = smiContent; return <section className={styles.section}><Container><div className={styles.header}><h2>{comparison.title}</h2><p>{comparison.description}</p></div><div className={`${grid.grid2} ${styles.cards}`}><article className={`${styles.card} ${styles.primary}`}><span>SMI</span><h3>Публикации в СМИ</h3><ul>{comparison.orm.map((v) => <li key={v}>{v}</li>)}</ul></article><article className={styles.card}><span>ADS</span><h3>Контекстная реклама</h3><ul>{comparison.serm.map((v) => <li key={v}>{v}</li>)}</ul></article></div><div className={styles.footer}><p>{comparison.conclusion}</p><Link href={comparison.linkHref}>{comparison.linkLabel}</Link><OpenConsultationButton as="a" className={styles.cta}>{comparison.cta}</OpenConsultationButton></div></Container></section>; }
