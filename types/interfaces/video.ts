import { BaseEntity } from '../common';
import { VIDEOCATEGORY } from '../enums';

export interface Video extends BaseEntity {
  title: string;
  youtubeId: string;
  thumbnail?: string;
  duration?: number; // in seconds
  category?: VIDEOCATEGORY;
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
  categories: Record<VIDEOCATEGORY, number>;
}