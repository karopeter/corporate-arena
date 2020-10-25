import { QuestionOptions } from './QuestionOptions';
import { QuestionAnswers } from './QuestionAnswers';

export interface Question {
    id: number;
    content: string;
    questionOptions: [];
    questionAnswers: [];
    isDisplayed: boolean;
    isDeleted: boolean;
    createdOn: Date;
    updatedOn: Date;
}




