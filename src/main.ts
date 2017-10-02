import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { TRANSLATION } from './locale/messages.es';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
  AppModule,
  {providers: [
    {provide: TRANSLATIONS, useValue: TRANSLATION},
    {provide:TRANSLATIONS_FORMAT, useValue:'xlf'},
    {provide:LOCALE_ID, useValue:'ar'}
  ]});