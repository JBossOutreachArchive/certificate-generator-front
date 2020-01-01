import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certificate } from './certificate.model';
import { Environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }


  getCertificates(): Observable<Certificate[]> {
    const token = 'JWT ' + localStorage.getItem('token');
    const options = {
      headers: new HttpHeaders().set('Authorization', token)
    };
    return this.http.get<Certificate[]>(Environment.baseUrl+"api/get_certificates", options);
  }
}
