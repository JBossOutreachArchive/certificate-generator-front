import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  readonly baseUrl = environment.baseUrl;

  public getAllCertificates(){
    //fetches all the certificates issued to student
    return this.http.get(this.baseUrl + "api/student/certificates", {
       headers: {
         'Authorization': 'JWT ' + localStorage.getItem('token')
        }
      });
    }
  }
