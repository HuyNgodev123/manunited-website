// lib/api.ts
import { ApiResponse, Video } from '@/types';

export async function fetchVideos(): Promise<ApiResponse<Video[]>> {
  const response = await fetch('/api/videos');
  return response.json();
}