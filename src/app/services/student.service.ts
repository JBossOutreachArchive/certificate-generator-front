import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certificate } from './certificate.model';
import {Observable} from 'rxjs';
import {Environment as env} from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getAllCertificates() :  Observable<Certificate[]> {
    // Fetches all the certificates issued to student
    return this.httpClient.get<Certificate[]>(env.baseUrl+"api/get_certificates",{
      headers: new HttpHeaders().set('Authorization', ("JWT " + localStorage.getItem('token')))
    })
  }

}
