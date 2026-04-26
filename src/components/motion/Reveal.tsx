'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE } from './motion-tokens';

type Intensity = 'subtle' | 'strong';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: Intensity;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  intensity = 'subtle',
}: RevealProps) {
  const reduce = useReducedMotion();
  const isStrong = intensity === 'strong';
  const y = reduce ? 0 : isStrong ? 40 : 16;
  const scale = reduce || !isStrong ? 1 : 0.96;
  const duration = reduce ? 0.15 : isStrong ? 0.75 : DURATION.reveal;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={
        reduce
          ? { duration, ease: 'linear' as const, delay }
          : { duration, ease: EASE, delay }
      }
    >
      {children}
    </motion.div>
  );
}
