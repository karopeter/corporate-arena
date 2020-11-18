import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/Question';
import { QuestionService } from '../../services/question.service';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {
  question: Question;
  content = '';

  constructor(private questionService: QuestionService, private route: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  submitQuestion(): void {
     if (this.content.length === 0) {
       return;
     }
     this.question = {
      isDeleted: false,
      content: this.content,
      isDisplayed: true,
      id: 0,
      questionAnswers: null,
      questionOptions: null,
      createdOn: new Date(),
      updatedOn: new Date()
     };
     this.questionService.postQuestion(this.question).subscribe((response) => {
       this.content = '';
       this.route.navigate(['/Question-list']);
       console.log(response);
     });
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Question created successfully!!', 'http://inspirecc-001-site1.dtempurl.com');
 }
}
