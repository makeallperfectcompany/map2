import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container/Container";
import grid from "@/styles/grid.module.css";
import type { ServiceContent } from "@/content/services/posevy-v-socsetyah";
import styles from "./PosevyPageSections.module.css";

interface Props {
  content: ServiceContent;
}

export default function PosevyPageSections({ content }: Props) {
  return (
    <>
      <section className={styles.lightSection}>
        <Container>
          <div className={`${grid.grid2} ${styles.centerGrid}`}>
            <div>
              <h2 className={styles.h2}>{content.intro.title}</h2>
              {content.intro.text.map((paragraph) => (
                <p className={styles.lead} key={paragraph}>{paragraph}</p>
              ))}
              <Link className={styles.textCta} href="#final-cta">{content.intro.cta}</Link>
            </div>
            <div className={styles.visualCard}>
              <Image src={content.intro.image} alt="Нативное распространение контента по релевантным площадкам" width={900} height={1125} />
            </div>
          </div>
          <div className={`${grid.grid2} ${styles.cardGrid}`}>
            {content.intro.cards.map((card) => <InfoCard key={card.title} {...card} />)}
          </div>
        </Container>
      </section>

      <section className={styles.whiteSection}>
        <Container>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{content.platforms.title}</h2>
            <p className={styles.lead}>{content.platforms.description}</p>
          </div>
          <div className={grid.grid3}>
            {content.platforms.cards.map((card, index) => (
              <InfoCard key={card.title} {...card} code={String(index + 1).padStart(2, "0")} />
            ))}
          </div>
          <Link className={styles.bottomCta} href="#final-cta">{content.platforms.cta}</Link>
        </Container>
      </section>

      <section className={styles.blueWrap}>
        <Container>
          <div className={`${grid.grid2} ${styles.centerGrid}`}>
            <div className={styles.blueContent}>
              <h2>{content.risks.title}</h2>
              {content.risks.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <Link className={styles.lightButton} href="#final-cta">{content.risks.cta}</Link>
            </div>
            <div className={styles.blueVisual}>
              <Image src={content.risks.image} alt="Проверка площадок перед рекламными посевами" width={960} height={720} />
            </div>
          </div>
          <div className={`${grid.grid2} ${styles.blueCards}`}>
            {content.risks.cards.map((card) => <DarkCard key={card.title} {...card} />)}
          </div>
        </Container>
      </section>

      <section className={styles.lightSection}>
        <Container>
          <div className={`${grid.grid2} ${styles.centerGrid}`}>
            <div className={styles.visualCard}>
              <Image src={content.process.image} alt="Процесс запуска рекламных посевов под ключ" width={900} height={1125} />
            </div>
            <div>
              <h2 className={styles.h2}>{content.process.title}</h2>
              <div className={styles.stepsList}>
                {content.process.steps.map((step) => (
                  <article className={styles.stepCard} key={step.title}>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Link className={styles.textCta} href="#final-cta">{content.process.cta}</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.whiteSection}>
        <Container>
          <div className={styles.sectionHeadWide}>
            <h2 className={styles.h2}>{content.formats.title}</h2>
          </div>
          <div className={grid.grid3}>
            {content.formats.cards.map((card) => <InfoCard key={card.title} {...card} />)}
          </div>
        </Container>
      </section>

      <section className={styles.pricingSection} id="pricing">
        <Container>
          <div className={`${grid.grid2} ${styles.centerGrid}`}>
            <div>
              <h2 className={styles.h2}>{content.pricing.title}</h2>
              <p className={styles.lead}>{content.pricing.text}</p>
              <p className={styles.note}>{content.pricing.note}</p>
            </div>
            <aside className={styles.priceCard}>
              <span>Посевы в соцсетях под ключ</span>
              <strong>{content.pricing.price}</strong>
              <ul>
                {content.pricing.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link className={styles.priceButton} href="#final-cta">{content.pricing.cta}</Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className={styles.industriesSection}>
        <Container>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{content.industries.title}</h2>
            <p className={styles.lead}>{content.industries.description}</p>
          </div>
          <div className={grid.grid3}>
            {content.industries.cards.map((card, index) => (
              <InfoCard key={card.title} {...card} code={String(index + 1).padStart(2, "0")} />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.techSection}>
        <Container>
          <div className={styles.techHead}>
            <h2>{content.technologies.title}</h2>
            <p>{content.technologies.description}</p>
          </div>
          <div className={grid.grid3}>
            {content.technologies.cards.map((card) => <TechCard key={card.title} {...card} />)}
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoCard({ title, text, code }: { title: string; text: string; code?: string }) {
  return (
    <article className={styles.infoCard}>
      {code ? <span className={styles.cardCode}>{code}</span> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function DarkCard({ title, text }: { title: string; text: string }) {
  return (
    <article className={styles.darkCard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function TechCard({ title, text }: { title: string; text: string }) {
  return (
    <article className={styles.techCard}>
      <span>{title}</span>
      <p>{text}</p>
    </article>
  );
}
