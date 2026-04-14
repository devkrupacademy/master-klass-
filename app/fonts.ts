import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

export const display = localFont({
  src: [{ path: '../public/fonts/BebasNeueCyrillic-Regular.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Impact', 'Oswald', 'sans-serif'],
});

// Bebas Neue Cyrillic має лише Regular у нашому web-пакеті.
// Для числових акцентів (`font-numeric`) використовуємо той самий файл.
// Якщо потрібен Bold — потрібно окремо знайти BebasNeueBold з кирилицею.
export const numeric = display;
