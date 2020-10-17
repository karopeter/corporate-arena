import { RouterModule, Routes } from '@angular/router';
import { BrainTeaserGetWithAnswerComponent } from './brain-teaser-get-with-answer/brain-teaser-get-with-answer.component';
import { TeasersComponent } from './teasers/teasers.component';
import { ArenaComponent } from './arena/arena.component';
import { WorldComponent } from './world/world.component';
import { TrafficComponent } from './traffic/traffic.component';
import { ContactComponent } from './contact/contact.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BrainTeaserGetComponent } from './brain-teaser-get/brain-teaser-get.component';
import { TrafficUpdateCreateComponent } from './traffic-update-create/traffic-update-create.component';



export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/arenas', pathMatch: 'full' },
  { path: 'arenas', component: ArenaComponent },
  { path: 'worlds', component: WorldComponent },
  { path: 'arenas', component: ArenaComponent },
  { path: 'teasers', component: TeasersComponent },
  { path: 'brain-teaser/:id', component: BrainTeaserGetComponent },
  { path: 'brain-teaser-admin/:id', component: BrainTeaserGetWithAnswerComponent },
  { path: 'traffics', component: TrafficComponent },
  { path: 'traffic-update-create', component: TrafficUpdateCreateComponent  },
  { path: 'contacts', component: ContactComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-create', component: BlogCreateComponent },
  { path: 'blog-article', component: BlogArticleComponent }
];






