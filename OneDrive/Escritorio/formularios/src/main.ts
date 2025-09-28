// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // si no tienes rutas, puedes eliminar esta línea y provideRouter

bootstrapApplication(AppComponent, {
  providers: [
    // si usas rutas -> descomenta la siguiente línea y asegúrate de que 'routes' está definido
    provideRouter(routes),
    // importProvidersFrom acepta NgModules para poner a disposición providers/directivas
    importProvidersFrom(ReactiveFormsModule, FormsModule)
  ]
}).catch(err => console.error(err));
