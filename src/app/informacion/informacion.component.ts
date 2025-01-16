import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-informacion',
  imports: [],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  libros: Array<Libro>;
  /**
   *
   */
  constructor(private rutaUsuario:ActivatedRoute) {
    this.libros = [
      { id: 1, titulo: 'Harry potter', autor: 'JK' },
      { id: 2, titulo: 'Harry potter 2', autor: 'JK' }, { id: 3, titulo: 'Harry potter 3 ', autor: 'JK' }
    ]
  }
  libroId:any;
  libroClick:any;
  /**
   *
   */

  ngOnInit():void{
    this.rutaUsuario.params.subscribe(params=>{
      this.libroId=params['cdId']
      this.libroClick = this.cdBuscador();
    })
  }

  filtroId(libro:any){
    return libro.id == this;
  }

  cdBuscador(){
    return this.libros.filter(this.filtroId,this.libroId)[0];
  }
}
interface Libro {
  id: Number;
  titulo: String;
  autor: string;
}