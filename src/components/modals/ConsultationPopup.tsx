"use client";

import { useEffect, useId, useRef, useState } from "react";
import ConsentCheckbox, { CONSENT_REQUIRED_ERROR } from "@/components/forms/ConsentCheckbox";
import { consultationPopup } from "@/content/forms/consultationPopup";
import styles from "./ConsultationPopup.module.css";

type ConsultationPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = "idle" | "loading" | "success" | "error";

export default function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
  const titleId = useId();
  const descriptionId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isConsentChecked, setIsConsentChecked] = useState(true);
  const [consentError, setConsentError] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 40);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setFormState("idle");
      setConsentError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConsentChecked) {
      setConsentError(CONSENT_REQUIRED_ERROR);
      return;
    }

    setConsentError("");
    setFormState("loading");

    try {
      // TODO: подключить текущий API/CRM/email endpoint проекта.
      // await fetch("/api/consultation-request", { method: "POST", body: JSON.stringify({ name, contact }) });
      await new Promise((resolve) => window.setTimeout(resolve, 650));
      setFormState("success");
      setName("");
      setContact("");
      setIsConsentChecked(true);
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        ref={modalRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className={styles.closeButton} type="button" onClick={onClose} ref={closeButtonRef}>
          <span className={styles.closeLabel}>Закрыть</span>
          <span aria-hidden="true">×</span>
        </button>

        {formState === "success" ? (
          <div className={styles.statePanel}>
            <div className={styles.successIcon} aria-hidden="true" />
            <h2 id={titleId}>Заявка отправлена</h2>
            <p id={descriptionId}>
              Спасибо. Мы получили запрос и свяжемся с вами в рабочее время, чтобы уточнить детали проекта
              и предложить следующий шаг.
            </p>
            <button className={styles.primaryButton} type="button" onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className={styles.formSide}>
              <div className={styles.eyebrow}>
                <span aria-hidden="true" />
                {consultationPopup.eyebrow}
              </div>

              <h2 id={titleId}>{consultationPopup.title}</h2>
              <p id={descriptionId}>{consultationPopup.description}</p>

              <div className={styles.schedule}>
                <span aria-hidden="true">◷</span>
                {consultationPopup.schedule}
              </div>

              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeading}>
                  <h3>{consultationPopup.messengerTitle}</h3>
                  <p>{consultationPopup.messengerDescription}</p>
                </div>

                <div className={styles.actionGrid} aria-label="Быстрые способы связи">
                  {consultationPopup.actions.map((action) => (
                    <a
                      className={`${styles.actionButton} ${styles[action.type]}`}
                      href={action.href}
                      key={action.label}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <ActionIcon type={action.type} />
                      <span>{action.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={`${styles.sectionBlock} ${styles.formBlock}`}>
                <div className={styles.sectionHeading}>
                  <h3>{consultationPopup.formTitle}</h3>
                  <p>{consultationPopup.formDescription}</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <label className={styles.field}>
                    <span>Имя</span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      autoComplete="name"
                      placeholder="Как к вам обращаться"
                    />
                  </label>

                  <label className={styles.field}>
                    <span>Телефон</span>
                    <input
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                      autoComplete="tel"
                      placeholder="+7 или @username"
                      required
                    />
                  </label>

                  <ConsentCheckbox
                    checked={isConsentChecked}
                    onChange={(checked) => {
                      setIsConsentChecked(checked);
                      if (checked) setConsentError("");
                    }}
                    error={consentError}
                    id="consultation-popup-consent"
                  />

                  {formState === "error" ? (
                    <p className={styles.formError} role="alert">
                      Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.
                    </p>
                  ) : null}

                  <button className={styles.primaryButton} type="submit" disabled={formState === "loading"}>
                    {formState === "loading" ? "Отправляем..." : consultationPopup.submitLabel}
                  </button>
                </form>
              </div>

              <div className={styles.urgentBox}>
                <span>{consultationPopup.urgentTitle}</span>
                <a href={consultationPopup.urgentPhoneHref}>{consultationPopup.urgentPhone}</a>
              </div>
            </div>

            <aside className={styles.visualSide} aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}

function ActionIcon({ type }: { type: string }) {
  if (type === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.7 3.4 18.4 20c-.2.9-.8 1.1-1.5.7l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.8-8c.4-.3-.1-.5-.6-.2L6.5 13.6 1.8 12.1c-1-.3-1-1 .2-1.5L20.4 3.2c.9-.3 1.6.2 1.3.2Z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.4 22l5.6-1.2A9.8 9.8 0 1 0 12 2Zm0 17.8a7.8 7.8 0 0 1-4-1.1l-.3-.2-3.3.7.7-3.2-.2-.3A7.8 7.8 0 1 1 12 19.8Zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.2.2-.3.2-.6.1a6.3 6.3 0 0 1-3.1-2.7c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8c5.1 0 9.2 3.6 9.2 8.1S17.1 19 12 19c-.7 0-1.4-.1-2.1-.2l-4.2 2.4.8-3.9A7.6 7.6 0 0 1 2.8 11C2.8 6.4 6.9 2.8 12 2.8Zm-4.2 6.4v4.7h1.5v-2.2l1.6 2.2h1.3l1.6-2.2v2.2h1.5V9.2h-1.4l-2.3 3.1-2.3-3.1H7.8Zm8.7 0v4.7h1.5V9.2h-1.5Z" />
    </svg>
  );
}
