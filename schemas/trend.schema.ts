import { z } from 'zod';
import { CATEGORY, SORT_BY } from '@/types/interfaces/trend';
import { BaseEntitySchema, PaginationSchema, FilterOptionsSchema } from './common.schema';

// ===== ENUMS SCHEMA =====
export const CategorySchema = z.enum(['goals', 'dances', 'moments', 'challenges']);
export const SortBySchema = z.enum(['trending', 'views', 'likes', 'recent']);

// ===== TREND SCHEMA =====
export const TrendSchema = BaseEntitySchema.extend({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  views: z.string().regex(/^\d+\.?\d*[KMB]?$/, 'Invalid views format'),
  likes: z.string().regex(/^\d+\.?\d*[KMB]?$/, 'Invalid likes format'),
  creator: z.string().min(1, 'Creator is required').startsWith('@', 'Creator must start with @'),
  tiktokId: z.string().min(1, 'TikTok ID is required'),
  description: z.string().optional(),
  hashtags: z.array(z.string()).optional(),
  category: CategorySchema.optional(),
  trending: z.boolean().optional(),
  url: z.string().url('Invalid URL').optional(),
});

// ===== TREND STATS SCHEMA =====
export const TrendStatsSchema = z.object({
  id: z.number().int().positive(),
  trendId: z.number().int().positive(),
  viewsCount: z.number().int().nonnegative(),
  likesCount: z.number().int().nonnegative(),
  commentsCount: z.number().int().nonnegative(),
  sharesCount: z.number().int().nonnegative(),
  updatedAt: z.date().or(z.string().datetime()),
});

// ===== TREND FILTER SCHEMA =====
export const TrendFilterSchema = FilterOptionsSchema.extend({
  category: CategorySchema.optional(),
  sortBy: SortBySchema.optional(),
});

// ===== TREND RESPONSE SCHEMA =====
export const TrendResponseSchema = PaginationSchema.extend({
  trends: z.array(TrendSchema),
});

// ===== CREATE TREND SCHEMA (for forms) =====
export const CreateTrendSchema = TrendSchema.omit({ id: true });

// ===== TYPE INFERENCE =====
export type Trend = z.infer<typeof TrendSchema>;
export type TrendStats = z.infer<typeof TrendStatsSchema>;
export type TrendFilter = z.infer<typeof TrendFilterSchema>;
export type TrendResponse = z.infer<typeof TrendResponseSchema>;
export type CreateTrend = z.infer<typeof CreateTrendSchema>;