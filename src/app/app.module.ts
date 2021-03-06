import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { BrainTeaserGetWithAnswerComponent } from './brain-teaser-get-with-answer/brain-teaser-get-with-answer.component';
import { BrainTeaserGetComponent } from './brain-teaser-get/brain-teaser-get.component';
import { TrafficUpdateCreateComponent } from './traffic-update-create/traffic-update-create.component';
import { QuestionListComponent } from './Question/question-list/question-list.component';
import { QuestionCreateComponent } from './Question/question-create/question-create.component';
import { QuestionDetailsComponent } from './Question/question-details/question-details.component';
import { QuestionEditComponent } from './Question/question-edit/question-edit.component';
import { QuestionOptionComponent } from './Question/question-option/question-option.component';
import { NotificationComponent } from './notification/notification.component';
import { BlogApprovedComponent } from './blog-approved/blog-approved.component';
import { TrafficUpdateArticleComponent } from './traffic-update-article/traffic-update-article.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';



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
    BlogArticleComponent,
    BlogApprovedComponent,
    BrainTeaserGetWithAnswerComponent,
    BrainTeaserGetComponent,
    TrafficUpdateCreateComponent,
    QuestionListComponent,
    QuestionCreateComponent,
    QuestionDetailsComponent,
    QuestionEditComponent,
    QuestionOptionComponent,
    NotificationComponent,
    TrafficUpdateArticleComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/arenas', pathMatch: 'full' },
      { path: 'arenas', component: ArenaComponent },
      { path: 'teasers', component: TeasersComponent },
      { path: 'brain-teaser-get/:id', component: BrainTeaserGetComponent },
      { path: 'brain-teaser-admin/:id', component: BrainTeaserGetWithAnswerComponent },
      { path: 'Questions-create', component:  QuestionCreateComponent },
      { path: 'Question-list', component: QuestionListComponent },
      { path: 'Question-details/:id', component: QuestionDetailsComponent },
      { path: 'Question-option/:id', component: QuestionOptionComponent },
      { path: 'traffics', component: TrafficComponent },
      { path: 'traffic-update-create', component: TrafficUpdateCreateComponent  },
      { path: 'traffic-update-article/:id', component: TrafficUpdateArticleComponent },
      { path: 'contacts', component: ContactComponent },
      { path: 'vacancies', component: VacanciesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'blog-create', component: BlogCreateComponent },
      { path: 'blog-article/:id', component: BlogArticleComponent },
      { path: 'blog-approved', component: BlogApprovedComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent }
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
