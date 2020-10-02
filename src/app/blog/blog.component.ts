import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  article = {
    title: '',
    authorID: 0,
    isApproved: false,
    content: '',
    imageUrl: ''
  };
  submitted = false;


  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.retrieveBlogs();
  }

  retrieveBlogs(): void {
    this.blogService.getAll().subscribe(data => {
      this.article = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  saveBlog(): void {
    const data = {
      title: this.article.title,
      authorID: this.article.authorID,
      isApproved: this.article.isApproved,
      content: this.article.content,
      imageUrl: this.article.imageUrl
    };
    this.blogService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = false;
    }, error => {
      console.log(error);
    });
  }
}







