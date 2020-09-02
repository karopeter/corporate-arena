import { Component, OnInit } from '@angular/core';
import { TeasersService } from './teasers.service';
import { ITeasers } from './teasers';

@Component({
  selector: 'app-teasers',
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.scss'],
  providers: [TeasersService]
})
export class TeasersComponent implements OnInit {
  teasers: ITeasers[];
  showImage =  true;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private teasersService: TeasersService) { }

  ngOnInit(): void {
    this.teasers = this.teasersService.getTeasers();
  }

}
