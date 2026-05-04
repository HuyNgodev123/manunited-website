export interface Trend {
  id: number;
  title: string;
  views: string; // e.g., "5.2M"
  likes: string; // e.g., "120K"
  creator: string; // e.g., "@manunited.official"
  tiktokId: string;
  description?: string;
  hashtags?: string[];
  category?: 'goals' | 'dances' | 'moments' | 'challenges';
  trending?: boolean;
  url?: string;
}

export interface TrendStats {
  id: number;
  trendId: number;
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  updatedAt: Date;
}

export interface TrendChart {
  date: string;
  views: number;
  likes: number;
  shares: number;
}

export interface TrendFilter {
  category?: string;
  sortBy?: 'trending' | 'views' | 'likes' | 'recent';
  limit?: number;
  offset?: number;
}

export interface TrendResponse {
  trends: Trend[];
  total: number;
  page: number;
  limit: number;
}

export interface TrendPlayerProps {
  trend: Trend;
}

export interface TrendCardProps {
  trend: Trend;
  isSelected: boolean;
  onSelect: () => void;
  index: number;
}


export interface TikTokCtaText {
  title: string;
  description: string;
  buttonText: string;
}

