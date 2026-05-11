import { CATEGORY } from '@/types';

export function getCategoryLabel(category: CATEGORY): string {
  const labels: Record<CATEGORY, string> = {
    [CATEGORY.GOALS]: '🎯 Goals',
    [CATEGORY.DANCES]: '💃 Dances',
    [CATEGORY.MOMENTS]: '✨ Moments',
    [CATEGORY.CHALLENGES]: '🎪 Challenges',
  };
  return labels[category];
}
