import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CdclickedService {

  cds: Array<any>;
  constructor() {
    this.cds = [];
  }

  cdVisto(cdVisto: any) {
    this.cds.push(cdVisto);
    console.log(cdVisto);
  }

  verListado() {
    console.log('ver listado');
    return this.cds.length>0 ? this.cds  : [];
  }

}
