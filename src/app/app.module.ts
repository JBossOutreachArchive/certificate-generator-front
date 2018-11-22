import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CanActivate,CanDeactivate} from "@angular/router";
import  {AuthService, user}from './auth.service';
import  {RouterModule, Routes}from "@angular/router";

import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';

import  {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes =[
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthService]}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  providers: [AuthService, user],
  bootstrap: [AppComponent]
})
export class AppModule { }
