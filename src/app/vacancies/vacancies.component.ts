import { Component, OnInit } from '@angular/core';
import { VacanciesService } from './vacancies.service';
import { VacancyService } from '../services/vacancy.service';
import { IVacancies } from './vacancies';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
  providers: [VacanciesService]
})
export class VacanciesComponent implements OnInit {
  vacancies: IVacancies[];
  vacancy = {
    email: '',
    url: '',
    jobTitle: ''
  };
  submitted = false;
  title =  '';

  constructor(private vacanciesService: VacanciesService, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancies = this.vacanciesService.getVacancies();
    this.retrieveVacancy();
  }

  retrieveVacancy(): void {
    this.vacancyService.getAll().subscribe(data => {
       this.vacancy = data;
       console.log(data);
    }, error => {
      console.log(error);
    });
  }

  refreshList(): void {
    this.retrieveVacancy();
  }

  saveVacancy(): void {
    const data = {
      email: this.vacancy.email,
      url: this.vacancy.url,
      jobTitle: this.vacancy.jobTitle
    };
    this.vacancyService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    }, error => {
      console.log(error);
    });
  }

  searchTitle(): void {
    this.vacancyService.findByTitle(this.title).subscribe(data => {
       this.vacancy = data;
       console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
