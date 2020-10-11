import { BrainTeaserWinner } from './brainTeaserWinner';
import { BrainTeaserAnswer } from './brainTeaserAnswer';

export interface BrainTeaser {
  id: number;
  riddle: string;
  brainTeaserAnswers: BrainTeaserAnswer[];
  brainTeaserWinners: BrainTeaserWinner[];
  userCreated: number;
  dateCreated: Date;
  dateModified: Date;
  correctAnswer: string;
  gift: string;
  isApproved: boolean;
  isDeleted: boolean;
}




