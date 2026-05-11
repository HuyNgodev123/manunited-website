'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../share/AnimatedSection';
import TrendCard from '@/components/TrendCard';
import TrendPlayer from '@/components/TrendPlayer';
import NavLink from '../share/NavLink';
import { tiktokTrends, tiktokCtaText, animationDelays } from '@/config';



export default function TikTokTrendsPage() {
  const [selectedTrend, setSelectedTrend] = useState(tiktokTrends[0]);

  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection variant="slideUp" className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              TikTok Trends
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Những xu hướng TikTok nóng nhất về Manchester United
          </p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Video Player */}
          <AnimatedSection
            variant="scaleSimple"
            delay={animationDelays.sm}
            className="md:col-span-2"
          >
            <TrendPlayer trend={selectedTrend} />
          </AnimatedSection>

          {/* Trends List */}
          <AnimatedSection
            variant="slideRight"
            delay={animationDelays.md}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">Xu Hướng Phổ Biến</h3>
            {tiktokTrends.map((trend, index) => (
              <TrendCard
                key={trend.id}
                trend={trend}
                isSelected={selectedTrend.id === trend.id}
                onSelect={() => setSelectedTrend(trend)}
                index={index}
              />
            ))}
          </AnimatedSection>
        </div>

        {/* Create Your Own CTA */}
        <AnimatedSection
          variant="slideUp"
          delay={animationDelays.lg}
          className="mt-16 bg-gradient-to-r from-red-700 to-pink-600 p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{tiktokCtaText.title}</h2>
          <p className="text-lg mb-6 text-gray-100">{tiktokCtaText.description}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              href="https://www.tiktok.com"
              className="inline-block px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              {tiktokCtaText.buttonText}
            </NavLink>
          </motion.div>
        </AnimatedSection>
      </div>
    </main>
  );
}