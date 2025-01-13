import { Component, Input, OnInit } from '@angular/core';
import { ColoresComponent } from '../colores/colores.component';

@Component({
  selector: 'app-firma',
  imports: [ColoresComponent],
  templateUrl: './firma.component.html',
  styleUrl: './firma.component.css',
  standalone:true
})
export class FirmaComponent {
constructor(){}

@Input() color:String="color";

}
