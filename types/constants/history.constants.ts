import { POSITION, COMPETITION, RESULT, SIGNIFICANCE } from '../enums';

export const POSITION_LABELS: Record<POSITION, string> = {
  [POSITION.GK]: '🧤 Goalkeeper',
  [POSITION.DEF]: '🛡️ Defender',
  [POSITION.MID]: '🎯 Midfielder',
  [POSITION.FWD]: '⚽ Forward',
};

export const COMPETITION_LABELS: Record<COMPETITION, string> = {
  [COMPETITION.LEAGUE]: '🏆 Premier League',
  [COMPETITION.CUP]: '🏅 FA Cup',
  [COMPETITION.EUROPEAN]: '🌍 European',
};

export const RESULT_LABELS: Record<RESULT, string> = {
  [RESULT.WIN]: '✅ Win',
  [RESULT.DRAW]: '🔄 Draw',
  [RESULT.LOSS]: '❌ Loss',
};

export const SIGNIFICANCE_LABELS: Record<SIGNIFICANCE, string> = {
  [SIGNIFICANCE.MAJOR]: '⭐ Major',
  [SIGNIFICANCE.MINOR]: '✓ Minor',
};