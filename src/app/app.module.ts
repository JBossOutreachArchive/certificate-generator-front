import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

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
import { CertificateGenerateComponent } from './certgen/certgen.component';
import { CertificateComponent } from './templates/certificate/certificate.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
    FooterComponent,
    NavbarComponent,
    CertificateGenerateComponent,
    CertificateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    ScrollToModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
