import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertStoreService{

  certs: EventEmitter<any> = new EventEmitter()
  
  constructor() { }
  private _certs: object[] = [];
  getCerts(){
    return this._certs
  }

  addCerts(certs){
    this._certs = [...certs,...this._certs]
    this.certs.emit(this._certs)
    return this._certs
  }
}
