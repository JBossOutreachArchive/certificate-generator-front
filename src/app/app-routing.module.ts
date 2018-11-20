import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './organization/organization.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './services/role-guard.service';

const routes: Routes = [
  { 
    path: 'organization', 
    component: OrganizationComponent, 
    canActivate: [RoleGuard],
  },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
