import { BaseEntity, BaseResponse, BaseComponentProps } from './common';


export enum CATEGORY {
  GOALS  = 'goals',
  DANCES = 'dances',
  MOMENTS = 'moments',
  CHALLENGES = '131'
}

export enum SORT_BY {
  TRENDING  = 'trending',
  VIEWS = 'views',
  LIKES = 'likes',
  RECENT = 'recent'
}

// ===== LABELS (Reuse) =====
export const CATEGORY_LABELS: Record<CATEGORY, string> = {
  [CATEGORY.GOALS]: '🎯 Goals',
  [CATEGORY.DANCES]: '💃 Dances',
  [CATEGORY.MOMENTS]: '✨ Moments',
  [CATEGORY.CHALLENGES]: '🎪 Challenges',
};
 
export const SORT_BY_LABELS: Record<SORT_BY, string> = {
  [SORT_BY.TRENDING]: 'Trending',
  [SORT_BY.VIEWS]: 'Views',
  [SORT_BY.LIKES]: 'Likes',
  [SORT_BY.RECENT]: 'Recent',
};

export interface Trend extends BaseEntity {
  title: string;
  views: string; // e.g., "5.2M"
  likes: string; // e.g., "120K"
  creator: string; // e.g., "@manunited.official"
  tiktokId: string;
  description?: string;
  hashtags?: string[];
  category?: CATEGORY;
  trending?: boolean;
  url?: string;
}

export interface TrendStats extends BaseEntity {
  trendId: number;
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}

export interface TrendChart extends BaseEntity {
  date: string;
  views: number;
  likes: number;
  shares: number;
}

export interface TrendFilter {
  category?: CATEGORY;
  sortBy?: SORT_BY;
  limit?: number;
  offset?: number;
}

export interface TrendResponse extends BaseResponse<Trend[]> {
  total: number;
  page: number;
  limit: number;
}

export interface TrendPlayerProps extends BaseComponentProps{
  trend: Trend;
}

export interface TrendCardProps extends BaseComponentProps {
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

