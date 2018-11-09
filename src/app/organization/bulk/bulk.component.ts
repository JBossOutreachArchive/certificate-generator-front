import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.css']
})
export class BulkComponent implements OnInit {

  @ViewChild('input') file;

  constructor() {
  }

  ngOnInit() {
  }

  uploadFile() {
    const f = this.file.nativeElement.files[0];
    if (f.type !== 'text/csv' && f.type !== 'application/vnd.ms-excel') {
      alert('Selected file is not a CSV file!');
    }
    if (f.size > 5_242_880) {
      alert(`Selected file has a size larger then 5MB!`);
    }
  }

}
