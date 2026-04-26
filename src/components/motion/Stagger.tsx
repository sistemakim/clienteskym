'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE } from './motion-tokens';

type StaggerParentProps = {
  children: ReactNode;
  className?: string;
  /** When true, animate on mount; otherwise animate when scrolled into view. */
  onMount?: boolean;
  staggerChildren?: number;
  delayChildren?: number;
};

export function StaggerParent({
  children,
  className,
  onMount = false,
  staggerChildren = 0.08,
  delayChildren = 0.05,
}: StaggerParentProps) {
  const reduce = useReducedMotion();

  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : staggerChildren,
        delayChildren: reduce ? 0 : delayChildren,
      },
    },
  };

  const animationProps = onMount
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, margin: '-80px' },
      };

  return (
    <motion.div className={className} variants={variants} {...animationProps}>
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduce = useReducedMotion();
  const y = reduce ? 0 : 12;

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0.15, ease: 'linear' as const }
        : { duration: DURATION.child, ease: EASE },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
