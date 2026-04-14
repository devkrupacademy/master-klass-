# Typography Style Guide — Академія воронка

> Source: Figma `Ga3Rblih7wIjHrwMX6hArw`, node `1:1723` ("Академія воронка", 1920×10781).
> Extracted: 2026-04-14. Raw data: [`STYLEGUIDE.raw.json`](./STYLEGUIDE.raw.json).

## 1. Font Families

У макеті використано 8 шрифтів, але **в код переносимо лише 2 сімейства** (рішення продакту для швидкості завантаження й консистентності):

| Роль         | Font                         | Weight(s)                | Завантаження                        |
| ------------ | ---------------------------- | ------------------------ | ----------------------------------- |
| **Display**  | Bebas Neue Cyrillic          | 400 Regular              | `next/font/local` (.woff2)          |
| **Numeric**  | Bebas Neue                   | 700 Bold                 | `next/font/local` (.woff2)          |
| **Sans**     | Inter                        | 300 / 400 / 500 / 700 / 900 + Italic | `next/font/google`                  |

### Mapping з Figma → код

| Figma family                  | → код                                  |
| ----------------------------- | -------------------------------------- |
| Bebas Neue Cyrillic Regular   | **Bebas Neue Cyrillic 400**            |
| Bebas Neue Bold               | **Bebas Neue 700**                     |
| HelveticaNeueCyr Roman 400    | Inter 400                              |
| HelveticaNeueCyr Medium 550   | Inter 500                              |
| HelveticaNeueCyr Italic 550   | Inter 400 italic                       |
| Helvetica Neue Regular 400    | Inter 400                              |
| Helvetica Neue Medium 500     | Inter 500                              |
| Helvetica Neue Light 300      | Inter 300                              |
| Helvetica Neue Bold 700       | Inter 700 (лого)                       |
| Inter Black 900               | Inter 900                              |
| Georgia Italic 400            | Inter 400 italic                       |
| Menlo Regular 400             | Inter 500 + `letter-spacing: 0.25em`   |
| Montserrat Regular 400        | Inter 400                              |

### CSS variables

```css
--font-display: 'Bebas Neue Cyrillic', 'Bebas Neue', 'Oswald', Impact, sans-serif;
--font-numeric: 'Bebas Neue', 'Oswald', Impact, sans-serif;
--font-sans:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

---

## 2. Semantic Type Scale

Літерспейсинг Figma `PERCENT` → CSS `em`: напр. `-2.2%` = `-0.022em`.
`AUTO` line-height у Figma → `line-height: 1` (для Bebas) або `1.2` (для Inter) за контекстом.

| Token                        | Family    | Size px | Line-height | Letter-spacing | Transform | Приклад у макеті                                           |
| ---------------------------- | --------- | ------- | ----------- | -------------- | --------- | ---------------------------------------------------------- |
| `display.hero`               | Bebas     | 137     | 48 px       | -1.88 px       | UPPER     | "АНДРІЙ / КРУПКІН" (ім'я героя)                            |
| `display.h1`                 | Bebas     | 83      | 1.0 (auto)  | 0              | UPPER     | "ЯК ЗРОБИТИ Х2 У ПРОДАЖАХ У 2026…"                         |
| `heading.h2`                 | Bebas     | 100     | 100%        | -2.2% (-0.022em) | UPPER   | "ЦЕЙ МАСТЕРМАЙНД ДЛЯ ТЕБЕ ЯКЩО:", "ПРОГРАМА МАСТЕРМАЙНДУ"  |
| `heading.h3`                 | Bebas     | 80      | 63.3 px     | 0              | — / UPPER | "Як збільшити продажі вдвічі у 2026", "Тест «Аудит…»"      |
| `heading.h4-testimonial`     | Bebas     | 46      | 41 px       | -1.2 px        | —         | "Володимир Семанюк"                                        |
| `heading.h5-block`           | Bebas     | 50      | 18 px       | 0              | UPPER     | "Засновник компаній:"                                      |
| `numeric.accent`             | Bebas Bold| 80      | 18 px       | 0              | —         | "18+ років", "184+"                                        |
| `cta.primary`                | Bebas     | 60      | 1.0 (auto)  | 0              | UPPER     | "ЗАРЕЄСТРУВАТИСЬ"                                          |
| `cta.pill`                   | Bebas     | 26      | 1.0 (auto)  | 0              | —         | "прийняти участь безкоштовно"                              |
| `card.heading`               | Inter 900 | 30      | 36 px       | -1.8 px        | UPPER     | "З поточного трафіку команда…"                             |
| `card.eyebrow-italic`        | Inter ital| 30      | 31.2 px     | -1.2 px        | —         | "+21% до конверсії в оплату", "Практика замість…"          |
| `card.body`                  | Inter 400 | 18      | 32 px       | 0              | —         | "Ми не докуповували ліди…"                                 |
| `body.primary`               | Inter 500 | 24      | 150%        | -1.1% (-0.011em)| —        | Пункти програми мастермайнду                               |
| `body.lead`                  | Inter 400 | 24      | 1.2 (auto)  | 0              | —         | "Майстермайнд Андрія Крупкіна", "2 дні · 21-22 квітня…"    |
| `body.list`                  | Inter 400 | 20      | 24 px       | 0              | —         | Списки переваг ("У тебе є відділ продажів…")               |
| `body.bio`                   | Inter 400 | 24      | 22 px       | 0              | —         | Біо Андрія, компанії                                       |
| `body.bio-subline`           | Inter 300 | 24      | 18 px       | 0              | —         | "років у сфері продажів", "побудованих відділів…"          |
| `body.testimonial-italic`    | Inter 400 italic | 18 | 24 px      | 0              | —         | Цитати відгуків                                            |
| `ui.day-chip`                | Inter 500 | 22      | 39.4 px     | -6% (-0.06em)  | —         | "день 1", "день 2", "21 квітня"                            |
| `ui.tag`                     | Inter 500 | 11      | 16.5 px     | +3.08 px (≈0.28em) | UPPER | "Власник бізнесу", "Менеджер з продажів", "Живі сесії"     |
| `ui.caption`                 | Inter 400 | 18      | 17.3 px     | 0              | —         | "Автор курсу"                                              |
| `ui.eyebrow-date`            | Inter 500 | 24      | 30 px       | 0              | —         | "За 2 вечора розберемо ТОП-5 проблем…"                     |
| `ui.meta`                    | Inter 400 | 24      | 1.0 (auto)  | 0              | —         | "Участь безкоштовна · Zoom-формат · Кількість обмежена"    |
| `logo.masthead`              | Inter 700 | 12      | 1.28        | 0              | UPPER     | "АКАДЕМІЯ ПРОДАЖІВ / АНДРІЯ КРУПКІНА"                      |
| `footer.link`                | Inter 400 | 15      | 1.2 (auto)  | 0              | —         | "0 800 209 871", "Політика конфіденційності"               |

---

## 3. Tailwind mapping

Токени вже мапнуті у `tailwind.config.ts` → `theme.extend.fontSize` як tuple `[size, { lineHeight, letterSpacing, fontWeight }]`:

```tsx
<h1 className="font-display text-h1">Як зробити х2…</h1>
<h2 className="font-display text-h2">Програма мастермайнду</h2>
<span className="font-numeric text-numeric">18+</span>
<p className="font-sans text-body-list">…</p>
<span className="text-tag font-medium uppercase tracking-[0.28em]">Власник бізнесу</span>
```

Ключові Tailwind-класи (див. `tailwind.config.ts`):
`text-hero`, `text-h1`, `text-h2`, `text-h3`, `text-h4-testimonial`, `text-h5-block`,
`text-numeric`, `text-cta`, `text-cta-pill`,
`text-card-heading`, `text-card-eyebrow`, `text-card-body`,
`text-body`, `text-body-lead`, `text-body-list`, `text-body-bio`, `text-body-subline`, `text-testimonial-italic`,
`text-day`, `text-tag`, `text-caption`, `text-eyebrow-date`, `text-meta`,
`text-logo`, `text-footer`.

---

## 4. Одиниці та перетворення

- **Figma `PERCENT` letter-spacing** → CSS `em`: `-2.2%` → `-0.022em`.
- **Figma `PERCENT` line-height** → CSS unitless: `150%` → `1.5`.
- **Figma `PIXELS`** переносимо 1:1.
- **Figma `AUTO` line-height** → для дисплейних шрифтів (Bebas) використовуємо `1`, для Inter — `1.2`.
- **`textCase: UPPER`** → `text-transform: uppercase` (не ручне CAPS-писання).

## 5. Нюанси макету (занотовано, не реплікуємо)

- Нода `1:1971`, `1:1971`, `1:2101` має `fontWeight: figma.mixed` — всередині одного текст-блоку змішані ваги. При верстці розіб'ємо на 2 `<span>`.
- Лого є в двох розмірах (`12.0` у masthead, `12.6` у sticky) — округляємо до `12px` для обох.
- Дублюються секції списків ("Зрозумієш чому менеджери не продають…" тощо) — це responsive варіанти, у коді достатньо одного набору.
- `heading.h5-block` ("Засновник компаній:") має lh=18px при size=50 — це не помилка, а декоративний тайт-блок поруч з цифрами (18+, 184+), які мають такий самий lh=18 при size=80.

## 6. Як верифікувати pixel-perfect

1. Взяти ноду з Figma (напр. `1:1730` — H1).
2. Зверстати `<h1 className="font-display text-h1 uppercase">…</h1>`.
3. У Figma зробити `figma_capture_screenshot` цієї ноди, поруч — скріншот Chrome.
4. Накласти шари в Figma/Photoshop → відхилення ≤1px по bbox і baseline.
