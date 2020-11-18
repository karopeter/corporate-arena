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
  title = '';
  content = '';
  articleId: number;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.blogService.get(this.route.snapshot.paramMap.get('id')).subscribe((blog) => {
       this.blog = blog;
       this.articleId = blog.id;
     });
  }

  submitComment(): void {
    if (this.content.length === 0 || this.title.length === 0) {
       return;
    }

    const comment: CommentRequest = {
      title: this.title,
      content: this.content,
      articleId: this.articleId
    };
    this.blogService.postComment(this.articleId, comment).subscribe((newComment) => {
       this.content = '';
       this.title = '';
       console.log(newComment);
    });
  }
}
