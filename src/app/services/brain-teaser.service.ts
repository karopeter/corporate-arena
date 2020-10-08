import { Injectable } from '@angular/core';
import { BrainTeaser } from '../models/brainTeaser';
import { Comment } from '../models/comment';
import { CommentRequest } from '../models/commentRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecodeclub-001-site1.ftempurl.com';

@Injectable({
  providedIn: 'root'
})
export class BrainTeaserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':  'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<BrainTeaser[]>  {
     return this.http.get<BrainTeaser[]>(`${baseUrl}/api/BrainTeaser/GetAllBrainTeasers`);
  }

  postComment(id: number, data: CommentRequest): Observable<Comment> {
    return this.http.post<Comment>(`${baseUrl}/api/BrainTeaser/CreateBrainTeaser/${id}/comment`, data, this.httpOptions);
  }
}



