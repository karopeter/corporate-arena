import { Injectable } from '@angular/core';
import { ITraffic } from './traffic';

@Injectable()
export class TrafficService {
   getTraffics(): ITraffic[] {
     return [
       {
         trafficId: 1,
         trafficName: 'Traffic Updates',
         trafficHeader: 'Friday Night Traffic Jam at Third',
         trafficHeader1: 'Mainland Bridge: Cause Unknown',
         trafficImage: '/assets/img/arenas17.jpg',
         trafficImage1: '/assets/img/arenas6.jpg',
         trafficImage2: '/assets/img/arenas18.jpg',
         trafficSpan: 'posted on Janurary 8th 2020',
         trafficSpan2: '/assets/img/arenas14.svg',
         description1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias reprehenderit consequuntur maxime deserunt repellendus',
         description2: 'Sed officiis sit deleniti rerum sunt perspiciatis',
         description3: 'Deleniti alias reprehenderit consequuntur maxime deserunt repellendus, fugit obcaecati provident dolorem dolor?'
       }
     ];
   }
}


