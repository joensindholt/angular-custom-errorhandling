import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  _errors: Subject<string> = new Subject<string>();

  constructor() { }

  errors(): Observable<string> {
    return this._errors;
  }

  notifyError(error: string) {
    this._errors.next(error);
  }
}
