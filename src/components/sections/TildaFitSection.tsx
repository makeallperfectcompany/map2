import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaFitSection.module.css";

export default function TildaFitSection() {
 return <section className={styles.section}><Container>
  <div className={styles.header}><span className={styles.label}>Выбор платформы</span><h2>Tilda даёт быстрый и управляемый запуск — когда задача действительно ей соответствует</h2><p>Мы не предлагаем платформу автоматически. Сначала определяем, нужен ли бизнесу маркетинговый сайт, каталог или магазин в возможностях Tilda — либо проект требует отдельного технологического решения.</p></div>
  <div className={grid.grid2}>
   <article className={`${styles.panel} ${styles.positive}`}><h3>Tilda подходит, если</h3><ul>{tildaService.fit.suitable.map((x) => <li key={x}>{x}</li>)}</ul></article>
   <article className={styles.panel}><h3>Нужно отдельно оценить стек, если</h3><ul>{tildaService.fit.evaluate.map((x) => <li key={x}>{x}</li>)}</ul></article>
  </div>
  <p className={styles.closing}>{tildaService.fit.closing}</p>
 </Container></section>;
}
