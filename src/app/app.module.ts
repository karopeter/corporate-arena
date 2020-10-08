import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArenaComponent } from './arena/arena.component';
import { WorldComponent } from './world/world.component';
import { ClickComponent } from './world/click.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMainComponent } from './footer/footer-main.component';
import { BrainComponent } from './arena/brain.component';
import { TeasersComponent } from './teasers/teasers.component';
import { TrafficComponent } from './traffic/traffic.component';
import { ContactComponent } from './contact/contact.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArenaComponent,
    WorldComponent,
    ClickComponent,
    FooterComponent,
    FooterMainComponent,
    BrainComponent,
    TeasersComponent,
    TrafficComponent,
    ContactComponent,
    VacanciesComponent,
    BlogComponent,
    BlogCreateComponent,
    BlogArticleComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/arenas', pathMatch: 'full' },
      { path: 'arenas', component: ArenaComponent },
      { path: 'teasers', component: TeasersComponent },
      { path: 'traffics', component: TrafficComponent },
      { path: 'contacts', component: ContactComponent },
      { path: 'vacancies', component: VacanciesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog-create', component: BlogCreateComponent },
      { path: 'blog-article', component: BlogArticleComponent }
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
