import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { IBlog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {
  blogs: IBlog[];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }

}
