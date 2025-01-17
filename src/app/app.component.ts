import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ColoresComponent } from './colores/colores.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LibroclickedService } from './libroclicked.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebasComponent, ColoresComponent, CommonModule, FormsModule, LibrosComponent, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  /**
   *
   */
  librosVistos = inject(LibroclickedService);

  constructor() {

  }


  title = 'Hola!';
  condicion: Boolean = true;
  dias_semana: string = "";
  vbleColor: string = 'red';
  color: string = 'yellow';
  colorFondo: string = 'purple';

}


