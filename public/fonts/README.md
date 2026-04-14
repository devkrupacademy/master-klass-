# Fonts

Поклади сюди два файли:

- `BebasNeueCyrillic-Regular.woff2` — заголовки/CTA
- `BebasNeue-Bold.woff2` — числові акценти

Без них `next/font/local` у `app/fonts.ts` дасть помилку під час білду — або тимчасово закоментуй `bebasDisplay` / `bebasNumeric` і зміни `--font-display`/`--font-numeric` у `globals.css` на `Impact, sans-serif`.
