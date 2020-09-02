import { Injectable } from '@angular/core';
import { IBrain } from './brain';

@Injectable()
export class BrainService {
  getBrains(): IBrain[] {
    return [
      {
        brainId: 1,
        brainName: 'Brain Teaser',
        description: 'How it works',
        urlImage: '/assets/img/arenas16.svg'
      }
    ];
  }
}

