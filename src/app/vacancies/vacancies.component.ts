import { Component, OnInit } from '@angular/core';
import { VacanciesService } from './vacancies.service';
import { IVacancies } from './vacancies';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
  providers: [VacanciesService]
})
export class VacanciesComponent implements OnInit {
  vacancies: IVacancies[];

  constructor(private vacanciesService: VacanciesService) { }

  ngOnInit(): void {
    this.vacancies = this.vacanciesService.getVacancies();
  }

}
