export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
  likes: number;
  duration: string;
  channel: Channel;
  publishedAt: string;
  tags: string[];
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: number;
  verified: boolean;
}

export interface Comment {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  likes: number;
  replies: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  subscriptions: string[];
  playlists: Playlist[];
}

export interface Playlist {
  id: string;
  name: string;
  videos: string[];
  createdAt: string;
  visibility: 'public' | 'private' | 'unlisted';
} 