import { Component, View, bootstrap, provide } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { AuthHttp, tokenNotExpired  } from 'angular2-jwt';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;

  //constructor(@Inject('environment') public environment: string) {
  constructor(private authHttp: AuthHttp) {
    this.name = 'Angular4 AppComponent';
  }

  loginIn () {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');

    this.authHttp.post('http://127.0.0.1:4000/login', { headers: myHeader})
        .map(res => res.json())
        .subscribe(
            data =>  console.log(data),
            error => console.log(error),
            () => console.log('Request Complete!!')

    );
  }

  logout() {
    console.log(321321321321);
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    //console.log(tokenNotExpired());
    return tokenNotExpired();
  }
}

bootstrap(LoginComponent, [
  HTTP_PROVIDERS,
  provide(AuthHttp, { useFactory: () => {
    return new AuthHttp({
      headerName: '123',
      headerPrefix: '123',
      tokenName: '123',
      tokenGetter: '123',
      noJwtError: true
    })
  }})
])
