import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class CertStoreService extends EventEmitter{

  constructor() {
    super()
  }
  certs: object[] = [];
  getCerts(){
    return this.certs
  }

  addCerts(certs){
    this.certs = [...certs,...this.certs]
    this.emit("newCerts",this.certs)
    return this.certs
  }
}
