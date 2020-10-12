import { Component, OnInit } from '@angular/core';
import { BrainTeaser } from '../models/brainTeaser';
import { CommentRequest } from '../models/commentRequest';
import { BrainTeaserAnswer } from '../models/brainTeaserAnswer';
import { BrainTeaserService } from '../services/brain-teaser.service';

@Component({
  selector: 'app-teasers',
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.scss']
})
export class TeasersComponent implements OnInit {
  brainTeasers: BrainTeaser[];
  selectedBrainTeaser: number;
  name = '';
  body = '';
  brainTeaserId;
  view = 'answer';
  isSubmitted: boolean;

  constructor(private teasersService: BrainTeaserService) { }

  ngOnInit(): void {
    this.teasersService.getAll().subscribe((brainTeasers) => {
      this.brainTeasers = brainTeasers;
      if (this.brainTeasers.length > 0) {
           this.selectedBrainTeaser = this.brainTeasers[0].id;
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

   submitAnswer(id: number): void {
     if (this.body.length === 0 || this.name.length === 0) {
        return;
     }

     const answer: BrainTeaserAnswer = {
       id: 0,
       dateCreated: new Date(),
       userCreated: 1,
       userName: this.name,
       answer: this.body,
       isApproved: false,
       brainTeaserID: id
     };
     this.teasersService.postAnswer(id, answer).subscribe((newComment) => {
        // this.brainTeasers[id].brainTeaserAnswers = [
        //   newComment,
        //   ...this.brainTeasers[id].brainTeaserAnswers,
        // ];
        this.body = '';
        this.name = '';
        this.isSubmitted = true;
     });
   }

   getUrl(slug: string): string {
      return `/brain-teaser/${slug}`;
   }

   getWithAnswerUrl(slug: string): string {
      return `/brain-teaser-admin/${slug}`;
   }
}
