import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros: Array<Libro>;
  /**
   *
   */
  constructor() {
    this.libros = [
      { id: 1, titulo: 'Harry potter', autor: 'JK' },
      { id: 2, titulo: 'Harry potter 2', autor: 'JK' }, { id: 3, titulo: 'Harry potter 3 ', autor: 'JK' }
    ]
  }
  showAuthor(libro: Libro) {
    const showArtist = "Autor: " + libro.autor;
    alert(showArtist);
    console.log(libro.titulo + " realizado por " + libro.autor);
  }

}
interface Libro {
  id: Number;
  titulo: String;
  autor: string;
}