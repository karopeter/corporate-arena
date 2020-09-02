import { Component, OnInit } from '@angular/core';
import { IBrain } from './brain';
import { BrainService } from './brain.service';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss'],
  providers: [BrainService]
})
export class BrainComponent implements OnInit {
  brains: IBrain[];
  showImage =  true;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private brainService: BrainService) { }

  ngOnInit(): void {
    this.brains = this.brainService.getBrains();
  }

}
