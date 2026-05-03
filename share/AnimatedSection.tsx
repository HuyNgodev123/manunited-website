// components/AnimatedSection.tsx

'use client';

import { motion } from 'framer-motion';
import { animationVariants } from '@/config';

type AnimationVariant = keyof typeof animationVariants;

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  variant = 'fadeIn',
  delay = 0,
  className = '',
  id,
}: AnimatedSectionProps) {
  const animation = animationVariants[variant];

  return (
    <motion.div
      id={id}
      initial={animation.initial}
      whileInView={animation.animate}
      transition={{ ...animation.transition, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}