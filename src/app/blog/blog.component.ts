import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blog = {
    title: String,
    authorID: Number,
    isApproved: Boolean,
    content: String,
    imageUrl: String
  };

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {}


  saveBlog(): void {
    const data = {
      title: this.blog.title,
      authorID: this.blog.authorID,
      isApproved: this.blog.isApproved,
      content: this.blog.content,
      imageUrl: this.blog.imageUrl
    };
    this.blogsService.createBlog(data).subscribe(response => {
      console.log(response);
    });
  }
}



