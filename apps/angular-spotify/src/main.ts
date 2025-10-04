import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Sentry configuration disabled - configure with your own DSN if needed
// import * as Sentry from '@sentry/angular';
// Sentry.init({
//   dsn: 'YOUR_SENTRY_DSN',
//   integrations: [
//     new Sentry.BrowserTracing({
//       tracingOrigins: ['localhost', /^\//],
//       routingInstrumentation: Sentry.routingInstrumentation
//     })
//   ],
//   tracesSampleRate: 1.0
// });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
