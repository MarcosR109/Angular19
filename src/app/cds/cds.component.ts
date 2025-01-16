import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cds',
  imports: [CommonModule,RouterLink],
  templateUrl: './cds.component.html',
  styleUrl: './cds.component.css'
})
export class CdsComponent {
  CDs: Array<CD>;
  /**
   *
   */
  constructor() {
    this.CDs = [
      { id: 1, titulo: 'Night at the opera', autor: 'Queen',precio:"25€",canciones:['track 1, track 2, track 3'] },
      { id: 2, titulo: 'Wish you were here', autor: 'Pink Floyd',precio:"5€",canciones:['track 1, track 2, track 3'] },
      { id: 3, titulo: 'El círculo', autor: 'Kase.O',precio:"2000€",canciones:['track 1, track 2, track 3'] }
    ]
  }
  showArtist(cd: CD) {
    const showArtist = "Artista: " + cd.autor;
    alert(showArtist);
    console.log(cd.titulo + " realizado por " + cd.autor);
  }

}
interface CD {
  id: Number;
  titulo: String;
  autor: string;
  precio:string;
  canciones:Array<string>;
}