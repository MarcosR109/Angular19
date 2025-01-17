import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  imports: [CommonModule, RouterLink,HttpClientModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros:any;
  //LibroClicked = inject(LibroclickedService);
  constructor(private http: HttpClient,public LibroClicked:LibroclickedService) {
    /*this.libros = [
      { id: 1, titulo: 'Harry potter', autor: 'JK' },
      { id: 2, titulo: 'Harry potter 2', autor: 'JK' }, 
      { id: 3, titulo: 'Harry potter 3 ', autor: 'JK' }
    ]*/
  }
  showAuthor(libro: any) {
    const showArtist = "Autor: " + libro.autor;
    alert(showArtist);
    console.log(libro.titulo + " realizado por " + libro.autor);
  }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista() {
    this.http.get('assets/lista-libros.json').subscribe(
      data => { this.libros = data }
    )
  }

  agregarLibro(_libroVisto:any){
    console.log("libro agregado");
    this.LibroClicked.libroVisto(_libroVisto);
  }
}