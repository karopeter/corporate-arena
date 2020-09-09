import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from './blog';

@Injectable({ providedIn: 'root'})
export class BlogsService {
  private blogs: Blog[] = [];
  private blogsUpdated = new Subject<Blog[]>();

   constructor(private http: HttpClient) {}

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

   updateBlog(blogId: string) {
       this.http.patch('http://localhost:5000/api/v1/Article' + blogId).subscribe(() => {
         console.log('UPDATED!');
       });
   }

   addBlog(title: string, authorID: number, isApproved: boolean, content: string, imageUrl: string) {
     const blog: Blog = { id: null, title: title, authorID: authorID, isApproved: isApproved, content: content, imageUrl };
     this.http.post<{ message: string }>('http://localhost:5000/api/v1/Article', blog).subscribe(responseData => {
        console.log(responseData.message);
        this.blogs.push(blog);
        this.blogsUpdated.next([...this.blogs]);
     });
   }

   deleteBlog(blogId: string) {
     this.http.delete('http://localhost:5000/api/v1/Article' + blogId).subscribe(() => {
       console.log('DELETED!');
     });
   }
}

