import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgParticlesModule } from 'ng-particles';
import { MatSidenavModule } from '@angular/material/sidenav';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatButtonModule, NgParticlesModule,MatSidenavModule)
  ]
};
