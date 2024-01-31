import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DateAdapter } from './core/date/date-adapter';
import { DayjsAdapter } from './core/date/adapters/dayjs-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: DateAdapter,
      useClass: DayjsAdapter,
    },
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
