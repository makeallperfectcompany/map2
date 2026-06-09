import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import { modxDevelopment as content } from "@/content/services/modx-development";
import styles from "./ModxUniqueSections.module.css";

function Label({ children }: { children: string }) { return <span className={styles.label}>{children}</span>; }
function ArrowButton({ href, children, accent = false }: { href: string; children: string; accent?: boolean }) {
  return <Link href={href} className={`${styles.btn} ${accent ? styles.btnAccent : styles.btnGhost}`}><span>{children}</span><span aria-hidden="true">↗</span></Link>;
}

export function ModxHeroSection() {
  return <section className={styles.heroSection} aria-labelledby="modx-hero-title"><Container><div className={styles.heroCopy}><h1 id="modx-hero-title">{content.hero.title}</h1><p>{content.hero.description}</p><div className={styles.heroActions}><ArrowButton href="#lead-form" accent>{content.hero.primaryCta}</ArrowButton><ArrowButton href="#modx-price">{content.hero.secondaryCta}</ArrowButton></div></div></Container></section>;
}

export function ModxFitSection() {
  return <section className={styles.lightSection}><Container><Label>{content.fit.label}</Label><div className={styles.heading}><h2>{content.fit.title}</h2><p>{content.fit.description}</p></div><div className={`${grid.gridAsymmetric} ${styles.fitLayout}`}><div className={styles.fitBody}><div className={grid.grid2}>{content.fit.reasons.map((item) => <article className={styles.softCard} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><aside className={styles.bluePanel}><h3>{content.fit.panelTitle}</h3><p>{content.fit.panelText}</p><Link href="#lead-form">{content.fit.panelCta} →</Link></aside></div><Image className={styles.portraitVisual} src="/images/services/modx-development/modx-architecture.webp" alt="Разработка сайта на MODX под ключ — архитектура и управление контентом" width={960} height={1200} /></div></Container></section>;
}

export function ModxFormatsSection() {
  return <section className={styles.whiteSection}><Container><div className={styles.editorialLayout}><div><Label>{content.formats.label}</Label><h2>{content.formats.title}</h2><p>{content.formats.description}</p></div><div className={styles.editorialRows}>{content.formats.items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></Container></section>;
}

export function ModxFoundationSection() {
  return <section className={styles.lightSection}><Container><div className={`${grid.grid2} ${styles.foundationLayout}`}><Image className={styles.portraitVisual} src="/images/services/modx-development/modx-foundation.webp" alt="Создание сайта на MODX — основа для заявок и SEO-продвижения" width={960} height={1200} /><div><Label>{content.foundation.label}</Label><h2>{content.foundation.title}</h2><p className={styles.intro}>{content.foundation.description}</p><div className={grid.grid2}>{content.foundation.items.map((item) => <article className={styles.softCard} key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><Link className={styles.textLink} href="#lead-form">Получить бесплатную оценку проекта →</Link></div></div></Container></section>;
}

export function ModxProcessSection() {
  return <section className={styles.whiteSection}><Container><div className={styles.processLayout}><div className={styles.processHeading}><Label>{content.process.label}</Label><h2>{content.process.title}</h2><p>{content.process.description}</p></div><div className={styles.timeline}>{content.process.steps.map((step, index) => <article key={step.title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div></div></Container></section>;
}

export function ModxPricingSection() {
  return <section className={styles.pricingSection} id="modx-price"><Container><div className={styles.bluePricePanel}><div><span className={styles.darkLabel}>{content.pricing.label}</span><h2>{content.pricing.title}</h2><p>{content.pricing.text}</p><Link className={styles.priceCta} href="#lead-form">Узнать точную стоимость →</Link></div><div className={styles.priceSide}><strong>{content.pricing.price}</strong><span>{content.pricing.subline}</span><ul>{content.pricing.factors.map((factor) => <li key={factor}>{factor}</li>)}</ul><aside><b>{content.pricing.noteTitle}</b><p>{content.pricing.noteText}</p></aside></div></div></Container></section>;
}

export function ModxExistingSiteSection() {
  return <section className={styles.lightSection}><Container><div className={`${grid.grid2} ${styles.existingLayout}`}><div><Label>{content.existing.label}</Label><h2>{content.existing.title}</h2><p className={styles.intro}>{content.existing.description}</p><ul className={styles.serviceList}>{content.existing.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className={styles.textLink} href="#lead-form">Обсудить доработку сайта →</Link></div><Image className={styles.landscapeVisual} src="/images/services/modx-development/modx-evolution.webp" alt="Доработка и развитие сайта на MODX — без пересборки с нуля" width={1200} height={960} /></div></Container></section>;
}
