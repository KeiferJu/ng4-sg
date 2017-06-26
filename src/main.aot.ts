import './polyfills';
import './global.scss';

import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'jquery';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
