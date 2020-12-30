import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { CommentRequest } from '../models/commentRequest';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  blog: Blog;
  name = '';
  body = '';
  articleId: number;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogService.getArticleById(this.route.snapshot.paramMap.get('id')).subscribe((blog) => {
      this.blog = blog;
      this.articleId = blog.id;
      console.log('Get blog letter' + this.articleId);
    });
  }

  submitComment(): void {
     if (this.body.length === 0 || this.name.length === 0) {
        return;
     }

     const comment: CommentRequest = {
       name: this.name,
       body: this.body
     };
     this.blogService.postComment(this.articleId, comment).subscribe((newComment) => {
       this.blog.comments = [newComment, ...this.blog.comments];
       this.body = '';
       this.name = '';
     });
  }
}


