import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

// forms modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BasicComponent } from './templates/basic/basic.component';
import { CertificateComponent } from './templates/certificate/certificate.component';
import { CertificateVittalComponent } from './templates/certificate_vittal/certificatev.component';
import { CertificateVittal2Component } from './templates/certificate_vittal2/certificatev2.component';
import { TemplateComponent } from './templates/certificate-ant/template.component';
import { CertificateGCIComponent } from './templates/certificate-geek/certificate-gci18.component';
import { CertificateTemplateComponent } from './templates/certificate-template/certificate-template.component';
import { CertsidComponent } from './templates/certsid/certsid.component';
import { SingleCertificateComponent } from './organization/single-certificate/single-certificate.component';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
    CertificateComponent,
    CertificateVittalComponent,
    CertificateVittal2Component,
    TemplateComponent,
    CertificateGCIComponent,
    CertificateTemplateComponent,
    CertsidComponent,
    FooterComponent,
    NavbarComponent,
    SingleCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
