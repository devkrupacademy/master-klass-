'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function StaggerGroup({
  children,
  className = '',
  stagger = 0.08,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const rm = useReducedMotion();
  if (rm) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
      custom={y}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  y = 40,
  style,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  style?: React.CSSProperties;
}) {
  const rm = useReducedMotion();
  if (rm) return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
