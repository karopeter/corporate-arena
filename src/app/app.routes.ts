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
import { BrainTeaserGetComponent } from './brain-teaser-get/brain-teaser-get.component';
import { TrafficUpdateCreateComponent } from './traffic-update-create/traffic-update-create.component';
import { QuestionCreateComponent } from './Question/question-create/question-create.component';
import { QuestionListComponent } from './Question/question-list/question-list.component';
import { QuestionDetailsComponent } from './Question/question-details/question-details.component';
import { QuestionOptionComponent } from './Question/question-option/question-option.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';



export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/arenas', pathMatch: 'full' },
  { path: 'arenas', component: ArenaComponent },
  { path: 'worlds', component: WorldComponent },
  { path: 'arenas', component: ArenaComponent },
  { path: 'teasers', component: TeasersComponent },
  { path: 'brain-teaser/:id', component: BrainTeaserGetComponent },
  { path: 'brain-teaser-admin/:id', component: BrainTeaserGetWithAnswerComponent },
  { path: 'Questions-create', component:  QuestionCreateComponent },
  { path: 'Question-list', component: QuestionListComponent },
  { path: 'Question-details/:id', component: QuestionDetailsComponent },
  { path: 'Question-option/:id', component: QuestionOptionComponent },
  { path: 'traffics', component: TrafficComponent },
  { path: 'traffic-update-create', component: TrafficUpdateCreateComponent  },
  { path: 'contacts', component: ContactComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-create', component: BlogCreateComponent },
  { path: 'blog/:id', component: BlogArticleComponent }
];






