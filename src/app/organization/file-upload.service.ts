import { Injectable } from '@angular/core';
import { HttpClient,HttpEventType,HttpResponse,HttpRequest} from '@angular/common/http'
import {environment} from '../../environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public uploadFile(file){
    const form = new FormData()
    form.append('file',file,file.name)
    const progress = new Subject<number>()
    const req = new HttpRequest("POST",`${this.apiUrl}/api/issue_certificate/csv/`,form,{
      reportProgress:true
    })
    const request = this.http.request(req)
    request.subscribe(e=>{
      if(e.type=== HttpEventType.UploadProgress){
        const percentDone = Math.round(100 * e.loaded / e.total)
        progress.next(percentDone)
      } else if (e instanceof HttpResponse) {
        progress.complete()
      }
    })
    return [progress.asObservable(),request]
  }
}
