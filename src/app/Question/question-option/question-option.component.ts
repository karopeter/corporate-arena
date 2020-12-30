import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/Question';
import { QuestionOptions } from '../../models/QuestionOptions';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-question-option',
  templateUrl: './question-option.component.html',
  styleUrls: ['./question-option.component.scss']
})
export class QuestionOptionComponent implements OnInit {
  question: Question;
  questionId: number;
  content = '';
  optionLetter = '';
  isCorrect = false;
  selectedQuestion: number;
  view = '';
  isSubmitted: boolean;
  isTrue = true;
  isFalse = false;
  selectedEntry: boolean;

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.questionService.getQuestion(this.route.snapshot.paramMap.get('id')).subscribe((question) => {
      this.question = question;
      this.questionId = question.id;
      console.log('Get option letter' + this.questionId);
    });
  }

  submitOption(): void {
    if (this.content.length === 0 || this.optionLetter.length === 0) {
      return;
    }

    const option: QuestionOptions = {
       id: 0,
       optionLetter: this.optionLetter,
       content: this.content,
       questionId: this.questionId,
       isCorrect: this.selectedEntry,
       isDisplayed: true,
       isDeleted: false,
       createdOn: new Date(),
       updatedOn: new Date()
    };
    this.questionService.postQuestionOptions(this.questionId, option).subscribe((newOption) => {
        this.content = '';
        this.optionLetter = '';
        this.selectedEntry =  true;
        this.isSubmitted = true;
        console.log(newOption);
    });
  }
  toggleView(view: string): void {
    this.view = view;
  }

  toggleSelected(selected: number = null): void {
    if (selected) {
      if (this.isSelected(selected)) {
        return;
      }
      this.selectedQuestion = selected;
      console.log(selected);
      return;
    }
    this.selectedQuestion = null;
  }
   isSelected(id: number): boolean {
     return id === this.selectedQuestion;
   }
   onSelectionChange(entry): void {
     console.log(`Button clicked ${entry}`);
     this.selectedEntry = entry;
   }

   showToasterSuccess(): void {
    this.notifyService.showSuccess('Question option created successfully!!', 'http://inspirecc-001-site1.dtempurl.com');
 }
}
