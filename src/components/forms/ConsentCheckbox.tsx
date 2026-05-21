import Link from "next/link";
import styles from "./ConsentCheckbox.module.css";

type ConsentCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  id?: string;
};

export default function ConsentCheckbox({
  checked,
  onChange,
  error,
  id = "personal-data-consent",
}: ConsentCheckboxProps) {
  return (
    <div className={styles.consent}>
      <label className={`${styles.label} ${error ? styles.errorState : ""}`} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <span className={styles.box} aria-hidden="true" />
        <span className={styles.text}>
          Я соглашаюсь на{" "}
          <Link href="/personal-data-consent">обработку персональных данных</Link>{" "}
          и принимаю{" "}
          <Link href="/privacy-policy">Политику конфиденциальности</Link>.
        </span>
      </label>

      {error ? (
        <p className={styles.error} id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const CONSENT_REQUIRED_ERROR =
  "Для отправки формы необходимо согласие на обработку персональных данных.";
