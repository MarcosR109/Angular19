import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-informacion',
  imports: [],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  CDs: Array<CD>;
  /**
   *
   */
  constructor(private rutaUsuario:ActivatedRoute) {
    this.CDs = [
      { id: 1, titulo: 'Night at the opera', autor: 'Queen',precio:"25€",canciones:['track 1, track 2, track 3'] },
      { id: 2, titulo: 'Wish you were here', autor: 'Pink Floyd',precio:"5€",canciones:['track 1, track 2, track 3'] },
      { id: 3, titulo: 'El círculo', autor: 'Kase.O',precio:"2000€",canciones:['track 1, track 2, track 3'] }
    ]
  }
  cdId:any;
  cdClick:any;
  /**
   *
   */

  ngOnInit():void{
    this.rutaUsuario.params.subscribe(params=>{
      this.cdId=params['cdId']
      this.cdClick = this.cdBuscador();
    })
  }

  filtroId(cd:any){
    return cd.id == this;
  }

  cdBuscador(){
    return this.CDs.filter(this.filtroId,this.cdId)[0];
  }
}
interface CD {
  id: Number;
  titulo: String;
  autor: string;
  precio:string;
  canciones:Array<string>;
}