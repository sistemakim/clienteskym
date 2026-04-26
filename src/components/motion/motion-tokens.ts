import type { Variants, Transition } from 'framer-motion';

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  reveal: 0.5,
  child: 0.4,
  menu: 0.25,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.child, ease: EASE },
  },
};

export const reducedMotionTransition: Transition = {
  duration: 0.15,
  ease: 'linear',
};
