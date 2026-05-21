"use client";

import { useState } from "react";
import Link from "next/link";
import { usePhoneMask } from "@/hooks/usePhoneMask";
import Image from "next/image";
import { finalCta } from "@/content/home/final-cta";
import styles from "./FinalCtaSection.module.css";

export default function FinalCtaSection() {
  const [name, setName] = useState("");
  const [phone, onPhoneChange] = usePhoneMask("");
  const [consent, setConsent] = useState(true);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;
    setFormState("loading");

    try {
      // TODO: подключить текущий API/CRM/email endpoint проекта.
      // await fetch("/api/consultation-request", { method: "POST", body: JSON.stringify({ name, phone }) });
      await new Promise((r) => window.setTimeout(r, 650));
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  return (
    <section className={styles.finalCtaSection} id="lead-form">
      <div className={styles.container}>
        <div className={styles.background} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.copy}>
            <span className={styles.sectionLabel}>{finalCta.label}</span>
            <h2>{finalCta.title}</h2>
            <p>{finalCta.description}</p>
          </div>

          <div className={styles.formCard}>
            {formState === "success" ? (
              <div className={styles.successState}>
                <strong>Спасибо, заявка отправлена!</strong>
                <p>Мы скоро свяжемся с вами.</p>
              </div>
            ) : (
              <>
                <div className={styles.messengerBlock}>
                  <span>{finalCta.messengers.title}</span>

                  <div className={styles.messengers}>
                    {finalCta.messengers.items.map((item) => (
                      <Link className={styles.messengerButton} href={item.href} key={item.label}>
                        <Image src={item.icon} alt="" aria-hidden="true" width={24} height={24} unoptimized />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className={styles.divider} />

                <form className={styles.form} onSubmit={handleSubmit}>
                  <label>
                    <span>Имя</span>
                    <input
                      name="name"
                      type="text"
                      placeholder={finalCta.form.namePlaceholder}
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>

                  <label>
                    <span>Телефон</span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={finalCta.form.phonePlaceholder}
                      autoComplete="tel"
                      value={phone}
                      onChange={onPhoneChange}
                      required
                    />
                  </label>

                  <button type="submit" disabled={formState === "loading"}>
                    {formState === "loading" ? "Отправка..." : finalCta.form.button}
                  </button>

                  <p className={styles.note}>{finalCta.form.note}</p>

                  <label className={styles.agreement}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <span>
                      Нажимая на кнопку, вы соглашаетесь на{" "}
                      <a href="/personal-data-consent" target="_blank" rel="noopener noreferrer">
                        обработку персональных данных
                      </a>{" "}
                      и принимаете{" "}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Политику конфиденциальности
                      </a>.
                    </span>
                  </label>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
