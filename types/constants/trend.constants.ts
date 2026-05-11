import { CATEGORY, SORT_BY } from '../enums';


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
