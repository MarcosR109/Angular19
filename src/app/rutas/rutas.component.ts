import { Routes } from '@angular/router';
import { PruebasComponent } from '../pruebas/pruebas.component';
import { ColoresComponent } from '../colores/colores.component';
import { LibrosComponent } from '../libros/libros.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { InicioComponent } from '../inicio/inicio.component';
import { InformacionComponent } from '../informacion/informacion.component';
export const rutas: Routes = [
  {path: 'cabecera', component: CabeceraComponent },
  {path:'inicio',component:InicioComponent},
  {path:'informacion/:libroId',component:InformacionComponent},
  {path:'libros',component:LibrosComponent},
  {path:'',component:InicioComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/'},
];

export class RutasComponent {
  title:String = "Rutas";
}