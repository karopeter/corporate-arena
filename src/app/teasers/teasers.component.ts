import { Component, OnInit } from '@angular/core';
import { Question } from './../models/Question';
import { BrainTeaserService } from './../services/brain-teaser.service';
import { Router } from '@angular/router';
import { QuestionService } from './../services/question.service';
import { QuestionOptions } from './../models/QuestionOptions';


@Component({
  selector: 'app-teasers',
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.scss']
})
export class TeasersComponent implements OnInit {
  questions: Question[];
  content = '';
  questionOptions: QuestionOptions;
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
      if (this.questions.length > 0) {
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

  onSelectionChange(entry): void {
    this.selectedEntry = entry;
  }
}
