import { Component } from '@angular/core';
import { Router, RouterOutlet,Routes,RouterLink } from '@angular/router';
import { CdclickedService } from '../cdclicked.service';
import { Inject } from '@angular/core';
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
constructor(public lista:CdclickedService) {
}
}
