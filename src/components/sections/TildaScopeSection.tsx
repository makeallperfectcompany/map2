import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaScopeSection.module.css";

export default function TildaScopeSection() {
 return <section className={styles.section} id="scope"><Container>
  <div className={`${grid.grid2} ${styles.layout}`}>
   <div className={styles.visual}><Image src="/images/services/tilda/tilda-scope-visual.webp" alt="Этапы создания сайта на Tilda под ключ: от задачи до запуска" fill sizes="(min-width: 768px) 46vw, 100vw" /></div>
   <div className={styles.content}><span className={styles.label}>Под ключ</span><h2>Собираем не набор экранов, а цельный путь клиента к заявке</h2><p className={styles.lead}>Финальный состав работ фиксируется после обсуждения проекта. Базовая разработка строится вокруг шести направлений, которые формируют понятный и управляемый сайт.</p><div className={styles.list}>{tildaService.scope.map((x) => <article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div><a className={styles.action} href="#lead-form">Получить состав работ →</a></div>
  </div>
 </Container></section>;
}
