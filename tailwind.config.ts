import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        acid: '#EBFF00',
        ink: '#0A0A0A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        numeric: ['var(--font-numeric)', 'Impact', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero:                ['137px', { lineHeight: '48px',  letterSpacing: '-1.88px', fontWeight: '400' }],
        h1:                  ['83px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        h2:                  ['100px', { lineHeight: '1',     letterSpacing: '-0.022em',fontWeight: '400' }],
        h3:                  ['80px',  { lineHeight: '63.3px',letterSpacing: '0',       fontWeight: '400' }],
        'h4-testimonial':    ['46px',  { lineHeight: '41px',  letterSpacing: '-1.2px',  fontWeight: '400' }],
        'h5-block':          ['50px',  { lineHeight: '18px',  letterSpacing: '0',       fontWeight: '400' }],
        numeric:             ['80px',  { lineHeight: '18px',  letterSpacing: '0',       fontWeight: '700' }],
        cta:                 ['60px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        'cta-pill':          ['26px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        'card-heading':      ['30px',  { lineHeight: '36px',  letterSpacing: '-1.8px',  fontWeight: '900' }],
        'card-eyebrow':      ['30px',  { lineHeight: '31.2px',letterSpacing: '-1.2px',  fontWeight: '400', fontStyle: 'italic' } as any],
        'card-body':         ['18px',  { lineHeight: '32px',  letterSpacing: '0',       fontWeight: '400' }],
        body:                ['24px',  { lineHeight: '1.5',   letterSpacing: '-0.011em',fontWeight: '500' }],
        'body-lead':         ['24px',  { lineHeight: '1.2',   letterSpacing: '0',       fontWeight: '400' }],
        'body-list':         ['20px',  { lineHeight: '24px',  letterSpacing: '0',       fontWeight: '400' }],
        'body-bio':          ['24px',  { lineHeight: '22px',  letterSpacing: '0',       fontWeight: '400' }],
        'body-subline':      ['24px',  { lineHeight: '18px',  letterSpacing: '0',       fontWeight: '300' }],
        'testimonial-italic':['18px',  { lineHeight: '24px',  letterSpacing: '0',       fontWeight: '400', fontStyle: 'italic' } as any],
        day:                 ['22px',  { lineHeight: '39.4px',letterSpacing: '-0.06em', fontWeight: '500' }],
        tag:                 ['11px',  { lineHeight: '16.5px',letterSpacing: '0.28em',  fontWeight: '500' }],
        caption:             ['18px',  { lineHeight: '17.3px',letterSpacing: '0',       fontWeight: '400' }],
        'eyebrow-date':      ['24px',  { lineHeight: '30px',  letterSpacing: '0',       fontWeight: '500' }],
        meta:                ['24px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        logo:                ['12px',  { lineHeight: '1.28',  letterSpacing: '0',       fontWeight: '700' }],
        footer:              ['15px',  { lineHeight: '1.2',   letterSpacing: '0',       fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};

export default config;
