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
        hero:                ['103px', { lineHeight: '36px',  letterSpacing: '-1.41px', fontWeight: '400' }],
        h1:                  ['62px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        h2:                  ['75px',  { lineHeight: '1',     letterSpacing: '-0.022em',fontWeight: '400' }],
        h3:                  ['60px',  { lineHeight: '48px',  letterSpacing: '0',       fontWeight: '400' }],
        'h4-testimonial':    ['35px',  { lineHeight: '31px',  letterSpacing: '-0.9px',  fontWeight: '400' }],
        'h5-block':          ['38px',  { lineHeight: '14px',  letterSpacing: '0',       fontWeight: '400' }],
        numeric:             ['60px',  { lineHeight: '14px',  letterSpacing: '0',       fontWeight: '700' }],
        cta:                 ['45px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        'cta-pill':          ['20px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        'card-heading':      ['23px',  { lineHeight: '27px',  letterSpacing: '-1.4px',  fontWeight: '900' }],
        'card-eyebrow':      ['23px',  { lineHeight: '23px',  letterSpacing: '-0.9px',  fontWeight: '400', fontStyle: 'italic' } as any],
        'card-body':         ['14px',  { lineHeight: '24px',  letterSpacing: '0',       fontWeight: '400' }],
        body:                ['18px',  { lineHeight: '1.5',   letterSpacing: '-0.011em',fontWeight: '500' }],
        'body-lead':         ['18px',  { lineHeight: '1.2',   letterSpacing: '0',       fontWeight: '400' }],
        'body-list':         ['15px',  { lineHeight: '18px',  letterSpacing: '0',       fontWeight: '400' }],
        'body-bio':          ['18px',  { lineHeight: '17px',  letterSpacing: '0',       fontWeight: '400' }],
        'body-subline':      ['18px',  { lineHeight: '14px',  letterSpacing: '0',       fontWeight: '300' }],
        'testimonial-italic':['14px',  { lineHeight: '18px',  letterSpacing: '0',       fontWeight: '400', fontStyle: 'italic' } as any],
        day:                 ['17px',  { lineHeight: '30px',  letterSpacing: '-0.06em', fontWeight: '500' }],
        tag:                 ['8px',   { lineHeight: '12px',  letterSpacing: '0.28em',  fontWeight: '500' }],
        caption:             ['14px',  { lineHeight: '13px',  letterSpacing: '0',       fontWeight: '400' }],
        'eyebrow-date':      ['18px',  { lineHeight: '23px',  letterSpacing: '0',       fontWeight: '500' }],
        meta:                ['18px',  { lineHeight: '1',     letterSpacing: '0',       fontWeight: '400' }],
        logo:                ['9px',   { lineHeight: '1.28',  letterSpacing: '0',       fontWeight: '700' }],
        footer:              ['11px',  { lineHeight: '1.2',   letterSpacing: '0',       fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};

export default config;
