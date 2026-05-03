'use client';

import AnimatedSection from '../share/AnimatedSection';
import { animationVariants, colors, animationDelays, floatingAnimation  } from '@/config';
import { motion } from 'framer-motion';
import NavLink from '../share/NavLink';

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-white"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <AnimatedSection variant="scale" className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <span className="text-red-700 font-bold text-5xl">MU</span>
          </div>
        </AnimatedSection>

        {/* Main Title */}
        <AnimatedSection 
          variant="scale" 
          delay={animationDelays.sm}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          MANCHESTER UNITED
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection variant="slideUp"
          delay={animationDelays.md} 
          className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            
          Glory Glory Man United 🔴
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection 
          variant="slideUp" 
          delay={animationDelays.lg}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink 
              href="/history"
              className="inline-block px-8 py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Khám Phá Lịch Sử →
            </NavLink>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Floating Animation */}
      <motion.div
        {...floatingAnimation}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-4xl">↓</div>
      </motion.div>
    </div>
  );
}