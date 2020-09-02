import { Injectable } from '@angular/core';
import { IClick } from './click';

@Injectable()
export class ClickService {
  getClicks(): IClick[] {
     return [
       {
        clickId: 1,
        clickName: 'Traffic News one click away',
        description1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio quibusdam error, nemo repudiandae molestias',
        description2:  'deserunt dolore enim eveniet vero distinctio eos, impedit fugit voluptas accusantium explicabo quas eaque. Obcaecati?',
        description3: 'dipisicing elit. Iste aperiam, aut harum doloribus suscipit cumque saepe debitis maxime animi perferendis dolore, fugit est! Repellat nihil a provident unde quas veritatis?',
        urlImage1: '/assets/img/arenas19.svg',
        urlImage2: '/assets/img/arenas21.svg'
       }
     ];
  }
}

