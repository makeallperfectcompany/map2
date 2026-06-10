import type { TechnologiesContent } from "@/components/sections/HomeTechnologiesSection";
import { avitoContent } from "./avito";

export const avitoServiceTechnologies: TechnologiesContent = {
  label: avitoContent.services.eyebrow,
  title: avitoContent.services.title,
  description: avitoContent.services.description,
  stats: [
    {
      value: "6",
      label: "этапов",
      text: "работы — от аудита до аналитики",
    },
    {
      value: "100%",
      label: "прозрачность",
      text: "отчётности по каждому рублю бюджета",
    },
    {
      value: "24/7",
      label: "ведение",
      text: "аккаунта без выходных и праздников",
    },
  ],
  cards: avitoContent.services.cards.map((card, index) => ({
    eyebrow: "",
    title: card.title,
    muted: "",
    code: card.code,
    text: card.text,
    tags: [],
    accent: index === 0,
  })),
};
