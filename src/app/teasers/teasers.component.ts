import { Component, OnInit } from '@angular/core';
import { TeasersService } from '../services/teasrers.service';

@Component({
  selector: 'app-teasers',
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.scss']
})
export class TeasersComponent implements OnInit {
  teasers = {
    riddle: '',
    comments: []
  };
  submitted = false;

  constructor(private teasersService: TeasersService) { }

  ngOnInit(): void {
    this.retrieveTeasers();
  }


  retrieveTeasers(): void {
    this.teasersService.getAll().subscribe(data => {
      this.teasers = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  refreshList(): void {
    this.retrieveTeasers();
  }

}
