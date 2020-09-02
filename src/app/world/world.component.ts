import { Component, OnInit } from '@angular/core';
import { IWorld } from './world';
import { WorldService } from './world.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  providers: [WorldService]
})
export class WorldComponent implements OnInit {
  worlds: IWorld[];
  showImage = true;


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private worldService: WorldService) { }

  ngOnInit(): void {
    this.worlds = this.worldService.getWorlds();
  }

}
