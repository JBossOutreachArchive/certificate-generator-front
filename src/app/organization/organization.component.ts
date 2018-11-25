import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {CertStoreService} from "./cert-store.service";
import { AgGridModule } from 'ag-grid-angular';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

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
  }
  title = 'app';

  columnDefs = [
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
}
