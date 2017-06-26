import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { AuthGuard } from './common/auth.guard';

import { DynamicTableComponent  } from './table/table.component';
import {  ConpanyTree } from './ConpanyTree/company-tree.component';

export const routes: Routes = [
  { path: '', component: DynamicTableComponent},
  { path: 'login', component: Login},
  { path: 'signup', component: Signup},
  { path: 'home', component: Home, canActivate: [AuthGuard]},
  // { path: '**', redirectTo: 'login'}
  { path: '**', component: NotFoundComponent}
];



