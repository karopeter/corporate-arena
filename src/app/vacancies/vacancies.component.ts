import { Component, OnInit } from '@angular/core';
import { VacanciesService } from './vacancies.service';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from './../models/vacancy';
import { JobCategory } from './../models/jobCategory';
import { JobType } from './../models/jobType';
import { IVacancies } from './vacancies';


@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
  providers: [VacanciesService]
})
export class VacanciesComponent implements OnInit {
  vacancies: IVacancies[];
  vacancys: Vacancy[];
  categories: JobCategory[];
  jobTypes: JobType[];

  constructor(private vacanciesService: VacanciesService, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancies = this.vacanciesService.getVacancies();
  }
}
