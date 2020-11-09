import { Component, OnInit } from '@angular/core';
import { TrafficUpdateService } from '../services/trafficUpdate.service';
import { TrafficUpdate } from '../models/trafficUpdate';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss']
})
export class TrafficComponent implements OnInit {
  trafficUpdates: TrafficUpdate[];

  constructor(private trafficService: TrafficUpdateService) { }

  ngOnInit(): void {
      this.trafficService.getAll().subscribe((trafficUpdates) => {
          this.trafficUpdates = trafficUpdates;
          console.log(trafficUpdates);
      });
  }

  getUrl(slug: string): string {
     return `traffic-update-create/${slug}`;
  }
}
