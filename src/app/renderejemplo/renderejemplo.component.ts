import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderejemplo',
  imports: [CommonModule],
  templateUrl: './renderejemplo.component.html',
  styleUrl: './renderejemplo.component.css'
})
export class RenderejemploComponent {
  ceD: Array<any>;
  clearElement!: HTMLElement;
  /**
   *
   */

  constructor(private renderer: Renderer2) {
    this.ceD = [{ titulo: 'La boheme', autor: 'Puccini', id: 1 }, { titulo: 'Nabucco', autor: 'Verdi', id: 2 }, { titulo: 'Carmen', autor: 'Bizet', id: 3 }]
    console.log(this.ceD);
  }
  activeMethod(element: HTMLElement) {
    if (this.clearElement) {
      this.renderer.removeClass(this.clearElement, 'miclase');

    }
    let nuevoElemento = this.renderer.createElement("span");
    this.renderer.setProperty(nuevoElemento,'innerHTML','✅');
    this.renderer.appendChild(element,nuevoElemento);
    this.renderer.addClass(element, 'miclase');
    element.setAttribute('data-select', "true");
  }
  activeMethod2(element: HTMLElement) {
    this.renderer.removeClass(element, 'miclase');
  }


}
