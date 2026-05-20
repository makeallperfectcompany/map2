import {
  contactFaq,
  contacts,
  quickContacts,
  requestHints,
  serviceTopics,
  socialLinks,
} from "@/content/contacts";
import styles from "./ContactsPageSection.module.css";

export default function ContactsPageSection() {
  return (
    <main className={styles.contactsPage}>
      <section className={styles.hero} aria-labelledby="contacts-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>Контакты Make All Perfect</div>
            <h1 id="contacts-title">Обсудим ваш проект и найдём точки роста</h1>
            <p>
              Расскажите о задаче: реклама, SEO, маркетплейсы, сайт, контент,
              CRM, PR или комплексный маркетинг. Мы изучим вводные и подскажем,
              с чего лучше начать.
            </p>
            <div className={styles.heroActions}>
              <a href="https://t.me/makeallperfect_bot" target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
              <a href="#request">Оставить заявку</a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quickSection} aria-label="Быстрые способы связи">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Связаться быстро</span>
            <h2>Выберите удобный канал</h2>
          </div>

          <div className={styles.quickGrid}>
            {quickContacts.map((item) => (
              <article className={styles.quickCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                  {item.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.requestSection} id="request">
        <div className={styles.container}>
          <div className={styles.requestLayout}>
            <div className={styles.formCard}>
              <span>Оставить заявку</span>
              <h2>Коротко опишите задачу — мы вернёмся с понятным следующим шагом</h2>

              <form className={styles.contactForm}>
                <label>
                  <span>Имя</span>
                  <input type="text" name="name" placeholder="Как к вам обращаться" />
                </label>

                <label>
                  <span>Телефон или мессенджер</span>
                  <input type="text" name="contact" placeholder="+7 или @username" />
                </label>

                <label>
                  <span>Email, если удобно</span>
                  <input type="email" name="email" placeholder="name@company.ru" />
                </label>

                <label className={styles.fullField}>
                  <span>Что нужно обсудить?</span>
                  <textarea name="message" rows={5} placeholder="Опишите проект, задачу, сайт, карточки или рекламные каналы" />
                </label>

                <div className={styles.topicChips} aria-label="Темы обращения">
                  {serviceTopics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>

                <button type="submit">Отправить заявку</button>

                <small>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </small>
              </form>
            </div>

            <aside className={styles.hintCard}>
              <span>Что написать в заявке</span>
              <h3>Чтобы мы быстрее разобрались, можно указать:</h3>
              <ul>
                {requestHints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>С чем можно обращаться</span>
            <h2>Закрываем задачи от рекламы до комплексной системы маркетинга</h2>
          </div>

          <div className={styles.servicesGrid}>
            {serviceTopics.map((topic) => (
              <article className={styles.serviceCard} key={topic}>
                <h3>{topic}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            <article className={styles.requisitesCard}>
              <span>Реквизиты</span>
              <h2>Юридическая информация</h2>
              <dl>
                <div>
                  <dt>Юр. лицо</dt>
                  <dd>{contacts.legalName}</dd>
                </div>
                <div>
                  <dt>ОГРН</dt>
                  <dd>{contacts.ogrn}</dd>
                </div>
                <div>
                  <dt>ИНН</dt>
                  <dd>{contacts.inn}</dd>
                </div>
              </dl>
            </article>

            <article className={styles.contactInfoCard}>
              <span>Основные контакты</span>
              <h2>Телефон, email и график</h2>
              <dl>
                <div>
                  <dt>Email</dt>
                  <dd><a href={`mailto:${contacts.email}`}>{contacts.email}</a></dd>
                </div>
                <div>
                  <dt>Телефон</dt>
                  <dd><a href={contacts.phoneHref}>{contacts.phone}</a></dd>
                </div>
                <div>
                  <dt>График</dt>
                  <dd>{contacts.schedule}</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.socialSection} id="socials">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>Социальные сети и каналы</span>
            <h2>Можно написать или следить за обновлениями агентства</h2>
          </div>

          <div className={styles.socialGrid}>
            {socialLinks.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
                {item.title}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span>FAQ</span>
            <h2>Частые вопросы перед обращением</h2>
          </div>

          <div className={styles.faqList}>
            {contactFaq.map((item) => (
              <article className={styles.faqItem} key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <span>Готовы обсудить проект?</span>
            <h2>Напишите нам в удобный канал или оставьте заявку</h2>
            <p>
              Мы разберём задачу, посмотрим текущую ситуацию и предложим понятный следующий шаг.
            </p>
            <div className={styles.finalActions}>
              <a href="https://t.me/makeallperfect_bot" target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
              <a href="#request">Оставить заявку</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
