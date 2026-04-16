import type { ReactNode, CSSProperties } from 'react';

export function ParallaxImage({
  children,
  className = '',
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  scaleTo?: number;
  yTo?: number;
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
