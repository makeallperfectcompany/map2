export const finalCta = {
  label: "Бесплатная консультация",
  title: "Обсудим вашу задачу и найдём точки роста",
  description:
    "Разберём текущую ситуацию, подскажем оптимальную связку продвижения и покажем, с чего начать, чтобы не тратить бюджет на лишние действия.",
  form: {
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "Телефон",
    button: "Получить консультацию",
    note: "Свяжемся в рабочее время в течение 10 минут. Пн–Пт, 09:00–21:00 МСК.",
    agreement:
      "Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и принимаете Политику конфиденциальности.",
  },
  messengers: {
    title: "Можно написать напрямую",
    items: [
      {
        label: "Telegram",
        href: "https://t.me/makeallperfectcompany",
        icon: "/images/icons/messengers/telegram.webp",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/74950181815",
        icon: "/images/icons/messengers/whatsapp.webp",
      },
      {
        label: "MAX",
        href: "#",
        icon: "/images/icons/messengers/max.webp",
      },
    ],
  },
} as const;
