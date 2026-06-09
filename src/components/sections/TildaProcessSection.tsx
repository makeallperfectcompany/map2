import { Container } from "@/components/ui/Container/Container";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaProcessSection.module.css";

export default function TildaProcessSection() {
 return <section className={styles.section}><Container><div className={styles.header}><span className={styles.label}>Процесс</span><h2>От идеи до опубликованного сайта — по прозрачным этапам</h2><p>Проводим проект последовательно: от задачи и прототипа до проверки запуска и передачи результата.</p></div><ol className={styles.timeline}>{tildaService.process.map((x) => <li key={x.step}><strong>{x.step}</strong><h3>{x.title}</h3><p>{x.text}</p></li>)}</ol><a className={styles.action} href="#lead-form">Обсудить задачу и оценку →</a></Container></section>;
}
