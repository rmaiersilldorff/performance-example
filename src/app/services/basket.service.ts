import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Basket, Reise} from '../models/common';
import {map, scan, shareReplay, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  add$ = new Subject();

  basket$ = this.add$.asObservable().pipe(
    scan((currVal: Basket, newVal: Basket) => {
      return {items: currVal.items.concat(newVal.items)};
    }, {items: []}),
    startWith({items: []}),
    shareReplay(1)
  );

  constructor() {
  }

  add(item: Reise) {
    this.add$.next({items: [item]});
  }

  selectAll(): Observable<Reise[]> {
    return this.basket$.pipe(map((basket: Basket) => basket.items));
  }

  getCount(): Observable<number> {
    return this.basket$.pipe(map((basket: Basket) => basket.items.length));
  }
}
