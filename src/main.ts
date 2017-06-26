import './global.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IsProduction } from './environments/environment';
import { AppModule } from './app/app.module';

if (IsProduction) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
