import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrafficUpdate } from '../models/TrafficUpdate';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs';
import { CommentRequest } from './../models/commentRequest';
import { CommentRequestTrafficUpdate } from './../models/commentRequestTrafficUpdate';

const baseUrl = 'http://inspirecc-001-site1.dtempurl.com';

@Injectable({
 providedIn: 'root'
})


export class TrafficUpdateService {

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) { }

  getAll(): Observable<TrafficUpdate[]> {
     return this.http.get<TrafficUpdate[]>(`${baseUrl}/api/TrafficUpdate/GetAllTrafficUpdates`);
  }

  getBySlug(slug: string): Observable<TrafficUpdate> {
       return this.http.get<TrafficUpdate>(`${baseUrl}/api/TrafficUpdate/GetTrafficUpdate/${slug}`);
  }

  postTrafficUpdate(data: TrafficUpdate): Observable<TrafficUpdate> {
    return this.http.post<TrafficUpdate>(`${baseUrl}/api/TrafficUpdate/saveTrafficUpdate`, data, this.httpOptions);
  }

  postComment(data: CommentRequestTrafficUpdate): Observable<CommentRequestTrafficUpdate> {
    return this.http.post<CommentRequestTrafficUpdate>(`${baseUrl}/api/TrafficUpdate/CommentOnTrafficUpdate`, data, this.httpOptions);
  }
}


