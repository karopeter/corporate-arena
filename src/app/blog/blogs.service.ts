import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from './blog';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class BlogsService {
  private blogs: Blog[] = [];
  private blogsUpdated = new Subject<Blog[]>();

   constructor(private http: HttpClient, private router: Router) {}

   getBlogs() {
       this.http.get<{ message: string; blogs: any }>('http://localhost:5000/api/v1/Article').pipe(map((blogData) => {
         return blogData.blogs.map(blog => {
           return {
             title: blog.title,
             authorID: blog.authorID,
             isApproved: blog.isApproved,
             content: blog.content,
             imageUrl: blog.imageUrl,
             id: blog._id
           };
         });
       })).subscribe(transformedBlogs => {
         this.blogs = transformedBlogs;
         this.blogsUpdated.next([...this.blogs]);
       });
   }

   getBlogUpdateListener() {
     return this.blogsUpdated.asObservable();
   }

   getBlog(id: string) {
     return this.http.get<{ _id: string; title: string; authorID: number; isApproved: boolean; content: string; imageUrl: string}>('http://localhost:5000/api/v1/Article' + id);
   }


   addBlog(title: string, authorID: number, isApproved: boolean, content: string, imageUrl: string) {
     const blog: Blog = { id: null, title: title, authorID: authorID, isApproved: isApproved, content: content, imageUrl };
     this.http.post<{ message: string }>('http://localhost:5000/api/v1/Article', blog).subscribe(responseData => {
        console.log(responseData.message);
        this.blogs.push(blog);
        this.blogsUpdated.next([...this.blogs]);
        this.router.navigate(['/']);
     });
   }

   updateBlog(id: string, title: string, authorID: number, isApproved: boolean, content: string, imageUrl: string) {
      const blog: Blog = { id: id, title: title, authorID: authorID, isApproved: isApproved, content: content, imageUrl: imageUrl };
      this.http.patch('http://localhost:5000/api/v1/Article' + id, blog).subscribe(response => {
         const updatedBlogs = [...this.blogs];
         const oldBlogIndex = updatedBlogs.findIndex(b => b.id === blog.id);
         updatedBlogs[oldBlogIndex] = blog;
         this.blogs = updatedBlogs;
         this.blogsUpdated.next([...this.blogs]);
         this.router.navigate(['/']);
      });
   }

   deleteBlog(blogId: string) {
     this.http.delete('http://localhost:5000/api/v1/Article' + blogId).subscribe(() => {
       const updatedBlogs = this.blogs.filter(blog => blog.id !== blogId);
       this.blogs = updatedBlogs;
       this.blogsUpdated.next([...this.blogs]);
     });
   }
}

