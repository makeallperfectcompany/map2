# BREADCRUMBS AUDIT

## Статус: временно удалены

Все хлебные крошки убраны с сайта до внедрения единого компонента.

---

## Где были найдены

### 1. ArticleTemplate — страницы статей `/blog/[slug]`

- **Файл:** `src/components/content/ArticleTemplate.tsx` (JSX, строка ~46)
- **Файл:** `src/components/content/ArticleTemplate.module.css` (CSS, строки 20–35)
- **Вид:** `<nav className={styles.breadcrumbs} aria-label="Хлебные крошки">` → Главная / Блог / Категория

### 2. CaseTemplate — страницы кейсов `/cases/[slug]`

- **Файл:** `src/components/content/CaseTemplate.tsx` (JSX, строка ~28)
- **Файл:** `src/components/content/CaseTemplate.module.css` (CSS, строки 20–34)
- **Вид:** `<nav className={styles.breadcrumbs} aria-label="Хлебные крошки">` → Главная / Кейсы / Категория

---

## Что сделано

- JSX-блок `<nav className={styles.breadcrumbs}...>` удалён из ArticleTemplate.tsx
- JSX-блок `<nav className={styles.breadcrumbs}...>` удалён из CaseTemplate.tsx
- CSS-классы `.breadcrumbs` и `.breadcrumbs a` удалены из ArticleTemplate.module.css
- CSS-классы `.breadcrumbs` и `.breadcrumbs a` удалены из CaseTemplate.module.css
- Никакая другая структура/стили не затронуты

---

## Где в будущем понадобятся хлебные крошки

- `/blog/[slug]` — путь: Главная / Блог / [Категория] / [Название статьи]
- `/cases/[slug]` — путь: Главная / Кейсы / [Категория] / [Название кейса]
- Возможно: `/blog` — Главная / Блог
- Возможно: `/cases` — Главная / Кейсы

---

## Файлы, изменённые в этом аудите

1. `src/components/content/ArticleTemplate.tsx`
2. `src/components/content/ArticleTemplate.module.css`
3. `src/components/content/CaseTemplate.tsx`
4. `src/components/content/CaseTemplate.module.css`
5. `docs/BREADCRUMBS_AUDIT.md` (этот файл)
