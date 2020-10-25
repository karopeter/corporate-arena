import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/Question';
import { QuestionService } from '../../services/question.service';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];
   content = '';
   selectedBrainTeaser: number;
   page: number;
   pageSize: number;
   questionId;
   view = 'answer';
   username = 'admin';
   selectedEntry: boolean;

  constructor(private questionService: QuestionService, private route: Router) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.questionService.getAll(1, 10).subscribe((data) => {
         this.questions = data;
         if (this.questions.length > 0 ) {
            this.selectedBrainTeaser = this.questions[0].id;
         }
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

       this.selectedBrainTeaser = selected;
       console.log(selected);
       return;
     }
     this.selectedBrainTeaser = null;
  }

  isSelected(id: number): boolean {
    return id === this.selectedBrainTeaser;
  }

  getUrl(slug: string): string {
     return `/question/${slug}`;
  }

}
