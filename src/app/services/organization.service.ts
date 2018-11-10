import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor() { }

  private generateSingleCertificate(){
    //would be used when organization wants to generate single certificate
  }  

  private generateBulkCertificate(){
    //would be used when organization wants to many certificates by using csv/excel file
  }
}
