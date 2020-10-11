import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrainTeaserRequest } from '../models/brainTeaserRequest';
import { BrainTeaser } from '../models/brainTeaser';
import { Comment } from '../models/comment';
import { CommentRequest } from '../models/commentRequest';
import { BrainTeaserAnswer } from '../models/brainTeaserAnswer';
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

  getAll(): Observable<BrainTeaser[]> {
    return this.http.get<BrainTeaser[]>(`${baseUrl}/api/BrainTeaser/GetAllBrainTeasers`);
  }

  get(slug: string): Observable<BrainTeaser> {
     return this.http.get<BrainTeaser>(`${baseUrl}​/api​/BrainTeaser​/GetBrainTeaserAndWinner​/${slug}`);
  }

  getWithAnswer(slug: string): Observable<BrainTeaser> {
    return this.http.get<BrainTeaser>(`${baseUrl}/api/BrainTeaser/GetBrainTeaserAndAnswer/${slug}`);
  }

  postAnswer(id: number, data: BrainTeaserAnswer): Observable<BrainTeaserAnswer> {
    return this.http.post<BrainTeaserAnswer>(`${baseUrl}/api/BrainTeaser/AnswerBrainTeaser`, data, this.httpOptions);
  }

  approveAnswer(data: BrainTeaserRequest): Observable<BrainTeaserRequest> {
      return this.http.post<BrainTeaserRequest>(`${baseUrl}/api/BrainTeaser/ApproveBrainTeaserAnswer`, data, this.httpOptions);
  }

  displayWinner(data: BrainTeaserRequest): Observable<BrainTeaserRequest> {
    return this.http.post<BrainTeaserRequest>(`${baseUrl}/api/BrainTeaser/DisplayBrainTeaserWinner`, data, this.httpOptions);
  }
}



