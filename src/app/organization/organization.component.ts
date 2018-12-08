import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {CertStoreService} from "./cert-store.service";
import { AgGridModule } from 'ag-grid-angular';
import { OrganizationService } from '../services/organization.service';
import { Certificate } from '../services/certificate.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

<<<<<<< HEAD
  constructor(private dialog: MatDialog,private certStore:CertStoreService, private grid:AgGridModule) { }

  gridApi:any;
  rowData:object[];
  dialogRef;

  ngOnInit() {
    this.rowData = this.certStore.addCerts([
      { name: 'Chandler', date: '10/10/2018', desc: 'For being Sarcastic' },
      { name: 'Joey', date: '10/10/2018', desc: 'For eating all the food' },
      { name: 'Phoebe', date: '10/10/2018', desc: 'For being the normal one' }
    ])
    this.certStore.on("newCerts",data=>{
      this.rowData = data
      this.gridApi.refreshCells()
    })
  }
  onGridReady(e){
    this.gridApi = e.api
=======
  private gridApi;

  constructor(private orgService: OrganizationService) { }

  ngOnInit() {
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
>>>>>>> source/master
  }
  title = 'app';

  columnDefs = [
<<<<<<< HEAD
    {headerName: 'Student Name', field: 'name',checkboxSelection:true},
    {headerName: 'Date', field: 'date' },
    {headerName: 'Certificate Description', field: 'desc'}
  ];

  openFileDialog(){
    this.dialogRef = this.dialog.open(FileUploadComponent,{
      height:'400px',
      width:'700px'
    })
  }
  close(){
    this.dialogRef.dispose()
  }
=======
      {headerName: 'Student Name', field: 'name',checkboxSelection:true},
      {headerName: 'Date', field: 'date' },
      {headerName: 'Certificate Description', field: 'desc'}
  ];

  rowData = [];


>>>>>>> source/master
}
