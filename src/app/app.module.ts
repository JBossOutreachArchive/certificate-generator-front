import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

//forms modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
