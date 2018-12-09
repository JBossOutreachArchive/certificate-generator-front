import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private orgService: OrganizationService) { }

  ngOnInit() {
    this.getCertificates();
  }

  title = 'app';
  error: String = '';
  message: String = '';
  percentage = 0;
  rowData = [];

  onFileUpload(event){
    this.error = '';
    if(event.target.files[0].size > 5*1000){
        this.error = "File's too big!";
    }
    this.orgService.generateBulkCertificate(event.target.files[0]).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentage = Math.round(100 * event.loaded / event.total);
        const progress_bar = document.getElementById('progress-bar');
        progress_bar.style.width = this.percentage+"%";
      } else if (event instanceof HttpResponse) {
        this.percentage = 0;
        this.message = "File uploaded successfuly";
        this.getCertificates();
      }
    },
    error => this.error = error);
  }


  getCertificates(){
    this.orgService.getCertificates().subscribe((certificates: Certificate[]) => {
      this.rowData = certificates;
    })
  }
}
