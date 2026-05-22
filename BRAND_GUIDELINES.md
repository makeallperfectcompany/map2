# Брендбук — Make All Perfect (map2)

> **Стек:** Next.js + CSS Modules
> **Обязательно к соблюдению при создании новых страниц, секций и компонентов.**

---

## 1. Шрифт

Единственный шрифт на всём сайте:

```
font-family: var(--font-onest), system-ui, sans-serif;
```

Onest подключён через Next.js `next/font` в корневом layout. Всегда используй сокращённую запись `font:` с Onest первым:

```css
/* Заголовки */
font: 800 clamp(36px, 3.8vw, 52px)/0.99 Onest, Inter, system-ui, sans-serif;

/* Текст */
font: 450 15px/1.65 Onest, Inter, system-ui, sans-serif;

/* Лейблы/кнопки */
font: 750 14px/1 Onest, Inter, system-ui, sans-serif;
```

### Типичные жирности (weight):

| Элемент | weight | Пример |
|---------|--------|--------|
| h1 (герой) | 800 | `font: 800 clamp(...)` |
| h2 (заголовки секций) | 800 | `font: 800 clamp(...)` |
| h3 (карточки) | 840 | `font: 840 28px/1.06 ...` |
| Аббревиатуры/акценты | 840–850 | `font: 850 54px/0.9 ...` |
| Подзаголовки | 760–780 | `font: 780 23px/1.08 ...` |
| Кнопки | 750 | `font: 750 14px/1 ...` |
| Лейблы (eyebrow) | 700 | `font: 700 12px/1 ...` |
| Обычный текст | 440–450 | `font: 450 15px/1.65 ...` |
| Моноширинный | 760 | `font: 760 ... JetBrains Mono, ui-monospace` |

---

## 2. Цвета

### CSS-переменные (в `src/app/globals.css`)

```css
--ink:        #0e0f12;    /* основной текст */
--ink-2:      #1a1c20;    /* второстепенный текст */
--muted:      #6b6f76;    /* muted текст */
--line:       rgba(15,16,20,0.08);  /* разделители, границы */
```

### Паттерны фонов:

| Контекст | Фон |
|----------|-----|
| Светлые секции | `linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)` |
| Белые секции | `#ffffff` |
| Тёмные секции (услуги, технологии) | `#1D1D1F` с карточками `#2A2A2C` |
| Акцентный синий | `#0071E3` |
| Синий градиент | `linear-gradient(90deg, #1A3A6E 0%, #0071E3 52%, #5FA8FF 100%)` |
| Радиальные акценты | `radial-gradient(circle at X% Y%, rgba(0, 113, 227, 0.08), transparent 30%)` |
| Текст на тёмном фоне | `#F5F5F7` |
| Muted на тёмном | `rgba(245, 245, 247, 0.45)` или `rgba(255,255,255,0.42)` |

### Акцентный синий:
- Основной: `#0071E3`
- Светлый (на тёмном фоне): `#6FB7FF`

---

## 3. Сетка

См. `GRID_SYSTEM.md` — обязателен к соблюдению.

---

## 4. Карточки

```css
/* Внутренние отступы */
padding: var(--card-px) var(--card-py);  /* 24px → 28px → 32px */

/* Скругление */
border-radius: 20px;       /* обычные карточки */
border-radius: 24px;       /* на мобиле */
border-radius: 32px;       /* секции-карточки (услуги, технологии) */

/* Тени */
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 0.045),
  0 22px 70px rgba(0, 0, 0, 0.18);
```

### Светлые карточки (ghost/glass):

```css
background: var(--glass);              /* rgba(255,255,255,0.55) */
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(8px);
border: 1px solid rgba(255,255,255,0.3);
```

### Тёмные карточки:

```css
background: #2A2A2C;
border: 1px solid rgba(255, 255, 255, 0.075);
```

---

## 5. Секции

### Структура

```
<section class={styles.section}>   ← padding: var(--section-py) 0
  <Container>                       ← max-width: 1280px
    ...контент...
  </Container>
</section>
```

### Тёмные секции (напр. Услуги, Технологии):

```css
margin: 0 24px;
border-radius: 32px;
padding-top: var(--section-py);
padding-bottom: var(--section-py);
color: #F5F5F7;
background: #1D1D1F;
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Анимации:

```css
--ease: cubic-bezier(.2,.7,.2,1);
transition: transform 240ms ease, border-color 240ms ease;
```

---

## 6. Типографика заголовков

```css
/* h2 секции */
letter-spacing: -0.07em;
text-wrap: balance;

/* h1 герой */
letter-spacing: -0.075em;

/* Крупные цифры (аббревиатуры) */
letter-spacing: -0.07em;
```

---

## 7. Кнопки

```css
/* Основная (белая на тёмном, синяя на светлом) */
border-radius: 999px;
padding: 0 24px;
min-height: 48px;
font: 750 14px/1 Onest, Inter, system-ui, sans-serif;
letter-spacing: -0.01em;

/* Цвета */
.tintBtn {
  background: #0071E3;
  color: #ffffff;
}

/* Ghost кнопка */
.ghostBtn {
  background: transparent;
  color: #0071E3;
  border: 1px solid var(--line);
}
```

---

## 8. Чеклист (перед отправкой кода новой секции/страницы)

- [ ] Шрифт Onest везде (через `font:` с Onest первым аргументом)
- [ ] Жирности по таблице выше (заголовки 800, карточки 840, текст 450 и т.д.)
- [ ] Цвета через CSS-переменные (`var(--ink)`, `var(--muted)`)
- [ ] Фоны — один из паттернов (светлый градиент / тёмный / белый)
- [ ] Акцентный синий `#0071E3` или `#6FB7FF` (на тёмном)
- [ ] Сетка через Container + grid.module.css
- [ ] Вертикальные отступы `var(--section-py)`
- [ ] Карточки `var(--card-px/py)` для внутренних отступов
- [ ] Border-radius: 20px (карточки) / 32px (секции)
- [ ] Анимации через `var(--ease)`
