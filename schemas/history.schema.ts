
import { z } from 'zod';
import { POSITION, COMPETITION, RESULT } from '@/types/history';
import { BaseEntitySchema } from './common.schema';

// ===== ENUMS SCHEMA =====
export const PositionSchema = z.enum(['gk', 'def', 'mid', 'fwd']);
export const CompetitionSchema = z.enum(['League', 'Cup', 'European']);
export const ResultSchema = z.enum(['win', 'draw', 'loss']);

// ===== MILESTONE SCHEMA =====
export const MilestoneSchema = BaseEntitySchema.extend({
  year: z.number().int().min(1878).max(new Date().getFullYear()),
  title: z.string().min(1, 'Title required').max(100),
  description: z.string().min(1, 'Description required'),
  image: z.string().url().optional(),
  significance: z.enum(['major', 'minor']).optional(),
});

// ===== PLAYER SCHEMA =====
export const PlayerSchema = BaseEntitySchema.extend({
  name: z.string().min(1, 'Name required').max(100),
  position: PositionSchema,
  number: z.number().int().min(1).max(99),
  joinedYear: z.number().int().min(1878).max(new Date().getFullYear()),
  leftYear: z.number().int().min(1878).max(new Date().getFullYear()).optional(),
  appearances: z.number().int().nonnegative(),
  goals: z.number().int().nonnegative(),
  image: z.string().url().optional(),
  nationality: z.string().min(1, 'Nationality required'),
});

// ===== MATCH SCHEMA =====
export const MatchSchema = BaseEntitySchema.extend({
  date: z.date(),
  opponent: z.string().min(1, 'Opponent required'),
  homeTeam: z.string().min(1),
  awayTeam: z.string().min(1),
  score: z.string().regex(/^\d+-\d+$/, 'Score format: X-X'),
  competition: CompetitionSchema,
  result: ResultSchema,
  notable: z.boolean().optional(),
});

// ===== TEAM STATISTICS SCHEMA =====
export const TeamStatisticsSchema = z.object({
  premierLeagueTitles: z.number().int().nonnegative(),
  faCupTitles: z.number().int().nonnegative(),
  leagueCupTitles: z.number().int().nonnegative(),
  championLeagueTitles: z.number().int().nonnegative(),
  europeanTrophies: z.number().int().nonnegative(),
  totalTrophies: z.number().int().nonnegative(),
  allTimeGoals: z.number().int().nonnegative(),
  allTimeApperances: z.number().int().nonnegative(),
});

// ===== ERA SCHEMA =====
export const EraSchema = BaseEntitySchema.extend({
  name: z.string().min(1).max(100),
  startYear: z.number().int().min(1878),
  endYear: z.number().int().min(1878),
  manager: z.string().min(1, 'Manager name required'),
  description: z.string().min(1),
  achievements: z.array(z.string().min(1)),
  milestones: z.array(MilestoneSchema),
});

// ===== HISTORY TIMELINE DATA SCHEMA =====
export const HistoryTimelineDataSchema = z.object({
  milestones: z.array(MilestoneSchema),
  statistics: TeamStatisticsSchema,
  eras: z.array(EraSchema),
  notablePlayers: z.array(PlayerSchema),
  memorableMatches: z.array(MatchSchema),
});

// ===== TYPE INFERENCE =====
export type Milestone = z.infer<typeof MilestoneSchema>;
export type Player = z.infer<typeof PlayerSchema>;
export type Match = z.infer<typeof MatchSchema>;
export type TeamStatistics = z.infer<typeof TeamStatisticsSchema>;
export type Era = z.infer<typeof EraSchema>;
export type HistoryTimelineData = z.infer<typeof HistoryTimelineDataSchema>;