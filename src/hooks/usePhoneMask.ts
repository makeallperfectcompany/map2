import { useState, useCallback } from "react";

/**
 * Маска для российского номера: +7 (999) 999-99-99
 * Возвращает [value, handleChange]
 */
export function usePhoneMask(initial = "") {
  const [value, setValue] = useState(initial);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");

    // Если начинается с 8 или 7 — считаем +7
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (digits.startsWith("7") && digits.length > 1) digits = digits;

    // Ограничиваем 11 цифрами (7 + 10)
    if (digits.length > 11) digits = digits.slice(0, 11);

    let formatted = "";
    if (digits.length === 0) {
      formatted = "";
    } else if (digits.length <= 1) {
      formatted = "+7";
    } else if (digits.length <= 4) {
      formatted = `+7 (${digits.slice(1)}`;
    } else if (digits.length <= 7) {
      formatted = `+7 (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    } else if (digits.length <= 9) {
      formatted = `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    } else {
      formatted = `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
    }

    setValue(formatted);
  }, []);

  return [value, handleChange, setValue] as const;
}
