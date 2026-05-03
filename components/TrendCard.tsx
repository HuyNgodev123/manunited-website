
'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

interface Trend {
  id: number;
  title: string;
  views: string;
  likes: string;
  creator: string;
}

interface TrendCardProps {
  trend: Trend;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}

export default function TrendCard({
  trend,
  isSelected,
  onSelect,
  index,
}: TrendCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ x: 5 }}
      className={`w-full p-4 rounded-lg text-left transition border-2 ${
        isSelected
          ? 'bg-red-600 border-red-500'
          : 'bg-gray-800 border-gray-700 hover:border-red-500'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-sm">{trend.title}</p>
          <p className="text-xs text-gray-400 mt-1">{trend.views} views</p>
        </div>
        <span className="text-2xl">#{index + 1}</span>
      </div>
    </motion.button>
  );
}