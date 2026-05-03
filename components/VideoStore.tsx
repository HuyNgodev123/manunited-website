// components/VideoStore.tsx

'use client';

import { useState } from 'react';
import AnimatedSection from '../share/AnimatedSection';
import { animationDelays } from '@/config';

const videos = [
  {
    id: 1,
    title: 'Music of Manchester United',
    youtubeId: 'JuRD8gSdmps',
  },
  {
    id: 2,
    title: 'Legendary Goals',
    youtubeId: 'mmeLCAP74KA',
  },
  {
    id: 3,
    title: 'Champions League Highlights',
    youtubeId: 'GqQPmjhd9Uk',
  },
  {
    id: 4,
    title: 'Best Saves',
    youtubeId: 'wO9AfUK-_RA',
  },
];

export default function VideoStore() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <section id="video-store" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection variant="slideUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            📺 Video Store
          </h2>
          <p className="text-gray-300 text-lg">
            Xem những khoảnh khắc đáng nhớ nhất
          </p>
        </AnimatedSection>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <AnimatedSection
            variant="scaleSimple"
            delay={animationDelays.sm}
            className="md:col-span-2"
          >
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-2xl font-bold mt-4">{selectedVideo.title}</h3>
          </AnimatedSection>

          {/* Video List */}
          <AnimatedSection
            variant="slideRight"
            delay={animationDelays.md}
            className="space-y-4"
          >
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`w-full p-3 rounded-lg transition transform hover:scale-105 ${
                  selectedVideo.id === video.id
                    ? 'bg-red-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                <div className="text-left">
                  <p className="font-semibold text-sm">{video.title}</p>
                  <p className="text-xs text-gray-300 mt-1">
                    Video #{index + 1}
                  </p>
                </div>
              </button>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}