import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog: Blog;
  title = '';
  body = '';
  articleId: number;


  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getArticle(this.route.snapshot.paramMap.get('ID'));
  }

  getArticle(ID): void {
    this.blogService.get(ID).subscribe(blog => {
      this.blog = blog;
      this.articleId = blog.ID;
    });
  }

  submitComment(): void {
    if (this.body.length === 0 || this.title.length === 0) {
      return;
    }
  }

   createArticle(): void {
     this.blogService.create(this.articleId, this.blog).subscribe(newComment => {
       this.blog = newComment;
       this.body = '';
       this.title = '';
     });
   }
}







