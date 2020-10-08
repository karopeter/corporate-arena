import { Component, OnInit } from '@angular/core';
import { BrainTeaser } from '../models/brainTeaser';
import { CommentRequest } from '../models/commentRequest';
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
   brainTeasersId;
   view = 'answer';

  constructor(private teasersService: BrainTeaserService) { }

  ngOnInit(): void {
     this.teasersService.getAll().subscribe((brainTeasers) => {
       this.brainTeasers = brainTeasers;
       console.log('list of brainTeasers' + this.brainTeasers);
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
  submitComment(id: number): void {
    if (this.body.length === 0 || this.name.length === 0) {
      return;
    }
    const comment: CommentRequest = {
      title: this.name,
      content: this.body,
      articleId: this.brainTeasersId,
    };
    this.teasersService.postComment(id, comment).subscribe((newComment) => {
      this.brainTeasers[id].comments = [
        newComment,
        ...this.brainTeasers[id].comments,
      ];
      this.body = '';
      this.name = '';
    });
  }

  isSelected(id: number): boolean {
     return id === this.selectedBrainTeaser;
  }

}
