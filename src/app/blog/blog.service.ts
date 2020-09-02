import { Injectable } from '@angular/core';
import { IBlog } from './blog';


@Injectable()
export class BlogService {
   getBlogs(): IBlog[] {
      return [
        {
         blogId: 1,
         blogName: 'Blog',
         blogImage: '/assets/img/arenas22.jpg',
         blogSpan: 'January 25, 2020',
         blogImage1: '/assets/img/arenas23.jpg',
         blogImage2: '/assets/img/arenas14.svg',
         blogImage3: '/assets/img/arenas25.svg',
         blogHeader: 'Friday Night Traffic Jam at Third',
         blogHeader1: 'Mainland Bridge: Cause Unknown',
         blogSpan1: 'posted on Janurary 8th 2020',
         description2: 'Sed officiis sit deleniti rerum sunt perspiciatis',
         blogSpan2: '/assets/img/arenas14.svg',
         blogImage4: '/assets/img/arenas6.jpg'
        }
      ];
   }
}

