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
                {consultationPopup.schedule}
              </div>

              <div className={styles.messengerBlock}>
                <div className={styles.messengerTitle}>
                  {consultationPopup.messengerTitle}
                  <span>{consultationPopup.messengerDescription}</span>
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
                      <img
                        className={styles.messengerButtonImg}
                        src={`/images/icons/messenger-buttons/${action.type}.png`}
                        alt={action.label}
                        width="320"
                        height="106"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.formBlock}>
                <span className={styles.formBlockTitle}>{consultationPopup.formTitle}</span>

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
          </>
        )}
      </div>
    </div>
  );
}
