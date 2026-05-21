import Link from "next/link";
import Image from "next/image";
import { getFooterGroups } from "@/content/navigation/siteMap";
import styles from "./Footer.module.css";

const contacts = {
  email: "info@makeallperfect.ru",
  phone: "+7 (495) 018-18-15",
  phoneHref: "tel:+74950181815",
  schedule: "Пн-Пт 09:00–21:00 МСК",
};

export default function Footer() {
  const groups = getFooterGroups();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link className={styles.logo} href="/" aria-label="Make All Perfect — на главную">
              <Image
                src="/assets/home/hero/logo-header.webp"
                alt="Make All Perfect"
                width={0}
                height={0}
                sizes="42px"
                className={styles.logoImage}
              />
              <span>
                <strong>Make All Perfect</strong>
                <em>SINCE 2017</em>
              </span>
            </Link>

            <p>
              Маркетинговое агентство полного цикла: стратегия, реклама, SEO,
              сайты, маркетплейсы, контент, CRM, PR и аналитика в одной системе роста.
            </p>

            <div className={styles.contacts}>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              <a href={contacts.phoneHref}>{contacts.phone}</a>
              <span>{contacts.schedule}</span>
            </div>
          </div>

          <nav className={styles.groups} aria-label="Навигация в подвале сайта">
            {groups.map((group) => (
              <div className={styles.group} key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.requisites}>
          <div>
            <span>Юридическое лицо</span>
            <strong>ИП Графов Дмитрий Игоревич</strong>
          </div>
          <div>
            <span>ИНН</span>
            <strong>502212550483</strong>
          </div>
          <div>
            <span>ОГРН/ОГРНИП</span>
            <strong>321508100346442</strong>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Make All Perfect. Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
}
