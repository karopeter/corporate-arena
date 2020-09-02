import { Component, OnInit } from '@angular/core';
import { IArena } from './arena';
import { ArenaService } from './arena.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
  providers: [ArenaService]
})
export class ArenaComponent implements OnInit {

   arenas: IArena[];

  constructor(private arenaService: ArenaService) { }

  ngOnInit(): void {
    this.arenas = this.arenaService.getArenas();
  }

}
