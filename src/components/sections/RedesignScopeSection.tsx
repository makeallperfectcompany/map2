import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./RedesignScopeSection.module.css";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";
export default function RedesignScopeSection() {
  const { scope } = redesignServiceContent;
  return <section className={styles.section}><Container><div className={styles.header}><span className={styles.label}>Состав работ</span><h2>{scope.title}</h2><p>{scope.description}</p></div><div className={`${grid.grid2} ${styles.cards}`}>{scope.groups.map((group) => <article className={styles.card} key={group.code}><span className={styles.code}>{group.code}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><Link className={styles.cta} href="#lead-form">{scope.cta} →</Link></Container></section>;
}
