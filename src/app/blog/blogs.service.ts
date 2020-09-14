import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Blog } from './blog';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:5000/api/v1/Article';

@Injectable({ providedIn: 'root'})
export class BlogsService {
   constructor(private http: HttpClient, private router: Router) {}

   getAllBlogs(): Observable<any> {
     return this.http.get(baseUrl);
   }

   getBlog(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
   }

   createBlog(data): Observable<any> {
     return this.http.post(baseUrl, data);
   }

   updateBlog(id, data): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
   }

   deleteBlog(id): Observable<any> {
     return this.http.delete(`${baseUrl}/${id}`);
   }
}

