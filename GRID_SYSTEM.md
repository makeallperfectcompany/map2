# Единая система сетки — Make All Perfect (map2)

> **Стек:** Next.js + CSS Modules
> **Обязательно к соблюдению при любой работе с кодом.**

---

## 1. Контейнер

На всём сайте существует **ровно один** тип контейнера:

```tsx
import { Container } from "@/components/ui/Container/Container";

<section className={styles.section}>
  <Container>
    {/* контент */}
  </Container>
</section>
```

**Файл:** `components/ui/Container/Container.module.css`

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--page-px);
  padding-right: var(--page-px);
}
```

❌ **НЕЛЬЗЯ:**
- `max-width` напрямую в CSS секции
- `padding-left/right` числами (только `var(--page-px)`)
- Самодельные `.wrapper`, `.inner`, `.content` вместо Container
- Брейкпоинты кроме `768px` и `1280px`

---

## 2. CSS-переменные

Определены в `src/app/globals.css`:

| Переменная | Mobile | Tablet (768px+) | Desktop (1280px+) |
|-----------|--------|-----------------|-------------------|
| `--page-px` | 16px | 32px | 40px |
| `--section-py` | 64px | 80px | 96px |
| `--grid-gap` | 24px | 28px | 32px |
| `--card-px` | 24px | 28px | 32px |
| `--card-py` | 24px | 28px | 32px |

---

## 3. Сетка колонок (`styles/grid.module.css`)

```tsx
import gridStyles from "@/styles/grid.module.css";

// 2 колонки
<div className={gridStyles.grid2}>

// 3 колонки (mobile: 1, tablet: 2, desktop: 3)
<div className={gridStyles.grid3}>

// 4 колонки (mobile: 1, tablet: 2, desktop: 4)
<div className={gridStyles.grid4}>

// Асимметричная (2/3 + 1/3, только desktop)
<div className={gridStyles.gridAsymmetric}>
```

❌ **НЕЛЬЗЯ** писать `display: grid; grid-template-columns: repeat(3, 1fr)` в CSS секции — используй shared-классы.

---

## 4. Анатомия секции

```
<section class={styles.section}>  ← padding-top/bottom: var(--section-py)
  <Container>                      ← max-width: 1280px, padding: var(--page-px)
    <div class={gridStyles.grid3}> ← сетка колонок
      ...карточки...
    </div>
  </Container>
</section>
```

---

## 5. Горизонтальные скроллы

Исключение из правила контейнера:

- **Заголовок секции** — в `<Container>`
- **Скролл-трек** — без Container: `padding-left: var(--page-px)`, на десктопе `max-width: 1280px; margin: 0 auto`

---

## 6. Чеклист (перед отправкой любого кода)

- [ ] Нет произвольных `max-width` в CSS секций (кроме Container)
- [ ] Нет `padding-left/right` числами (только `var(--page-px)`)
- [ ] Нет `padding-top/bottom` секций числами (только `var(--section-py)`)
- [ ] Нет брейкпоинтов кроме `768px` и `1280px`
- [ ] Нет дублирующих `.wrapper`/`.inner`/`.layout` поверх Container
- [ ] Все `gap` через `var(--grid-gap)` или `var(--grid-gap-sm)`
- [ ] Все карточки `padding` через `var(--card-px)`/`var(--card-py)`
