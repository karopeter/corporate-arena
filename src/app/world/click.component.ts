import { Component, OnInit } from '@angular/core';
import { IClick } from './click';
import { ClickService } from '../world/click.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss'],
  providers: [ClickService]
})
export class ClickComponent implements OnInit {
  clicks: IClick[];
  showImage = true;

  toggleImage(): void {
    this.showImage =  !this.showImage;
  }

  constructor(private clickService: ClickService) {}

  ngOnInit(): void {
     this.clicks = this.clickService.getClicks();
  }

}
