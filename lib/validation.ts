import { TrendFilterSchema, TrendSchema } from '@/schemas/trend.schema';

// Validate filter
export function validateTrendFilter(data: unknown) {
  try {
    return TrendFilterSchema.parse(data);
  } catch (error) {
    console.error('Invalid filter:', error);
    return null;
  }
}

// Validate trend data from API
export function validateTrend(data: unknown) {
  try {
    return TrendSchema.parse(data);
  } catch (error) {
    console.error('Invalid trend:', error);
    throw error;
  }
}