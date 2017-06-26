import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { provideAuth } from 'angular2-jwt';

import { LoginComponent  } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ENV_PROVIDERS } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  declarations: [LoginComponent],
  providers: [
    ENV_PROVIDERS,
    provideAuth({
      headerName: '123',
      headerPrefix: '432',
      tokenName: '123',
      tokenGetter: '432',
      globalHeaders: [{'Content-Type':'application/json'}],
      noJwtError: true,
      noTokenScheme: true
    })
  ],
  bootstrap: [LoginComponent]
})
export class AppModule { }
