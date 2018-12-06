import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { GeneratorComponent } from './organization/generator/generator.component';
import { CertificateTemplateComponent } from './templates/certificate-template/certificate-template.component'

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'organization', component: OrganizationComponent },
  { path: 'student', component: StudentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'generator', component: GeneratorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
