import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from './certificate.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllCertificates():Observable<Certificate[]>{
    let t = 'JWT'+localStorage.getItem('token');
    let opt = {
      headers: new HttpHeaders().set('Authorization', t)
    };
    return this.http.get<Certificate[]>(environment.baseUrl+"/api/student/certificates", opt);
  }
}
