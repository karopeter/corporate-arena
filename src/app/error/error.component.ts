import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from './../services/notification.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(@Inject(NotificationService) public data: {message: string}) { }

  ngOnInit(): void {
  }

}
