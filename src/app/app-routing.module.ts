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
import { Template5Component } from './templates/template5/template5.component';
import { Template6Component } from './templates/template6/template6.component';
import { Template7Component } from './templates/template7/template7.component';
import { Template8Component } from './templates/template8/template8.component';


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
  { path: 'templates/template5', component: Template5Component},
  { path: 'templates/template6', component: Template6Component},
  { path: 'templates/template7', component: Template7Component},
  { path: 'templates/template8', component: Template8Component},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
