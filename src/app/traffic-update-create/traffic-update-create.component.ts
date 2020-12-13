import { Component, OnInit } from '@angular/core';
import { TrafficUpdateService } from '../services/trafficUpdate.service';
import { NotificationService } from '../services/notification.service';
import { TrafficUpdate } from '../models/trafficUpdate';
import { Router } from '@angular/router';


@Component({
  selector: 'app-traffic-update-create',
  templateUrl: './traffic-update-create.component.html',
  styleUrls: ['./traffic-update-create.component.scss']
})
export class TrafficUpdateCreateComponent implements OnInit {
  trafficUpdate: TrafficUpdate;
  title = '';
  content = '';


  constructor(private trafficService: TrafficUpdateService, private route: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  submitTrafficUpdate(): void {
    if (this.content.length === 0 || this.title.length === 0) {
       return;
    }
    this.trafficUpdate = {
      title: this.title,
      description: this.content,
      slug: 'nothing',
      id: 0,
      trafficUpdateComments: null,
      dateCreated: new Date()
    };
    this.trafficService.postTrafficUpdate(this.trafficUpdate).subscribe((response) => {
        this.content = '';
        this.title = '';
        this.route.navigate(['/traffic-update-create']);
        console.log(response);
    });
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Message submitted successfully!!', 'http://inspirecc-001-site1.dtempurl.com');
 }

}
