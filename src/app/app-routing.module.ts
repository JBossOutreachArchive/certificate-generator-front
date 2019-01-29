import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { SingleCertificateComponent } from './organization/single-certificate/single-certificate.component';
import { AuthGuard } from './guards/auth.guard';
import { Template1Component } from './templates/template1/template1.component';
import { Template2Component} from './templates/template2/template2.component';
import { Template3Component } from './templates/template3/template3.component';
import { Template4Component } from './templates/template4/template4.component';
import { CertificateAntComponent } from './templates/certificate-ant/template.component';
import { CertificateGCIComponent } from './templates/certificate-geek/certificate-gci18.component';
import { CertificateTemplateComponent } from './templates/certificate-template/certificate-template.component';
import { CertsidComponent } from './templates/certsid/certsid.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard] },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'issue/single', component: SingleCertificateComponent, canActivate: [AuthGuard]},
  { path: 'templates/template1', component: Template1Component},
  { path: 'templates/template2', component: Template2Component},
  { path: 'templates/template3', component: Template3Component},
  { path: 'templates/template4', component: Template4Component},
  { path: 'template/certificateAnt', component: CertificateAntComponent},
  { path: 'template/certificateGeek', component: CertificateGCIComponent},
  { path: 'template/certificateTemplate', component: CertificateTemplateComponent},
  { path: 'template/certificateSid', component: CertsidComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
