import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }

  get(url: string): Observable<any> {
    return this.http.get('http://non-existing-url.com')
      .map(res => res.json());
  }
}
