export interface Blog {
  id: number;
  title: string;
  authorID: number;
  isApproved: boolean;
  publishedAt: Date;
  createdAt: Date;
  comments: Comment[];
}
