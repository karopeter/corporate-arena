import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from './blog';
import { BlogsService } from './blogs.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  private blogsSub: Subscription;

  constructor(public blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogsService.getBlogs();
    this.blogsSub = this.blogsService.getBlogUpdateListener().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }

  onUpdate(blogId: string) {
    this.blogsService.updateBlog(blogId);
  }

  onDelete(blogId: string) {
    this.blogsService.deleteBlog(blogId);
  }
}

