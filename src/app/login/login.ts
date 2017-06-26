import { Component }      from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router }         from '@angular/router';
import { contentHeaders } from '../common/headers';
import { AuthHttp }       from 'angular2-jwt';

const styles   = require('./login.scss');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})

export class Login {

  thing: string;

  constructor (public router: Router, public http: Http, public authHttp: AuthHttp) {
  }

  login (event, username: string, password: string): void {
    event.preventDefault();
     /*let body = JSON.stringify({ username, password });

    this.authHttp.get('http://172.17.89.68:88/Authorization', body)
      .subscribe(
      data => {
        localStorage.setItem('id_token', data.headers.get('Authorization'));
        this.router.navigate(['home']);
      },
        error => {
        console.log(error.text());
      }
    );

    return;*/
    let body = JSON.stringify({
      data: {
        userName: username,
        userPass: password,
        type: 'local'
      }
    });
    console.log(body)
    this.http.get('/services/1.0.0/login/login?parameter=' + body)
      .subscribe(
        data => {
         localStorage.setItem('id_token', JSON.parse(data._body).token);

        this.router.navigate(['home']);
      },
        error => {
        console.log(error.text());
      }
    )



    // Pass it after the body in a POST request
   /* this.authHttp.post('http://172.17.89.68:88/Authorization', body, { headers: contentHeaders })
      .subscribe(
        data => this.thing = data,
        err => console.log(err),
        () => console.log('Request Complete')
    );*/

    /*this.http.post('http://172.17.89.68:88/Authorization', body, { headers: contentHeaders })
      .subscribe(
        (response: Response) => {
          localStorage.setItem('id_token', response.headers.get('Authorization'));
          console.log(response.headers.get('Authorization'));
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );*/
  }

  signup(event): void {
    event.preventDefault();
    this.router.navigate(['signup']);
  }

}
