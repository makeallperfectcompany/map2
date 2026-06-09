import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./RedesignSeoSafetySection.module.css";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";
export default function RedesignSeoSafetySection() {
 const { seoSafety } = redesignServiceContent;
 return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.layout}`}><div className={styles.copy}><span className={styles.label}>Аккуратный запуск</span><h2>{seoSafety.title}</h2><p>{seoSafety.description}</p><p className={styles.note}>{seoSafety.note}</p></div><aside className={styles.panel}><span>CONTROL</span><h3>{seoSafety.panelTitle}</h3><ul>{seoSafety.checks.map(check => <li key={check}>{check}</li>)}</ul></aside></div></Container></section>;
}
