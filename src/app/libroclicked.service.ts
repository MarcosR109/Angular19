import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {
libros:Array<any>;

  constructor() {
    this.libros=[];
   }

   libroVisto(libroVisto:any){
    console.log(this.libroVisto);
    this.libros.push(libroVisto);
    console.log(this.libros);
   }

   verListado(){
    if(this.libros.length>0){
      return this.libros;
    }
    else{
      return [];
    }
   }
}

