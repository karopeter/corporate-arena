import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from './blog';
import { BlogsService } from './blogs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  private blogsSub: Subscription;
  blog: Blog;
  isLoading = false;
  private mode = 'create';
  private blogId: string;

  constructor(public blogsService: BlogsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('blogId')) {
        this.mode = 'edit';
        this.blogId = paramMap.get('blogId');
        this.isLoading = true;
        this.blogsService.getBlog(this.blogId).subscribe(blogData => {
           this.isLoading = false;
           this.blog = { id: blogData._id, title: blogData.title, authorID: blogData.authorID, isApproved: blogData.isApproved, content: blogData.content, imageUrl: blogData.imageUrl};
        });
      } else {
        this.mode = 'create';
        this.blogId = null;
      }
    });
    this.blogsService.getBlogs();
    this.blogsSub = this.blogsService.getBlogUpdateListener().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }


  onDelete(blogId: string) {
    this.blogsService.deleteBlog(blogId);
  }
}

