import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { WordPressContent } from "@/content/services/wordpress";
import styles from "./WordPressFoundationSection.module.css";

type Props = { content: WordPressContent["foundation"] };
export default function WordPressFoundationSection({ content }: Props) {
  return <section className={styles.section}><Container>
    <div className={`${grid.grid2} ${styles.layout}`}>
      <figure className={styles.visual}><Image src={content.visual} alt="Удобное управление контентом сайта на WordPress в админ-панели" fill sizes="(max-width: 767px) 100vw, 46vw" /></figure>
      <div className={styles.body}>
        <div className={styles.heading}><h2>{content.title}</h2><p>{content.description}</p></div>
        <article className={styles.accent}><span>WORDPRESS / SYSTEM</span><h3>{content.accentTitle}</h3><p>{content.accentText}</p></article>
        <div className={styles.items}>{content.items.map(item => <article className={styles.item} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </div>
    </div>
  </Container></section>;
}
