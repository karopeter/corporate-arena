import { RouterModule, Routes } from '@angular/router';
import { TeasersComponent } from './teasers/teasers.component';
import { ArenaComponent } from './arena/arena.component';
import { WorldComponent } from './world/world.component';
import { TrafficComponent } from './traffic/traffic.component';
import { ContactComponent } from './contact/contact.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { BlogComponent } from './blog/blog.component';


export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/arenas', pathMatch: 'full' },
  { path: 'arenas', component: ArenaComponent },
  { path: 'worlds', component: WorldComponent },
  { path: 'arenas', component: ArenaComponent },
  { path: 'teasers', component: TeasersComponent },
  { path: 'traffics', component: TrafficComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'blog', component: BlogComponent }
];


