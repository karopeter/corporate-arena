import { Comment } from './comment';

export interface Blog {
  id: number;
  title: string;
  content: string;
  slug: string;
  dateCreated: Date;
  publishedAt: Date;
  comments: Comment[];
}