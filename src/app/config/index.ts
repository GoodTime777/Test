import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from '../routes';

export const appConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideEnvironmentNgxMask(),
    provideRouter(routes),
    provideClientHydration(withEventReplay())]
};
