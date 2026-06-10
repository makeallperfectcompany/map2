import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";

export const lokalnoeSeoTechnologies: TechnologiesContent = {
  label: "Инструменты",
  title: "Технологии и инструменты локального SEO",
  description:
    "Используем комплекс инструментов: от геоаналитики и карт до структуры региональных страниц, единых NAP-данных и аналитики заявок.",
  stats: [
    { value: "GEO", label: "геоаналитика", text: "Спрос и конкуренты по городам" },
    { value: "MAPS", label: "карты и карточки", text: "Профили, категории, адреса" },
    { value: "DATA", label: "аналитика заявок", text: "Звонки, формы, маршруты" },
  ],
  cards: [
    {
      eyebrow: "ГЕОАНАЛИТИКА",
      title: "Геоаналитика",
      muted: "городов",
      code: "GEO",
      text: "Спрос, конкуренты и видимость по городам.",
      tags: ["Search", "Локально"],
      accent: true,
    },
    {
      eyebrow: "КАРТЫ",
      title: "Карты и карточки",
      muted: "карточек",
      code: "MAPS",
      text: "Профили, категории, адреса, фото и услуги.",
      tags: ["2GIS/Яндекс", "Локально"],
      accent: false,
    },
    {
      eyebrow: "ДАННЫЕ",
      title: "Единые данные",
      muted: "адресов",
      code: "NAP",
      text: "Название, адрес и телефон без расхождений.",
      tags: ["Справочники", "Локально"],
      accent: false,
    },
    {
      eyebrow: "СТРУКТУРА",
      title: "SEO-структура",
      muted: "регионов",
      code: "STRUCT",
      text: "Региональные страницы и локальные FAQ.",
      tags: ["Посадочные", "SEO"],
      accent: false,
    },
    {
      eyebrow: "АНАЛИТИКА",
      title: "Аналитика заявок",
      muted: "обращений",
      code: "DATA",
      text: "Звонки, формы, переходы и маршруты.",
      tags: ["Метрика", "Локально"],
      accent: false,
    },
    {
      eyebrow: "РОСТ",
      title: "Система роста",
      muted: "системы",
      code: "GROW",
      text: "Сайт, карты, отзывы, контент и аналитика.",
      tags: ["SEO", "Локально"],
      accent: false,
    },
  ],
};
