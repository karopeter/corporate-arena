import { Injectable } from '@angular/core';
import { QuestionOptions } from '../models/QuestionOptions';
import { QuestionAnswers } from '../models/QuestionAnswers';
import { Question } from '../models/Question';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://inspirecc-001-site1.dtempurl.com';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
     httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json'})
     };

  constructor(private http: HttpClient) { }

   getAll(page: number, pageSize: number): Observable<Question[]> {
       return this.http.get<Question[]>(`${baseUrl}/api/Question/${page}/${pageSize}`);
   }

   getQuestion(slug: string): Observable<Question> {
       return this.http.get<Question>(`${baseUrl}/api/Question/${slug}`);
   }

   postQuestion(data: Question): Observable<any> {
     return this.http.post(`${baseUrl}/api/Question`, data, {responseType: 'text'});
   }

   postQuestionOptions(id: number, data: QuestionOptions): Observable<any> {
      return this.http.post(`${baseUrl}/api/Question/option/${id}`, data, {responseType: 'text'});
   }
}


