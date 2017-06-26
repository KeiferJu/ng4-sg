import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    // localStorage.removeItem('id_token');
    let token = localStorage.getItem('id_token');
    // if (!(new JwtHelper()).isTokenExpired(token)) {
    if ((new JwtHelper()).isTokenExpired(token)) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
