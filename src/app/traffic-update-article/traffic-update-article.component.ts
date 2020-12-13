import { Component, OnInit } from '@angular/core';
import { CommentRequestTrafficUpdate } from '../models/commentRequestTrafficUpdate';
import { TrafficUpdate } from '../models/trafficUpdate';
import { Comment } from '../models/comment';
import { CommentRequest } from '../models/commentRequest';
import { TrafficUpdateService } from '../services/trafficUpdate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-traffic-update-article',
  templateUrl: './traffic-update-article.component.html',
  styleUrls: ['./traffic-update-article.component.scss']
})
export class TrafficUpdateArticleComponent implements OnInit {
  trafficUpdate: TrafficUpdate;
  name = '';
  body = '';
  articleId: number;

  constructor(private trafficService: TrafficUpdateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.trafficService.getBySlug(this.route.snapshot.paramMap.get('id')).subscribe((trafficUpdate) => {
       this.trafficUpdate = trafficUpdate;
       this.articleId = trafficUpdate.id;
    });
  }

  submitComment(): void {
    if (this.body.length === 0 || this.name.length === 0) {
      return;
    }
    const comment: CommentRequestTrafficUpdate = {
      id: 0,
      userCreated: 0,
      title: this.name,
      comment: this.body,
      trafficUpdateId: this.articleId,
      dateCreated: new Date()
    };
    this.trafficService.postComment(comment).subscribe((responseData) => {
       this.trafficUpdate.trafficUpdateComments = [
         responseData,
        ...this.trafficUpdate.trafficUpdateComments
       ];
       this.body = '';
       this.name = '';
    });
  }

}
