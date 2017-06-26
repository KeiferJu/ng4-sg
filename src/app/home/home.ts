import {Component, OnInit} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Router} from '@angular/router';
import { JwtHelper, AuthHttp} from 'angular2-jwt'

const styles = require('./home.scss');
const template = require('./home.html');

@Component({
  selector: 'home',
  template: template,
  styles: [ styles ]
})

export class Home implements OnInit {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  classModule: array;

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.classModule = [
      {
      'id': '1',
      'name': '数据',
      'width': '4',
      'child': [{
        'id': '12',
        'width': '2',
        'height': '2',
        'sort': '0',
        'component': '0'
      }, {
        'id': '12',
        'width': '1',
        'height': '1',
        'sort': '0',
        'component': '0'
      }, {
        'id': '12',
        'width': '2',
        'height': '2',
        'sort': '0',
        'component': '0'
      }, {
        'id': '12',
        'width': '2',
        'height': '2',
        'sort': '0',
        'component': '0'
      }]
    }, {
      'id': '1',
      'name': '地图',
      'width': '5',
      'child': [{
        'id': '12',
        'width': '3',
        'height': '1',
        'sort': '0',
        'component': '0'
      }, {
        'id': '12',
        'width': '1',
        'height': '2',
        'sort': '0',
        'component': '0'
      }]
    }, {
      'id': '1',
      'name': '地图1',
      'width': '5',
      'child': [{
        'id': '12',
        'width': '3',
        'height': '1',
        'sort': '0',
        'component': '0'
      }, {
        'id': '12',
        'width': '1',
        'height': '2',
        'sort': '0',
        'component': '0'
      }]
    }, {
      'id': '1',
      'name': '地图2',
      'width': '5',
      'child': [{
        'id': '12',
        'width': '3',
        'height': '1',
        'sort': '0',
        'component': '0'
      }, {
        'id': '12',
        'width': '1',
        'height': '2',
        'sort': '0',
        'component': '0'
      }]
    }];
    // console.log(this.classModule)

    this.jwt = localStorage.getItem('id_token');
    this.decodedJwt = this.jwt && (new JwtHelper()).decodeToken(this.jwt);
  }

  ngOnInit() {
    this.authHttp.get('/services/1.0.0/execute/fm_system_query_screen')
      .subscribe(
        data => {
          console.log(JSON.parse(data._body))
          localStorage.setItem('id_token', JSON.parse(data._body).token);
          this.classModule = this.forMatdata(JSON.parse(data._body).data) ;
          console.log( this.classModule )
        // this.router.navigate(['home']);
      },
        error => {
        console.log(error.text());
      }
    )
/*
    var drag = new Drag("idDrag", { mxContainer: "idContainer", Handle: "idHandle", Limit: true,
      onStart: function(){ console.log("开始拖放"); },
      onMove: function(){ console.log("拖动中_____________:"+"left："+this.Drag.offsetLeft+"；top:"+this.Drag.offsetTop); },
      onStop: function(){ console.log("结束拖放"); }
    })*/

  }

  forMatdata(data) {
    console.log(data)
    let formatD = [];
    for (let i of data) {
      if (i.parent_id === '') {
        formatD.push(i);
      }
    }
    for (let i of data) {
      for (let j of formatD) {
        if (i.parent_id === j.menu_id) {
          if (!j.child) {
            j.child = [];
          }
          j['child'].push(i);
        }
      }
    }
    return formatD;
  }

  getWinWidth() {
    let width = 0;
    for (let i of this.classModule) {
      width += parseInt(i.width) * 80 + 80;
    }
    return width;
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  resetWindowLeft(event) {
    document.body.scrollLeft =  document.body.scrollLeft + event.deltaY;
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'http://172.17.89.68:88/Authorization');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://172.17.89.68:88/Authorization');
  }

  _callApi(type, url) {
    this.response = null;
    if (type === 'Anonymous') {
      // For non-protected routes, just use Http
      this.http.get(url)
        .subscribe(
          response => this.response = response.text(),
          error => this.response = error.text()
        );
    }
    if (type === 'Secured') {
      // For protected routes, use AuthHttp
      const authHeader = new Headers();
      authHeader.append('Authorization', this.jwt);
      console.log(this.jwt);
      this.http.get(url, { headers: authHeader })
        .subscribe(
          response => {this.response = response.text()},
          error => this.response = error.text()
        );
    }
  }
}
