import { Injectable } from '@angular/core';
import { IArena } from './arena';

@Injectable()
export class ArenaService {
    getArenas(): IArena[] {
      return [
        {
         arenaId: 1,
         arenaName: 'Title Goes From Here',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta quas repudiandae'
        }
      ];
    }
}
