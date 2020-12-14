import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Reise} from '../models/common';
import {delay, map} from 'rxjs/operators';
import * as faker from 'faker/locale/de';

@Injectable({
  providedIn: 'root'
})
export class ReiseService {

  counter = 0;
  length = faker.random.number({min: 10, max: 20});
  reisen$: Observable<Reise[]> = of(Array.from(new Array(this.length)).map(() => this.fakeReise()));

  constructor() {
  }

  getAngebote(): Observable<Reise[]> {
    return this.reisen$;
  }

  getAll(): Observable<Reise[]> {
    return this.reisen$.pipe(delay(100));
  }

  search(value: string): Observable<Reise[]> {
    const lowercaseValue = value && value.toLowerCase();
    return this.reisen$.pipe(
      map((reisen) => reisen.filter((reise) => {
        return reise.header.toLowerCase().includes(lowercaseValue);
      }))
    );
  }

  private fakeReise() {
    return {
      id: this.counter++,
      header: faker.address.city(),
      content: [`${faker.random.number({min: 1, max: 21})} Nächte`, `Flug von Wien`],
      from: new Date(),
      to: new Date(),
      price: faker.random.number({min: 400, max: 1200})
    };
  }
}
