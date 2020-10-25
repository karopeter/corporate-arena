import { Injectable } from '@angular/core';
declare var toastr:any


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  send(title: string, message?:string) {
       toastr.send(title, message);
  }
}
