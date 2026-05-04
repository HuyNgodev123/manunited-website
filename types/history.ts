export interface Milestone {
  year: number;
  title: string;
  description: string;
  image?: string;
  significance?: 'major' | 'minor';
}

export interface TeamStatistics {
  premierLeagueTitles: number;
  faCupTitles: number;
  leagueCupTitles: number;
  championLeagueTitles: number;
  europeanTrophies: number;
  totalTrophies: number;
  allTimeGoals: number;
  allTimeApperances: number;
}

export interface Era {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  manager: string;
  description: string;
  achievements: string[];
  milestones: Milestone[];
}

export interface Player {
  id: number;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  number: number;
  joinedYear: number;
  leftYear?: number;
  appearances: number;
  goals: number;
  image?: string;
  nationality: string;
}

export interface Match {
  id: number;
  date: Date;
  opponent: string;
  homeTeam: string;
  awayTeam: string;
  score: string; // e.g., "2-1"
  competition: 'League' | 'Cup' | 'European';
  result: 'win' | 'draw' | 'loss';
  notable?: boolean; // Is it a memorable match?
}

export interface HistoryTimelineData {
  milestones: Milestone[];
  statistics: TeamStatistics;
  eras: Era[];
  notablePlayers: Player[];
  memorableMatches: Match[];
}