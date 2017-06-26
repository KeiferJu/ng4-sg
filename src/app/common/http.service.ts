/**
 * Created by wangfudong on 2017/6/22.
 * Fetch data with http.get() or http.post()
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp }       from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { FieldConfig } from '../dynamic-form/models/field-config.interface'

@Injectable()
export class HttpService {
  const urlRoot = 'http://47.94.252.138/';
  const testUrl = urlRoot + 'api/login';


  private dataUrl = 'api/login';  // URL to web API

  constructor(private http:Http, public authHttp:AuthHttp) {}

  getData(): Observable<any[]> {
    return this.http.get(this.dataUrl)
                    .map(this.extractData)
                    .catch(this.handleError)
  }
  postData(param: Object): Observable<any[]> {
    let body = this.getFormatBody(param);
    return this.http.post(this.dataUrl, {body})
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  postData(param: Object): Observable<any> {
    let body = this.getFormatBody(param);
  }

  getFormatBody(param: Object) {
    let body = JSON.stringify({
      "modulename": "queryCar",
      "operation": "",
      // "version": "",  // 非必选
      "tag": "12345",
      // "tokenid:": "",
      // "processkey": "",  // 非必选
      // "encrypt": "",  // 非必选
      // "debug": "",   // 非必选
      "data": param
    });
    return body;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
