import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  File(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
       if(type!=='text/csv'&& type!=='application/vnd.ms-excel')
        window.alert("This file is not CSV")
        else
        if(size/1048576>5)
        window.alert('This file has more than 5MB')
    
      }
    }

}
