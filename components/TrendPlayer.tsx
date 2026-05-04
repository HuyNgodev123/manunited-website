'use client';

import { motion } from 'framer-motion';
import NavLink from '../share/NavLink';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { Trend, TrendPlayerProps } from '@/types';


export default function TrendPlayer({ trend }: TrendPlayerProps) {
  return (
    <div>
      {/* Video Player */}
      <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-6xl mb-4">🎵</div>
            <h2 className="text-2xl font-bold text-white mb-2">{trend.title}</h2>
            <p className="text-gray-300 mb-4">by {trend.creator}</p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <FaHeart className="text-red-500 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-300">{trend.likes}</p>
              </div>
              <div className="text-center">
                <FaComment className="text-blue-400 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-300">{trend.views}</p>
              </div>
              <div className="text-center">
                <FaShare className="text-green-400 text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-300">Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
        <p className="text-gray-300 mb-4">
          Hashtag nổi tiếng với {trend.views} views trên TikTok
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <NavLink
            href={`https://www.tiktok.com/search/${trend.title}`}
            className="inline-block px-6 py-2 bg-gradient-to-r from-black to-gray-800 border border-white rounded-full hover:bg-white hover:text-black transition font-semibold"
          >
            Xem Trên TikTok →
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}