import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecodeclub-001-site1.ftempurl.com';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  constructor(private http: HttpClient) { }

   getAll(): Observable<any> {
     return this.http.get(`${baseUrl}/api/Vacancy/GetAllVacancies`);
   }

   create(data): Observable<any> {
     return this.http.post(`${baseUrl}/api/Vacancy/SaveVacancy`, data);
   }

   findByTitle(title): Observable<any> {
     return this.http.get(`${baseUrl}/api/Vacancy/GetVacancyByTitle?title=${title}`);
   }
}
