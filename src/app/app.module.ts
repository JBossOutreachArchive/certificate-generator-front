import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

// Forms modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';

import { Template1Component } from './templates/template1/template1.component';
import { Template2Component} from './templates/template2/template2.component';
import { Template3Component} from './templates/template3/template3.component';
import { Template4Component} from './templates/template4/template4.component';
import { Template5Component } from './templates/template5/template5.component';
import { CertificateGCIComponent } from './templates/certificate-geek/certificate-gci18.component';
import { CertificateTemplateComponent } from './templates/certificate-template/certificate-template.component';
import { CertsidComponent } from './templates/certsid/certsid.component';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleCertificateComponent } from './organization/single-certificate/single-certificate.component';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    CertificateGCIComponent,
    CertificateTemplateComponent,
    CertsidComponent,
    FooterComponent,
    NavbarComponent,
    SingleCertificateComponent,
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
