export interface QuestionAnswers {
  id: number;
  questionId: number;
  userId: number;
  isCorrect: boolean;
  isDisplayed: boolean;
  isDeleted: boolean;
  createdOn: Date;
  updatedOn: Date;
}

