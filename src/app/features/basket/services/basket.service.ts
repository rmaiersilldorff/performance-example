import {Injectable, computed, signal, Signal} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map, scan, shareReplay, startWith} from 'rxjs/operators';
import {Basket, Reise} from '@reisen/models';

@Injectable({
    providedIn: 'root',
})
export class BasketService {
  private readonly basketSignal = signal<Basket>({ items: [] });

  constructor() {}

  add(item: Reise): void {
    const current = this.basketSignal();
    this.basketSignal.set({ items: [...current.items, item] });
  }

  selectAll(): Signal<Reise[]> {
    return computed(() => this.basketSignal().items);
  }

  getCount(): Signal<number> {
    return computed(() => this.basketSignal().items.length);
  }
}

