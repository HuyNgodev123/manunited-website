export interface Video {
  id: number;
  title: string;
  youtubeId: string;
  thumbnail?: string;
  description?: string;
  duration?: number; // in seconds
  category?: 'goals' | 'highlights' | 'saves' | 'moments';
  uploadedAt?: Date;
}

export interface VideoPlayer {
  currentVideo: Video;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

export interface VideoPlaylist {
  id: string;
  name: string;
  videos: Video[];
  description?: string;
  totalVideos: number;
  totalDuration: number; // in seconds
}

export interface VideoStats {
  totalVideos: number;
  totalViews: number;
  categories: Record<string, number>;
}