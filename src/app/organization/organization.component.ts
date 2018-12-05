import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpEventType,HttpResponse,HttpRequest} from '@angular/common/http'
import { environment } from '../../environments/environment';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  private gridApi;

  constructor(private organizationService: OrganizationService, private http: HttpClient) { }

  ngOnInit() {
  }

  updateGrid(){
  this.organizationService.getAllCertificates().subscribe((certificates: Certificate[]) => {
       // add certificates in ag-grid
      for(let certificate of certificates){
        this.rowData.push({ name: certificate.name, date: certificate.date, desc: certificate.desc });
      }
      this.gridApi.setRowData(this.rowData);
    })
  }

  uploadCSV(event) {
      const csv = event.target.files[0];
      if(csv.size > 5_242_880) {
        alert(`CSV is larger than 5MBs.`);
      } else if(csv.type !== 'text/csv' && csv.type !== 'application/vnd.ms-excel') {
        alert('Invalid file selected!');
      } else {
      let progress
      let request : Observable<any>
      [progress,request] = this.uploadFile(csv);
      this.progress[csv.name] = progress
      request.subscribe(event=>{
        if(event instanceof HttpResponse){
          const certificates = event.body.map(certificate=>{
            return {
              name: certificate.name,
              desc: certificate.desc,
              date: certificate.date
            }
          })
          this.addToCertificates(certificates);
        }
      })
      }
    }

    addToCertificates(certificates){
    this.rowData = certificates;
    this.gridApi.refreshCells();
    }

  uploadFile(File){
    const form = new FormData()
    form.append('file',File,File.name)
    const progress = new Subject<number>()
    const hpReq = new HttpRequest("POST",`${environment.baseUrl}/api/organization/csv/`,form,{
      reportProgress:true
    })
    const dataRequest = this.http.request(hpReq)
    dataRequest.subscribe(event=>{
      if(event.type=== HttpEventType.UploadProgress){
        const p = Math.round(100 * event.loaded / event.total)
        progress.next(p)
      } else if (event instanceof HttpResponse) {
        progress.complete()
      }
    })
    return [progress.asObservable(),dataRequest]
  }


  onGridReady(event){
    this.gridApi = event.api;
  }

  title = 'app';

  columnDefs = [
      {headerName: 'Student Name', field: 'name',checkboxSelection:true},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [
      { name: 'Chandler', date: '10/10/2018', desc: 'For being Sarcastic' },
      { name: 'Joey', date: '10/10/2018', desc: 'For eating all the food' },
      { name: 'Phoebe', date: '10/10/2018', desc: 'For being the normal one' }
  ];

  certificateData = [];


}
