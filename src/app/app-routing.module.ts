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
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard] },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'forbidden-page', component: ForbiddenPageComponent },
  {path: '**', redirectTo: '/error-page'},
  { path: 'issue/single', component: SingleCertificateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
