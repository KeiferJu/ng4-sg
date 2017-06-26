import { Routes } from '@angular/router';
import { Login } from './login/login';

import { AuthGuard } from './common/auth.guard';

export const APP_ROUTES: Routes = [
  { path: '', component: Login},
  { path: 'login', component: Login},
  //{ path: 'home', component: Home, canActivate: [AuthGuard]},
  { path: '**', component: Login}

  // { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  //{ path: '**', redirectTo: '/' }
];

