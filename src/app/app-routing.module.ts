import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CustomizeComponent } from './customize/customize.component';
import { IssuerComponent } from './issuer/issuer.component';

const routes: Routes = [
  { path: 'organization', component: OrganizationComponent },
    {path:'certificate1', component:CertificateComponent},
    {path:'customize', component:CustomizeComponent},
  { path: 'student', component: StudentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'issuer', component:IssuerComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
