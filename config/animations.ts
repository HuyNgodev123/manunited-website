// config/animations.ts

export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  slideRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  scale: {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    transition: { duration: 0.8, type: 'spring' as const },
  },
  scaleSimple: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6 },
  },
  bounce: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, type: 'spring' as const, bounce: 0.5 },
  },
} as const;

export const hoverAnimations = {
  scale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },

  scaleSmall: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  },

  lift: {
    whileHover: { y: -5 },
    transition: { duration: 0.3 },
  },

  right: {
    whileHover: { x: 5 },
    transition: { duration: 0.3 },
  },
  
  grow: {
    whileHover: { scale: 1.1 },
    transition: { duration: 0.3 },
  },
};

export const floatingAnimation = {
  animate: { y: [0, 20, 0] },
  transition: { duration: 3, repeat: Infinity },
};

export const containerAnimation = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
};

export const staggerContainer = {
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export const animationDelays = {
  xs: 0.1,
  sm: 0.2,
  md: 0.3,
  lg: 0.5,
  xl: 0.7,
};