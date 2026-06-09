import Image from 'next/image';
import { googleAdsPage } from '@/content/googleAdsPage';
import { SectionLabel } from './SectionElements';
import styles from './GoogleAdsFinalCta.module.css';

export function GoogleAdsFinalCta() {
  const { finalCta } = googleAdsPage;
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <Image className={styles.background} src="/images/services/google-ads/google-ads-cta.webp" alt="" fill aria-hidden="true" />
        <div className={styles.content}>
          <SectionLabel>{finalCta.label}</SectionLabel>
          <h2>{finalCta.title}</h2>
          <p>{finalCta.text}</p>
          <div className={styles.messengers}><span>Напишите нам в удобный мессенджер</span><a href="#">Telegram</a><a href="#">WhatsApp</a><a href="#">MAX</a></div>
          <form className={styles.form}>
            <label><span>Имя</span><input type="text" name="name" placeholder="Ваше имя" /></label>
            <label><span>Телефон или Email</span><input type="text" name="contact" placeholder="Контакт для связи" /></label>
            <label><span>Сайт</span><input type="url" name="site" placeholder="Ссылка на сайт (необязательно)" /></label>
            <button type="button">Получить консультацию</button>
          </form>
          <div className={styles.trust}>{finalCta.trust.map((item) => <span key={item}>✓ {item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
