import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecodeclub-001-site1.ftempurl.com';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }),
  };

  constructor(private httpClient: HttpClient) {}

   getAll(): Observable<any> {
     return this.httpClient.get(baseUrl);
   }

   get(id): Observable<any> {
     return this.httpClient.get(`${baseUrl}/api/Article/GetArticle/{ID}`);
   }

   create(id: number, newComment): Observable<any> {
     console.log('comment: ' + newComment);
     return this.httpClient.post(`${baseUrl}/api/Article/CreateArticle`, newComment, this.httpOptions);
   }
}
