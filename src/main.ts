import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { rutas } from  './app/rutas/rutas.component'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(rutas), // Proveedor para configurar las rutas
  ],
}).catch((err) => console.error(err));