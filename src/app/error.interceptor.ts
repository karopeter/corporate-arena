import { Injectable } from '@angular/core';
import { NgxSpinnersModule } from 'ngx-spinners';
import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
  count = 0;

    constructor(private spinner: NgxSpinnersModule) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.spinner.show();

       this.count++;

       return next.handle(req).pipe( tap(event => console.log(event),
          error => console.log(error)
       ), finalize(() => {
         this.count--;

         if (this.count === 0) {
           this.spinner.hide();
         }
       }));
    }
}
