import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';
import { HttpClient,HttpEventType,HttpResponse,HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  private gridApi;

  constructor(private orgService: OrganizationService, private http: HttpClient) { }

  ngOnInit() {

    this.orgService.getAllCertificates().subscribe(
      (data: any[]) => {
        this.rowData = data.map(row => {
          var dateSplit: number[] = row.date.split("-").map(part => parseInt(part))

          return {
            name: row.student.name,
            date: new Date(dateSplit[0], dateSplit[1], dateSplit[2]),
            desc: row.desc
          };
        });
      },
      error => {
        this.error = error.message;
      }
    );

    this.orgService.getCertificates().subscribe((certificates: Certificate[]) => {

      // add certificates in ag-grid
      for(let certificate of certificates){
        this.rowData.push({ name: certificate.student.name, date: certificate.date, desc: certificate.issued_for });
      }
      this.gridApi.setRowData(this.rowData);
    })
  }

  onGridReady(event){
    this.gridApi = event.api;
  }

  uploadCSV(event) {
    const csv = event.target.files[0];
    if (csv.size > 5_242_880) {
      alert(`CSV larger than 5MB`);
    }
    else if (csv.type !== 'text/csv' && csv.type !== 'application/vnd.ms-excel') {
      alert('Invalid file');
    }
    else {
       let progress
       let request : Observable<any>
       [progress,request] = this.uploadFile(csv);
       [csv.name] = progress
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

  addToCertificates(certificates) {
    this.rowData = certificates;
    this.gridApi.refreshCells();
  }

  uploadFile(File) {
    const form = new FormData()
    form.append('file',File,File.name)
    const progress = new Subject<number>()
    const hpReq = new HttpRequest("POST",`${environment.baseUrl}/api/organization/csv/`,form,{
      reportProgress:true
    })
    const dataRequest = this.http.request(hpReq)
    dataRequest.subscribe(event=>{
      if(event.type == HttpEventType.UploadProgress){
        const p = Math.round(100 * event.loaded / event.total)
        progress.next(p)
      } else if (event instanceof HttpResponse) {
        progress.complete()
      }
    })
    return [progress.asObservable(),dataRequest]
  }

  title = 'app';

  columnDefs = [
      {headerName: 'Student Name', field: 'name',checkboxSelection:true},
      {headerName: 'Date', field: 'date', sort: 'date', cellRenderer: (date) => date.value.toLocaleDateString() },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [];
  error: string;
  certificateData = [];
  
}
