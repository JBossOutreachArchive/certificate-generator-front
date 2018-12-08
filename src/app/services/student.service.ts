import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certificate } from './certificate.model';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllCertificates():Observable<Certificate[]>{
    let token = 'JWT '+localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders().set('Authorization', token)
    };
    return this.http.get<Certificate[]>(environment.baseUrl+"api/get_certificates", options);
  }
}
