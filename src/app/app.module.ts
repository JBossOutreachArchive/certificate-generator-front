import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AuthService} from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {CanActivate} from "@angular/router";
import  {AuthGuard}from './auth.guard';
// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

//components
import { AppComponent } from './app.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes=
[
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
      LoginComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgGridModule.withComponents([])
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
