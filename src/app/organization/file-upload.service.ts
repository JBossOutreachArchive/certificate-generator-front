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
    this.http.request(req)
    .subscribe(e=>{
      if(e.type=== HttpEventType.UploadProgress){
        const percentDone = Math.round(100 * event.loaded / event.total)
        progress.next(percentDone)
      } else if (event instanceof HttpResponse) {
        progress.complete()
      }
    })
    return progress.asObservable()
  }
}
