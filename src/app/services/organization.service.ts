import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certificate } from './certificate.model';
import { Environment } from '../environments/environments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getCertificates(): Observable<Certificate[]> {
    const token = 'JWT ' + localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', token)
    };
    return this.http.get<Certificate[]>(Environment.baseUrl+"api/org/certificates/", options);
  }

  private generateSingleCertificate() {
    // Would be used when organization wants to generate single certificate
  }

  // Would be used when organization wants to many certificates by using csv/excel file
  generateBulkCertificate(file:File){
    const form = new FormData();
    form.append('file',file);

    const token = 'JWT ' + localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', token)
    };  

    return this.http.post(Environment.baseUrl+"api/issue_certificate/csv/",form,options);
    
  }
}