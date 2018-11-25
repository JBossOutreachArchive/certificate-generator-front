import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

//components
import { FormularComponent } from './formular/formular.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';
const routes: Routes=
[
  {path:'form', component:FormularComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
      FormularComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
