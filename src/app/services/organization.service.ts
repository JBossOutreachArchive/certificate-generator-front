import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Certificate } from './certificate.model';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) { }

  getCertificates():Observable<Certificate[]>{
    let token = 'JWT '+localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders().set('Authorization', token)
    };
    return this.http.get<Certificate[]>(environment.baseUrl+"api/org/certificates/", options);
  }

  private generateSingleCertificate(){
    //would be used when organization wants to generate single certificate
  }

  generateBulkCertificate(file) {
    let body = new FormData();
    body.set('file', file);

    let token = 'JWT '+localStorage.getItem('token');
    const req = new HttpRequest('POST', environment.baseUrl+'api/issue_certificate/csv/', body, {
      headers: new HttpHeaders().set('Authorization', token),
      reportProgress: true,
    });

    return this.http.request(req);
  }
}
