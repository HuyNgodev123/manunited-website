'use client';

import { motion } from 'framer-motion';
import { TrendCardProps } from '@/types/trend';
import { CATEGORY_LABELS } from '@/types/trend';
import { hoverAnimations, animationDelays } from '@/config';
import AnimatedSection from '../share/AnimatedSection';

export default function TrendCard({
  trend,
  isSelected,
  onSelect,
  index,
}: TrendCardProps) {
  return (
    <AnimatedSection
      variant="slideUp"
      delay={animationDelays.sm}
    >
      <motion.button
        onClick={onSelect}
        {...hoverAnimations.right}
        whileTap={{ scale: 0.95 }}
        className={`w-full p-4 rounded-lg text-left transition border-2 ${
          isSelected
            ? 'bg-red-600 border-red-500 shadow-lg shadow-red-600/50'
            : 'bg-gray-800 border-gray-700 hover:border-red-500 hover:bg-gray-750'
        }`}
      >
        {/* Number Badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            {/* Title */}
            <p
              className={`font-semibold text-sm leading-tight ${
                isSelected ? 'text-white' : 'text-gray-100'
              }`}
            >
              {trend.title}
            </p>
 
            {/* Views */}
            <p
              className={`text-xs mt-1 ${
                isSelected ? 'text-gray-200' : 'text-gray-400'
              }`}
            >
              {trend.views} views
            </p>
 
            {/* Category Badge */}
            {trend.category && (
              <div className="mt-2">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    isSelected
                      ? 'bg-red-700 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  {CATEGORY_LABELS[trend.category]}
                </span>
              </div>
            )}
          </div>
 
          {/* Index Badge */}
          <div
            className={`text-xl font-bold ml-3 ${
              isSelected ? 'text-white' : 'text-gray-500'
            }`}
          >
            #{index + 1}
          </div>
        </div>
 
        {/* Trending Indicator */}
        {trend.trending && (
          <div className="mt-3 pt-3 border-t border-gray-600 border-opacity-30">
            <span
              className={`inline-flex items-center gap-1 text-xs font-medium ${
                isSelected ? 'text-yellow-100' : 'text-yellow-400'
              }`}
            >
              🔥 Trending
            </span>
          </div>
        )}
 
        {/* Creator Info */}
        <p
          className={`text-xs mt-2 ${
            isSelected ? 'text-gray-300' : 'text-gray-500'
          }`}
        >
          by {trend.creator}
        </p>
      </motion.button>
    </AnimatedSection>
  );
}