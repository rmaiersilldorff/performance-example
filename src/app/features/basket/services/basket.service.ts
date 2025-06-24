import {Injectable, computed, signal, Signal} from '@angular/core';
import {Basket, Trip} from '@trip/models';

@Injectable({
    providedIn: 'root',
})
export class BasketService {
  private readonly basketSignal = signal<Basket>({ items: [] });

  constructor() {}

  add(item: Trip): void {
    const current = this.basketSignal();
    this.basketSignal.set({ items: [...current.items, item] });
  }

  selectAll(): Signal<Trip[]> {
    return computed(() => this.basketSignal().items);
  }

  getCount(): Signal<number> {
    return computed(() => this.basketSignal().items.length);
  }
}

