import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/blog';
import { Comment } from '../models/comment';
import { CommentRequest } from '../models/commentRequest';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecodeclub-001-site1.ftempurl.com';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'  }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Blog[]> {
     return this.http.get<Blog[]>(`${baseUrl}/api/Article/GetAllArticles`);
  }

   get(slug: string): Observable<Blog> {
      return this.http.get<Blog>(`${baseUrl}/api​/Article​/GetArticle​/${slug}`);
   }

   postArticle(data: Blog): Observable<Blog> {
     return this.http.post<Blog>(`${baseUrl}/api/Article/CreateArticle`, data, this.httpOptions);
   }

   postComment(id: number, data: CommentRequest): Observable<Comment> {
     return this.http.post<Comment>(`${baseUrl}/api/Article/CommentOnArticle`, data, this.httpOptions);
   }
}
