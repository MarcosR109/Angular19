import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompilerConfig } from '@angular/compiler';
@Component({
  selector: 'app-colores',
  imports: [],
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css'
})
export class ColoresComponent {

  constructor(){}
  numaleatorio:Number=Math.floor(Math.random()*10);

  generarAleatorio():String{
    return Math.floor(Math.random()*255).toString(16);
  }
  colorHex():String{
    return '#' + this.generarAleatorio()+this.generarAleatorio();
  }
}
