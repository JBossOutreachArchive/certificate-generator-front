import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {}
  readonly apiUrl = environment.apiUrl;

  public getAllCertificates(){
    //fetches all the certificates issued to student
    return this.httpClient.get(`${this.apiUrl}/api/get_certificates`, { withCredentials: true })
  }
}
