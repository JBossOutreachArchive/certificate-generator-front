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

import { BasicComponent } from './templates/basic/basic.component';
import { CertificateComponent} from './templates/certificate/certificate.component';
import { CertificateVittal1Component} from './templates/certificate_vittal/certificate.component';
import { CertificateVittal2Component} from './templates/certificate_vittal2/certificate.component';
import { CertificateAntComponent } from './templates/certificate-ant/template.component';

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
    BasicComponent,
    CertificateComponent,
    CertificateVittal1Component,
    CertificateVittal2Component,
    CertificateAntComponent,
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
