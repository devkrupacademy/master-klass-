'use client';

import { useState } from 'react';

export type Testimonial = { name: string; text: string };

type Props = {
  items: Testimonial[];
  variant: 'mobile' | 'desktop';
};

export function TestimonialsSlider({ items, variant }: Props) {
  const [i, setI] = useState(0);
  const current = items[i];
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  if (variant === 'mobile') {
    return (
      <>
        <div
          className="mt-6 relative"
          style={{
            borderRadius: 28,
            background: '#EBFF00',
            border: '1px solid rgba(235,255,0,0.19)',
            padding: 14,
          }}
        >
          <article
            className="flex flex-col gap-5"
            style={{ background: '#11121A', borderRadius: 22, padding: 18, minHeight: 280 }}
          >
            <div
              className="relative"
              style={{ background: 'rgba(235,255,0,0.19)', borderRadius: 20, padding: 18 }}
            >
              <div
                className="font-display uppercase text-white"
                style={{ fontSize: 28, lineHeight: '28px' }}
              >
                {current.name}
              </div>
            </div>
            <blockquote
              className="font-sans italic"
              style={{
                fontSize: 14,
                lineHeight: '20px',
                color: 'rgba(250,248,245,0.85)',
                whiteSpace: 'pre-line',
              }}
            >
              {current.text}
            </blockquote>
          </article>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <span
                key={idx}
                className="h-[3px] rounded-full"
                style={{
                  width: idx === i ? 24 : 14,
                  background: idx === i ? '#EBFF00' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.25s',
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={prev}
              className="flex items-center justify-center rounded-full border border-acid/50 text-acid hover:bg-acid hover:text-black transition-colors"
              style={{ width: 36, height: 36 }}
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="flex items-center justify-center rounded-full border border-acid/50 text-acid hover:bg-acid hover:text-black transition-colors"
              style={{ width: 36, height: 36 }}
            >
              ›
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="mx-auto relative"
        style={{
          maxWidth: 1299,
          borderRadius: 48,
          background: '#EBFF00',
          border: '1px solid rgba(235,255,0,0.19)',
          padding: 46,
        }}
      >
        <article
          className="grid grid-cols-[409px_1fr] gap-14 items-start"
          style={{
            background: '#11121A',
            borderRadius: 38.4,
            padding: 32,
            minHeight: 252,
          }}
        >
          <div
            className="relative"
            style={{
              background: 'rgba(235,255,0,0.19)',
              borderRadius: 32,
              padding: 25,
              minHeight: 188,
            }}
          >
            <div
              className="font-display uppercase text-white"
              style={{ fontSize: 46, lineHeight: '46px' }}
            >
              {current.name}
            </div>
          </div>
          <blockquote
            className="font-sans italic"
            style={{
              fontSize: 18,
              lineHeight: '24px',
              color: 'rgba(250,248,245,0.85)',
              whiteSpace: 'pre-line',
            }}
          >
            {current.text}
          </blockquote>
        </article>
      </div>

      <div className="mx-auto mt-10 flex items-center justify-between" style={{ maxWidth: 1299 }}>
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <span
              key={idx}
              className="h-[3px] rounded-full"
              style={{
                width: idx === i ? 32 : 20,
                background: idx === i ? '#EBFF00' : 'rgba(255,255,255,0.2)',
                transition: 'all 0.25s',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous"
            onClick={prev}
            className="flex items-center justify-center rounded-full border border-acid/50 text-acid hover:bg-acid hover:text-black transition-colors"
            style={{ width: 44, height: 44 }}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="flex items-center justify-center rounded-full border border-acid/50 text-acid hover:bg-acid hover:text-black transition-colors"
            style={{ width: 44, height: 44 }}
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}
