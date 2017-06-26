import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignService {

  constructor(
    private http: Http,
    @Inject('baseUrl') private baseUrl: string) { }

  getAll() {
    const url = this.baseUrl + '/api/data'

    return this.http.get(url)
      .map(this.mapData)
      .catch(this.handleError);
  }

  private mapData(res: Response) {
    let body;

    // check if empty, before call json
    if (res.text()) {
      body = res.json();
    }

    return body || {};
  }

  private handleError(error: any) {
    if (error) {
      return Observable.throw(error);
    }

    return Observable.throw(error.json().message || 'Server error');
  }
}
