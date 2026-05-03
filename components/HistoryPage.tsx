'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: 1878,
    title: 'Thành Lập',
    description: 'Manchester United được thành lập với tên Newton Heath',
  },
  {
    year: 1902,
    title: 'Đổi Tên',
    description: 'Đổi thành Manchester United',
  },
  {
    year: 1945,
    title: 'Tái Sinh',
    description: 'Sau trận tai nạn máy bay Munich, đội tuyển được tái sinh',
  },
  {
    year: 1968,
    title: 'Cup C1 Châu Âu',
    description: 'Giành chức vô địch Cup C1 Châu Âu lần đầu tiên',
  },
  {
    year: 1999,
    title: 'Treble Oriel (Ba Cúp)',
    description:
      'Giành cả 3 cúp: Premier League, FA Cup và Champions League - kỳ tích lịch sử',
  },
  {
    year: 2008,
    title: 'Champions League Again',
    description: 'Lần thứ 3 giành Champions League',
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
            Lịch Sử Manchester United
          </h1>
          <p className="text-xl text-gray-300">
            146 năm vinh quang từ 1878 đến nay
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex gap-8 items-center ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="w-6 h-6 bg-red-600 rounded-full border-4 border-gray-900"></div>
                <div className="w-1 h-16 bg-red-600 opacity-30"></div>
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-gray-800 p-6 rounded-lg border-l-4 border-red-600 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-2">
                  {milestone.year}
                </h3>
                <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                <p className="text-gray-300">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-700"
        >
          {[
            { number: '20+', label: 'Cúp Quốc Gia' },
            { number: '13', label: 'Premier League' },
            { number: '3', label: 'Champions League' },
            { number: '900K', label: 'Fans Toàn Thế Giới' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="text-center bg-gray-800 p-6 rounded-lg"
            >
              <p className="text-4xl font-bold text-red-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}