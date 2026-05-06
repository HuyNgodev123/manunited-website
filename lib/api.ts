import { TrendResponseSchema, TrendFilter} from '@/schemas/trend.schema';

export async function fetchTrends(filter?: TrendFilter) {
  const response = await fetch('/api/trends');
  const data = await response.json();
  
  // Validate response data
  const validatedData = TrendResponseSchema.parse(data);
  
  return validatedData;
}