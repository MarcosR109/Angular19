import { Component, inject } from '@angular/core';
import { Router, RouterOutlet,Routes,RouterLink } from '@angular/router';
import { LibroclickedService } from '../libroclicked.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  imports: [RouterLink,CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css',
  standalone:true,
})
export class CabeceraComponent {
/**
 *
 */
librosVistos = inject(LibroclickedService);
constructor() {
  
  
}
}
