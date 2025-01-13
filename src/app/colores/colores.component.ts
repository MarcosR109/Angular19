import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompilerConfig } from '@angular/compiler';
import { FirmaComponent } from '../firma/firma.component';
@Component({
  selector: 'app-colores',
  imports: [FirmaComponent],
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css',
  standalone:true,
})
export class ColoresComponent {
  colorLocal:String = this.colorHex();
  constructor(){}
  numaleatorio:Number=Math.floor(Math.random()*10);
  color:String = this.colorHex();

  generarAleatorio():String{
    return Math.floor(Math.random()*255).toString(16);
  }
  colorHex():String{
    return '#' + this.generarAleatorio()+this.generarAleatorio();
  }
}
