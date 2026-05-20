# BREADCRUMBS AUDIT

## Статус: ✅ единый компонент внедрён

Хлебные крошки заменены на единый компонент `Breadcrumbs`.

---

## Компонент

- `src/components/navigation/Breadcrumbs.tsx` — единый компонент
- `src/components/navigation/Breadcrumbs.module.css` — стили

API:
```ts
type BreadcrumbItem = { label: string; href?: string };
<Breadcrumbs items={[...]} />
```

---

## Где используются

- `ArticleTemplate.tsx` — `/blog/[slug]` (Главная / Блог / Категория / Название)
- `CaseTemplate.tsx` — `/cases/[slug]` (Главная / Кейсы / Категория / Название)

## Где НЕ используются (намеренно)

- `/` — не нужны
- `/blog` — не нужны (это индекс)
- `/cases` — не нужны (это индекс)

## Будущее: JSON-LD

BreadcrumbList Schema.org — отдельной задачей после утверждения визуального компонента.
