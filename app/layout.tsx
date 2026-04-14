import type { Metadata } from 'next';
import { inter, display } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Академія продажів — Майстермайнд Андрія Крупкіна',
  description: 'Як зробити х2 у продажах у 2026 році з сильною командою продажів',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // display exposes both --font-display and we reuse it for --font-numeric via CSS below.
  return (
    <html lang="uk" className={`${inter.variable} ${display.variable}`}>
      <body style={{ ['--font-numeric' as any]: 'var(--font-display)' }}>{children}</body>
    </html>
  );
}
