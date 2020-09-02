import { Injectable } from '@angular/core';
import { IVacancies } from './vacancies';


@Injectable()
export class VacanciesService {
   getVacancies(): IVacancies[] {
      return [
         {
           vacanciesId: 1,
           vacanciesName: 'Your next job is one search away',
           vacanciesName1: 'Job Categories',
           vacanciesImage1: '/assets/img/blackboard.svg',
           vacanciesImage2: '/assets/img/folder.svg',
           vacanciesImage3: '/assets/img/box.svg',
           vacanciesImage4: '/assets/img/layers.svg',
           description: 'Full Time Jobs',
           description1: 'Part Time Jobs',
           description2: 'Remote Jobs',
           description3: 'Freelance Gigs',
           description4: 'Product Manager',
           vacanciesButton: 'View all jobs'
         }
      ];
   }
}

