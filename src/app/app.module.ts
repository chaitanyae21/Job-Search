import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobHttpService } from './job-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'Home', component: HomeComponent},
      {path:'Jobs', component: JobsComponent},
      {path:'', redirectTo:'/Home', pathMatch:'full' }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [JobHttpService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
