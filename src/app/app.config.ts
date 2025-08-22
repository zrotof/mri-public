import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import Lara from '@primeng/themes/lara';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(FontAwesomeModule),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          theme: 'lara-light-blue',
          darkModeSelector: false,
        }
      }
    }), provideClientHydration(withEventReplay())
  ]
}

