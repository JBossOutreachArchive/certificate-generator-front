import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Ag grid angular
import { AgGridModule } from 'ag-grid-angular';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { StudentComponent } from './student/student.component';
import { OrganizationComponent } from './organization/organization.component';
import { AppRoutingModule } from './/app-routing.module';
import { BasicComponent } from './templates/basic/basic.component';
import { CertificateComponent } from './core/certificate/certificate.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from "@angular/cdk/portal";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    OrganizationComponent,
    BasicComponent,
    CertificateComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    PortalModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CertificateComponent]
})
export class AppModule { }
