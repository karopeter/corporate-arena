import { Comment } from './comment';

export interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
 dateCreated: Date;
  publishedAt: Date;
  comments: Comment[];
}

