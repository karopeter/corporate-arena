import { Injectable } from '@angular/core';
import { ITeasers } from './teasers';

@Injectable()
export class TeasersService {
    getTeasers(): ITeasers[] {
       return [
         {
           teasersId: 1,
           teasersName: 'Brain Teasers',
           teasersImage: '/assets/img/arenas12.svg'
         }
       ];
    }
}
