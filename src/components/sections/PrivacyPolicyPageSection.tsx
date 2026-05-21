import { privacyPolicy } from "@/content/legal/privacyPolicy";
import styles from "./PrivacyPolicyPageSection.module.css";

export default function PrivacyPolicyPageSection() {
  return (
    <main className={styles.privacyPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>Юридическая информация</div>
              <h1>Политика конфиденциальности</h1>
              <p>
                Здесь описано, какие данные мы можем получать через сайт Make All Perfect,
                зачем они используются, как защищаются и как пользователь может управлять
                своими правами.
              </p>
            </div>

            <aside className={styles.operatorCard} aria-label="Оператор персональных данных">
              <span>Оператор персональных данных</span>
              <strong>{privacyPolicy.operator.name}</strong>
              <dl>
                <div><dt>ИНН</dt><dd>{privacyPolicy.operator.inn}</dd></div>
                <div><dt>ОГРН/ОГРНИП</dt><dd>{privacyPolicy.operator.ogrnip}</dd></div>
                <div><dt>Email</dt><dd>{privacyPolicy.operator.email}</dd></div>
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
                {privacyPolicy.sections.map((section) => (
                  <li key={section.title}>
                    <a href={`#${slugify(section.title)}`}>{section.title.replace(/^\d+\.\s*/, "")}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <article className={styles.document}>
              {privacyPolicy.sections.map((section) => (
                <section className={styles.documentBlock} id={slugify(section.title)} key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <div className={styles.finalCard}>
                <h2>Вопросы по обработке данных</h2>
                <p>
                  Если у вас есть вопросы по обработке персональных данных, напишите нам через
                  страницу контактов или на email компании:{" "}
                  <a href={`mailto:${privacyPolicy.operator.email}`}>{privacyPolicy.operator.email}</a>.
                </p>
                <a className={styles.contactButton} href="/contacts">Перейти в контакты</a>
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
