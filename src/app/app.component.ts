import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ColoresComponent } from './colores/colores.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdsComponent } from './cds/cds.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PruebasComponent, ColoresComponent, CommonModule, FormsModule, CdsComponent, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  /**
   *
   */


  constructor() {

  }


  title = 'Hola!';
  condicion: Boolean = true;
  dias_semana: string = "";
  vbleColor: string = 'red';
  color: string = 'yellow';
  colorFondo: string = 'purple';

}


