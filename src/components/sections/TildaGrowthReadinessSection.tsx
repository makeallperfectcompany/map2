import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { tildaService } from "@/content/services/tilda";
import styles from "./TildaGrowthReadinessSection.module.css";

export default function TildaGrowthReadinessSection() {
 return <section className={styles.section}><Container><div className={`${grid.grid2} ${styles.layout}`}><div className={styles.content}><span className={styles.label}>Развитие</span><h2>Запускаем сайт так, чтобы ему было куда расти</h2><p className={styles.lead}>Сайт на Tilda может быть не только визуальной презентацией, но и посадочной основой для рекламы, SEO и контентных сценариев. Поэтому ещё до публикации предусматриваем структуру, HTML-контент, понятные CTA и требования к измерению обращений.</p><div className={styles.accents}>{tildaService.readiness.map((x) => <article key={x.title}><h3>{x.title}</h3><p>{x.text}</p></article>)}</div><a href="#lead-form" className={styles.action}>Обсудить сайт и продвижение →</a></div><div className={styles.visual}><Image src="/images/services/tilda/tilda-growth-readiness.webp" alt="Сайт на Tilda под продвижение и SEO: структура, контент, CTA и аналитика" fill sizes="(min-width: 768px) 50vw, 100vw" /></div></div></Container></section>;
}
