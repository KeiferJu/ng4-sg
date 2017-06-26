import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";
import { contentHeaders } from '../common/headers';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, http: Http) {
  }

  login(event, username: string, password: string): void {
    event.preventDefault();
    let body = JSON.stringify( { username, password });
    this.http.post('http://localhost:8080/login', body, { headers: contentHeaders})
      .subscribe(
      (response: Response) => {
        localStorage.setItem('id_token', response.headers.get("Authorization"));
        console.log(response.headers.get("Authorization"));
        this.router.navigate(['home']);
      },
        error => {
        alert(error.text());
        console.log(error.text());
      }
    );
  }
}
