import { Component, OnInit } from '@angular/core';
import { TrafficService } from './traffic.service';
import { TrafficUpdate } from '../services/trafficUpdate.service';
import { ITraffic } from './traffic';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.scss'],
  providers: [TrafficService]
})
export class TrafficComponent implements OnInit {
  traffics: ITraffic[];
  trafficUpdates = {
    title: '',
    description: ''
  };

  constructor(private trafficService: TrafficService,  private trafficUpdateService: TrafficUpdate) { }

  ngOnInit(): void {
     this.traffics = this.trafficService.getTraffics();
     this.retrieveTrafficUpdate();
  }

  retrieveTrafficUpdate(): void {
    this.trafficUpdateService.getAll().subscribe(data => {
      this.trafficUpdates = data;
      console.log(data);
     }, error => {
       console.log(error);
     });
   }

   refreshList(): void {
     this.retrieveTrafficUpdate();
   }
}
