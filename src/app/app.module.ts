import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Certificate1Component } from './certificate1/certificate1.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';
const routes: Routes=
[
  {path:'dashboard', component:DashboardComponent},
  {path:'certificate1', component:Certificate1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    DashboardComponent,
    Certificate1Component,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
