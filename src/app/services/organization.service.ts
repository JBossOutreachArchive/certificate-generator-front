import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCertificates(){
    return this.http.get(this.baseUrl + "api/org/certificates",{
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token')
      }
    });
  }

  private generateSingleCertificate(){
    //would be used when organization wants to generate single certificate
  }

  private generateBulkCertificate(){
    //would be used when organization wants to many certificates by using csv/excel file
  }
}
