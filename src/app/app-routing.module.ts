import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { BasicComponent } from './templates/basic/basic.component';
import { CertificateFormComponent } from './certificate-form/certificate-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'organization', component: OrganizationComponent },
  { path: 'student', component: StudentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'new-certificate', component: CertificateFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
