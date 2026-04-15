'use client';

import { useMagnetic } from './useMagnetic';
import type { CSSProperties, ReactNode } from 'react';

export function MagneticCTA({
  children,
  className = '',
  style,
  href = '#',
  strength = 0.2,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  href?: string;
  strength?: number;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(strength, 140);
  return (
    <a
      ref={ref}
      href={href}
      data-register-cta
      className={className}
      style={{ ...style, transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      {children}
    </a>
  );
}
