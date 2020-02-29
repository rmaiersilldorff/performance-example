import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Reise} from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class ReiseService {

  constructor() {
  }

  getAngebote(): Observable<Reise[]> {
    return of([
      {header: 'New York', content: 'blabla', price: 400},
      {header: 'Bangkok', content: 'blabla', price: 400}
    ]);
  }
}
