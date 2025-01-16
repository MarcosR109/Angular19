import { Routes } from '@angular/router';
import { PruebasComponent } from '../pruebas/pruebas.component';
import { ColoresComponent } from '../colores/colores.component';
import { CdsComponent } from '../cds/cds.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { InicioComponent } from '../inicio/inicio.component';
import { InformacionComponent } from '../informacion/informacion.component';
export const rutas: Routes = [
  { path: 'cabecera', component: CabeceraComponent },
  {path:'inicio',component:InicioComponent},
  {path:'informacion/:cdId',component:InformacionComponent},
  {path:'cds',component:CdsComponent},
  {path:'',component:InicioComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/'},
];

export class RutasComponent {
  title:String = "Rutas";
}