import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://inspirecodeclub-001-site1.ftempurl.com';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
   httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
   };

   constructor(private http: HttpClient) {}

   getAll(): Observable<any> {
      return this.http.get<any>(`${baseUrl}/api/Contact/GetAllContacts`);
   }

   postContact(data: any): Observable<any> {
      return this.http.post(`${baseUrl}/api/Contact/SendMessage`, data, this.httpOptions);
   }
}







