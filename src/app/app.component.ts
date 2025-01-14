import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ColoresComponent } from './colores/colores.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebasComponent,ColoresComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**
   *
   */
  constructor() {
    this.libros=[
      {id:1,titulo:'Harry Potter',autor:'JK Rowling'},
      {id:2,titulo:'El señor de los anillos',autor:'Tolkien'},
      {id:3,titulo:"Juramentada",autor:'Brandon Sanderson'}
    ]
    this.libros1=[
      {id:1,titulo:'Harry Potter',autor:'JK Rowling'},
      {id:2,titulo:'El señor de los anillos',autor:'Tolkien'},
      {id:3,titulo:"Juramentada",autor:'Brandon Sanderson'}
    ]
  }

  title = 'Hola!';
  condicion:Boolean = true;
  dias_semana:string="";
  vbleColor:string = 'red';
  color:string = 'yellow';
  colorFondo:string = 'purple';
  libros:Array<any>;
  libros1:Array<Libro>;
  showAuthor(libro:Libro){
    const verAuthor = "Escrito por " + libro.autor;
    alert (verAuthor);
    console.log(libro.titulo + " escrito por " + libro.autor);
  }
}
interface Libro{
  id:Number;
  titulo:String;
  autor:string;
}
function showAuthor(libro:Libro){
  const verAuthor = "Escrito por " + libro.autor;
  alert (verAuthor);
  console.log(libro.titulo + " escrito por " + libro.autor);
}

