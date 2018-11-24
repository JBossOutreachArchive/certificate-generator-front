import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FileUploadComponent} from "./file-upload/file-upload.component"
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
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

    openFileDialog(){
        const dialogRef = this.dialog.open(FileUploadComponent,{
            height:'400px',
            width:'700px'
        })
    }
}
