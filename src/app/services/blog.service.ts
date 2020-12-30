import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/blog';
import { Comment } from '../models/comment';
import { CommentRequest } from '../models/commentRequest';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecc-001-site1.dtempurl.com';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'  }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Blog[]> {
     return this.http.get<Blog[]>(`${baseUrl}/api/Article/GetArticles`);
  }

   getArticleById(slug: string): Observable<Blog> {
      return this.http.get<Blog>(`${baseUrl}/api​/Article​/GetArticle​/${slug}`);
   }

   getApproved(): Observable<Blog[]> {
     return this.http.get<Blog[]>(`${baseUrl}/api/Article/GetApprovedArticles`);
   }

   getApprovedById(slug: string): Observable<Blog> {
      return this.http.get<Blog>(`${baseUrl}/api/Article/GetApprovedArticle/${slug}`);
   }

   postArticle(data: Blog): Observable<Blog> {
     return this.http.post<Blog>(`${baseUrl}/api/Article/CreateArticle`, data, this.httpOptions);
   }

   postComment(id: number, data: CommentRequest): Observable<Comment> {
     return this.http.post<Comment>(`${baseUrl}/api/Article/CommentOnArticle`, data, this.httpOptions);
   }
}
