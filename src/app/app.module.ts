// import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { MatNativeDateModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

//Borrowed Components
// import { NgDatepickerModule } from './ng-datepicker/module/ng-datepicker.module';ss


//User Components - for specific User Content
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NewsComponent } from './news/news.component';
import { CounterComponent } from './counter/counter.component';
import { AboutComponent } from './about/about.component';
import { AcademicsComponent } from './academics/academics.component';
import { SchoolsComponent } from './academics/schools.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { LibraryComponent } from './library/library.component';
import { InquireComponent } from './admissions/inquire.component';
import { VisitsComponent } from './admissions/visits.component';
import { InfoDeskFormComponent } from './info-desk-form/info-desk-form.component';
import { ArticleListComponent } from './article-list/article-list.component';
// import { LibAssetFormComponent } from './lib-asset-form/lib-asset-form.component';
import { ReportsComponent } from './reports/reports.component';
import { PaginationComponent } from './shared/pagination.component';
// import { StudentFormComponent } from './student-form/student-form.component';
// import { GuardianFormComponent } from './guardian-form/guardian-form.component';



//services
import { LibAssetService } from './services/libasset.service';
import { ArticleService } from './services/article.service';
import { InquiryService } from './services/inquiry.service';
import { GuardianService } from './services/guardian.service';
import { StudentService } from './services/student.service';


//Pipes
import { FilterPipe } from './filters/filter.pipe';
import { AppErrorHandler } from './app.error-handler';

import en from '@angular/common/locales/en';

registerLocaleData(en);

//Raven.config('...').install();

import { BBSRevampMaterialModule } from '../material.module';



@NgModule({
  declarations: [
    AppComponent, NavMenuComponent, PaginationComponent,
    HeaderComponent, ArticleListComponent,
    HomeComponent,ErrorComponent, NewsComponent,
    CounterComponent,AboutComponent,
    AcademicsComponent,SchoolsComponent,
    AdmissionsComponent,InquireComponent,
    VisitsComponent,LibraryComponent,
    FetchDataComponent,InfoDeskFormComponent,
  //  LibAssetFormComponent,
    ReportsComponent,
 //   StudentFormComponent, GuardianFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule, HttpClientModule, ChartsModule,
    FormsModule, ToastrModule.forRoot(),
    BrowserAnimationsModule, MatNativeDateModule,
    FormsModule, BBSRevampMaterialModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'not-found-error', component: ErrorComponent },
      { path: 'articles', component: NewsComponent },
      { path: 'articles/new', component: InfoDeskFormComponent},
      { path: 'newsandevents/:id', component: InfoDeskFormComponent},
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'about', component: AboutComponent},
      { path: 'academics', component: AcademicsComponent },
      { path: 'schools', component: SchoolsComponent },
      { path: 'admissions', component: AdmissionsComponent },

      /*
      { path: 'library', component: LibraryComponent },
      { path: 'library/new', component: LibAssetFormComponent},
      { path: 'library/:id', component: LibAssetFormComponent },
      */
      { path: 'inquire', component: InquireComponent },
      { path: 'visit', component: VisitsComponent },
      { path: 'reports', component: ReportsComponent },
      /*
      { path: 'student/new', component: StudentFormComponent },
      { path: 'student/:id', component: StudentFormComponent },
      { path: 'guardian/new', component: GuardianFormComponent },
      { path: 'guardian/:id', component: GuardianFormComponent },
      */
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    LibAssetService,ArticleService,
    InquiryService, StudentService, GuardianService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// platformBrowserDynamic().bootstrapModule(AppModule);
