import { personalDataConsent } from "@/content/legal/personalDataConsent";
import styles from "./PersonalDataConsentPageSection.module.css";

export default function PersonalDataConsentPageSection() {
  return (
    <main className={styles.consentPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>Юридическая информация</div>
              <h1>Согласие на обработку персональных данных</h1>
              <p>
                Заполняя формы на сайте Make All Perfect, пользователь подтверждает
                согласие на обработку данных, необходимых для связи, консультации
                и подготовки предложения.
              </p>
            </div>

            <aside className={styles.operatorCard} aria-label="Кому даётся согласие">
              <span>Кому даётся согласие</span>
              <strong>{personalDataConsent.operator.name}</strong>
              <dl>
                <div><dt>ИНН</dt><dd>{personalDataConsent.operator.inn}</dd></div>
                <div><dt>ОГРН/ОГРНИП</dt><dd>{personalDataConsent.operator.ogrnip}</dd></div>
                <div><dt>Email</dt><dd>{personalDataConsent.operator.email}</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <aside className={styles.navCard} aria-label="Содержание документа">
              <span>Содержание</span>
              <ol>
                {personalDataConsent.sections.map((section) => (
                  <li key={section.title}>
                    <a href={`#${slugify(section.title)}`}>{section.title.replace(/^\d+\.\s*/, "")}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <article className={styles.document}>
              {personalDataConsent.sections.map((section) => (
                <section className={styles.documentBlock} id={slugify(section.title)} key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <div className={styles.finalCard}>
                <h2>Связанные документы</h2>
                <p>
                  Подробная информация о cookie, аналитике, формах обратной связи,
                  правах пользователя и защите данных находится в Политике конфиденциальности.
                </p>
                <a className={styles.contactButton} href="/privacy-policy">
                  Открыть политику конфиденциальности
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^а-яёa-z0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "");
}
