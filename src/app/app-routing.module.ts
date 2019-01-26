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
import { BasicComponent } from './templates/basic/basic.component';
import { CertificateComponent} from './templates/certificate/certificate.component';
import { CertificateVittal1Component } from './templates/certificate_vittal/certificate.component';
import { CertificateVittal2Component } from './templates/certificate_vittal2/certificate.component';
import { CertificateAntComponent } from './templates/certificate-ant/template.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard] },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'issue/single', component: SingleCertificateComponent, canActivate: [AuthGuard]},
  { path: 'template/basic', component: BasicComponent},
  { path: 'template/certificate', component: CertificateComponent},
  { path: 'template/certificateVittal1', component: CertificateVittal1Component},
  { path: 'template/certificateVittal2', component: CertificateVittal2Component},
  { path: 'template/certificateAnt', component: CertificateAntComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
