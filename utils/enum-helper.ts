// utils/enum-helper.ts
import { Category } from '@/types/trend';

export function getCategoryLabel(category: Category): string {
  const labels: Record<Category, string> = {
    [Category.Goals]: '🎯 Goals',
    [Category.Dances]: '💃 Dances',
    [Category.Moments]: '✨ Moments',
    [Category.Challenges]: '🎪 Challenges',
  };
  return labels[category];
}
