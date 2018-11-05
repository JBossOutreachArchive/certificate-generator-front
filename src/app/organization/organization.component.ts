import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns: string[] = ['name', 'date', 'desc'];

    rowData = [
        { name: 'Chandler', date: '10/10/2018', desc: 'For being Sarcastic' },
        { name: 'Joey', date: '10/10/2018', desc: 'For eating all the food' },
        { name: 'Phoebe', date: '10/10/2018', desc: 'For being the normal one' }
    ];

    dataSource = new MatTableDataSource(this.rowData);

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
    
}
