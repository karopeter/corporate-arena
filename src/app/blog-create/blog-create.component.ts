import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';
import {  CommentRequest } from '../models/commentRequest';
import { BlogService } from '../services/blog.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent implements OnInit {
  blog: Blog;
  title = '';
  content = '';


  constructor(private blogService: BlogService, private route: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  submitArticle(): void {
    if (this.content.length === 0 || this.title.length === 0) {
       return;
    }
    this.blog = {
      title: this.title,
      content: this.content,
      slug: 'nothing',
      id: 0,
      comments: null,
      publishedAt: null,
      dateCreated: new Date(),
    };
    this.blogService.postArticle(this.blog).subscribe((response) => {
       this.content = '';
       this.title = '';
       this.route.navigate(['/blog']);
       console.log(response);
    });
  }

  showToasterSuccess() {
     this.notifyService.showSuccess('Message submitted successfully!!', 'http://inspirecc-001-site1.dtempurl.com')
  }

}
