import { TrendSchema } from '@/schemas/trend.schema';
import { Trend } from '@/types';

export const tiktokTrendsRaw  = [
  {
    id: 1,
    title: '#ManUnited Best Goals',
    views: '5.2M',
    likes: '120K',
    creator: '@manunited.official',
    tiktokId: '7181234567890123456',
  },
  {
    id: 2,
    title: '#MUFans Dance Challenge',
    views: '3.8M',
    likes: '89K',
    creator: '@football.legends',
    tiktokId: '7181234567890123457',
  },
  {
    id: 3,
    title: '#CristianRonaldo Moments',
    views: '8.9M',
    likes: '256K',
    creator: '@ronaldo.highlights',
    tiktokId: '7181234567890123458',
  },
  {
    id: 4,
    title: '#OleGunnar Memories',
    views: '2.1M',
    likes: '45K',
    creator: '@manunited.legends',
    tiktokId: '7181234567890123459',
  },
];

export const tiktokTrends: Trend[] = tiktokTrendsRaw.map(trend => 
  TrendSchema.parse(trend) as Trend
);

export const tiktokCtaText = {
  title: 'Tạo Xu Hướng Của Riêng Bạn',
  description: 'Hãy sáng tạo nội dung TikTok của riêng bạn với hashtag #MyManUnited',
  buttonText: 'Bắt Đầu Ngay',
};