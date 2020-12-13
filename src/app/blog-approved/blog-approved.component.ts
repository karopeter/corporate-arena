import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-approved',
  templateUrl: './blog-approved.component.html',
  styleUrls: ['./blog-approved.component.scss']
})
export class BlogApprovedComponent implements OnInit {
  blogs: Blog[];
  approvedBlog: Blog;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getApproved().subscribe((blogs) => {
       this.approvedBlog = blogs[0];
       console.log(this.approvedBlog);
       this.blogs = blogs.slice(1);
    });
  }

  getUrl(slug: string): string {
    return `/blog-article/${slug}`;
  }
}
