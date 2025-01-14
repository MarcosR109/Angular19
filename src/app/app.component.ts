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
  title = 'Hola!';
  condicion:Boolean = true;
  dias_semana:string="";
  vbleColor:string = 'red';
  color:string = 'yellow';
  colorFondo:string = 'purple';
}
