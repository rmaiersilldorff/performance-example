import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Reise} from '../models/common';
import {delay, map, switchMap} from 'rxjs/operators';
import * as faker from 'faker/locale/de';

@Injectable({
  providedIn: 'root'
})
export class ReiseService {

  counter = 0;
  length = faker.random.number({min: 10, max: 18});
  reisen$: Observable<Reise[]> = of(Array.from(new Array(this.length)).map(() => this.fakeReise()));

  getAngebote(): Observable<Reise[]> {
    return this.reisen$.pipe(delay(100));
  }

  changeAngebot(id: number): Observable<Reise[]> {
    return this.reisen$.pipe(
      map((reisen) =>
        reisen.map((reise, index) => index === id ? ({...reise, header: `Item ${reise.id} has changed`}) : reise)
      ),
      delay(200));
  }

  addAngebot(): Observable<Reise[]> {
    return this.reisen$.pipe(
      switchMap((items) => of(items.concat(this.fakeReise()))),
      delay(200)
    );
  }

  getAll(): Observable<Reise[]> {
    return this.reisen$;
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
      content$: new BehaviorSubject<string[]>([`${faker.random.number({min: 1, max: 21})} Nächte`, `Flug von Wien`]),
      from: new Date(),
      to: new Date(),
      price: faker.random.number({min: 400, max: 1200})
    };
  }
}
