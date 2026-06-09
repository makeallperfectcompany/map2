import { jobs, workPrinciples } from "@/content/jobs";
import styles from "./JobsPageSection.module.css";

export default function JobsPageSection() {
  return (
    <main className={styles.jobsPage}>
      <section className={styles.hero} aria-labelledby="jobs-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>Карьера в Make All Perfect</div>
            <h1 id="jobs-title">Команда, которая строит маркетинг на результате</h1>
            <p>
              Ищем специалистов senior, lead и head: тех, кто мыслит стратегически и отвечает за результат в деньгах.
            </p>
            <div className={styles.heroActions}>
              <a href="#jobs">Смотреть вакансии</a>
              <a href="#apply">Отправить резюме</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.principlesSection} aria-label="Как у нас работают">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Как у нас работают</span>
            <h2>Не просто задачи в таск-трекере, а проекты, где видно влияние работы</h2>
          </div>

          <div className={styles.principlesGrid}>
            {workPrinciples.map((item, index) => (
              <article className={styles.principleCard} key={item.title}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.jobsSection} id="jobs" aria-label="Открытые вакансии">
        <div className={styles.container}>
          <div className={styles.jobsIntro}>
            <div>
              <span>Открытые роли</span>
              <h2>Вакансии</h2>
            </div>
            <p>
              Это не массовый найм и не вакансии для начинающих. Мы ищем сильных специалистов, которые могут отвечать за направление, управлять качеством решений и приносить измеримый бизнес-результат.
            </p>
          </div>

          <div className={styles.jobsList}>
            {jobs.map((job) => (
              <article className={styles.jobCard} key={job.id}>
                <div className={styles.jobMain}>
                  <div className={styles.jobMeta}>
                    <span>{job.direction}</span>
                    <span>{job.format}</span>
                    <span>{job.level}</span>
                  </div>

                  <h3>{job.title}</h3>
                  <p>{job.shortDescription}</p>

                  <div className={styles.jobTags}>
                    <span>{job.salary}</span>
                    <span>{job.employment}</span>
                    <span>{job.experience}</span>
                  </div>
                </div>

                <div className={styles.jobDetails}>
                  <div>
                    <h4>Задачи</h4>
                    <ul>
                      {job.responsibilities.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>Что важно</h4>
                    <ul>
                      {job.requirements.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.jobFooter}>
                  <a href={`mailto:makeallperfectcompany@gmail.com?subject=Отклик на вакансию: ${encodeURIComponent(job.title)}`}>
                    Откликнуться
                  </a>
                  <small>Портфолио или короткое описание опыта будет плюсом</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.openCta} id="apply">
        <div className={styles.container}>
          <div className={styles.openCtaInner}>
            <div>
              <span>Не нашли подходящую вакансию?</span>
              <h2>Напишите нам, если умеете делать результат в digital</h2>
              <p>
                Если вы сильный специалист в рекламе, SEO, маркетплейсах, дизайне,
                разработке, контенте, аналитике, CRM, PR или репутации — отправьте резюме. Возможно, сейчас нет
                открытой роли, но нам всегда интересно знакомиться с сильными людьми.
              </p>
            </div>
            <a href="mailto:makeallperfectcompany@gmail.com?subject=Резюме в Make All Perfect">
              Отправить резюме
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
