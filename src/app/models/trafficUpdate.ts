import { CommentRequestTrafficUpdate } from './commentRequestTrafficUpdate';
import { Comment } from './comment';

export interface TrafficUpdate  {
   id: number;
   title: string;
   description: string;
   slug: string;
   dateCreated: Date;
   trafficUpdateComments: CommentRequestTrafficUpdate[];
}

