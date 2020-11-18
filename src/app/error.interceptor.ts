import {  HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { ErrorComponent } from './error/error.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private notifyService: NotificationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      return next.handle(req).pipe(
         catchError((error: HttpErrorResponse) => {
            let errorMessage = 'AN UNKNOWN ERROR!';
            if (error.error.message) {
              errorMessage = error.error.message;
            }
            this.notifyService.showError(ErrorComponent, { data: {message: errorMessage}});
            return throwError(error);
         })
      );
    }

}
