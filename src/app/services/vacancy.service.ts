import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vacancy } from '../models/vacancy';
import { JobCategory } from '../models/jobCategory';
import { JobType } from '../models/jobType';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecodeclub-001-site1.ftempurl.com';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
   };

  constructor(private http: HttpClient) {}

   getAll(): Observable<Vacancy[]> {
     return this.http.get<Vacancy[]>(`${baseUrl}/api/Vacancy/GetAllVacancies`);
   }
}


