'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

export function ParallaxImage({
  children,
  className = '',
  style,
  scaleTo = 1.08,
  yTo = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  scaleTo?: number;
  yTo?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rm = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, scaleTo]);
  const y = useTransform(scrollYProgress, [0, 1], [0, yTo]);

  if (rm) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ ...style, scale, y }}>
      {children}
    </motion.div>
  );
}
