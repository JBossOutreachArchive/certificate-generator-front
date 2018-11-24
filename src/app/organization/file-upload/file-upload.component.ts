import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from "../file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  files = [];
  progress = {};
  @ViewChild('file') file

  constructor(private uploadService:FileUploadService) { }

  ngOnInit() {
  }

  uploadFile(){
    const file = this.file.nativeElement.files[0]
    // 1MB == 10^6 bytes
    if(file.size>5*10**6){
      alert(`You file has a size of ${(file.size/10**6).toFixed(2)}MB, which exceeds the limit of 5MB.`)
      throw new Error("File too large")
    }
    if(file.type!=="text/csv" && file.type!=="application/vnd.ms-excel"){
      alert("The file you selected is not a CSV file.")
      throw new Error("File is not CSV")
    }
    const progress = this.uploadService.uploadFile(file)
    this.files.push(file)
    this.progress[file.name] = progress
  }
}
