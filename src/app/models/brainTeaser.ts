import { Comment } from './comment';

export interface BrainTeaser {
  id: number;
  riddle: string;
  createdAt: Date;
  comments: Comment[];
}
