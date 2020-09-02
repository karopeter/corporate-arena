import { Component, OnInit } from '@angular/core';
import { TrafficService } from './traffic.service';
import { ITraffic } from './traffic';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
  providers: [TrafficService]
})
export class TrafficComponent implements OnInit {
  traffics: ITraffic[];

  constructor(private trafficService: TrafficService) { }

  ngOnInit(): void {
     this.traffics = this.trafficService.getTraffics();
  }

}
