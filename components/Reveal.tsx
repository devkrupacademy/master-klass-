'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className = '', delay = 0, y = 32, duration = 0.95 }: RevealProps) {
  const rm = useReducedMotion();
  if (rm) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
