import { Injectable } from '@angular/core';
import { IWorld } from './world';

@Injectable()
export class WorldService {
  getWorlds(): IWorld[] {
     return [
       {
         worldId: 1,
         worldName: 'Find Vacancies From to',
         worldName1: 'Companies in the world',
         description1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vitae blanditiis non aspernatur harum voluptatum itaque recusandae expedita',
         description2: 'voluptatibus veniam odit omnis ad. ut quibusdam suscipit porro ducimus accusamus temporibus',
         description3: ' amet, consectetur adipisicing elit. Ullam, totam placeat quisquam nostrum similique laborum! Repellendus rem id, autem quisquam tempore, voluptatibus',
         worldButton: 'View Job Vacancies',
         imageUrl: '/assets/img/arenas7.svg'
       }
     ];
  }
}

