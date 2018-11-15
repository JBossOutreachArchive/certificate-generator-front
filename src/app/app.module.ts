import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CertificateComponent } from './certificate/certificate.component';
import {RouterModule, Routes } from  '@angular/router';
import { Certificate2Component } from './certificate2/certificate2.component';
import { OptionsComponent } from './options/options.component';


const router: Routes = [
  {path: 'certificate', component:CertificateComponent},
  {path:'certificate2', component:Certificate2Component}
]
@NgModule({
  declarations: [
    AppComponent,
    CertificateComponent,
    Certificate2Component,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
