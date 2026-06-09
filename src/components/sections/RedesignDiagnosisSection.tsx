import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import styles from "./RedesignDiagnosisSection.module.css";
import { redesignServiceContent } from "@/content/services/redizayn-i-dorabotka-saytov";

export default function RedesignDiagnosisSection() {
  const { diagnosis } = redesignServiceContent;
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${grid.grid2} ${styles.layout}`}>
          <div className={`${styles.visual} ${styles.visualDesktop}`}><Image src={diagnosis.image} alt="Редизайн и доработка сайта — диагностика пути клиента" fill sizes="(min-width: 768px) 46vw, 1px" /></div>
          <div className={styles.content}>
            <span className={styles.label}>Диагностика</span>
            <h2>{diagnosis.title}</h2>
            <p className={styles.description}>{diagnosis.description}</p>
            <div className={`${styles.visual} ${styles.visualMobile}`}><Image src={diagnosis.image} alt="Редизайн и доработка сайта — диагностика пути клиента" fill sizes="(min-width: 768px) 1px, 100vw" /></div>
            <div className={styles.list}>
              {diagnosis.items.map((item, index) => (
                <article className={styles.item} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
            <Link href="#lead-form" className={styles.link}>{diagnosis.cta} →</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
