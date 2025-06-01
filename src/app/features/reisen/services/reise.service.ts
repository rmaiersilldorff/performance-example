import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Reise} from '@reisen/models';
import {delay, map, switchMap} from 'rxjs/operators';
import {fakerDE as faker} from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class ReiseService {

  counter = 0;
  length = faker.number.int({min: 5, max: 10});
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

  search(value: string, nights: number): Observable<Reise[]> {
    const lowercaseValue = value && value.toLowerCase();
    return this.reisen$.pipe(
      map((reisen) => reisen.filter((reise) => {
        return reise.header.toLowerCase().includes(lowercaseValue) && reise.content[0].includes(nights.toString());
      }))
    );
  }

  private fakeReise() {
    return {
      id: this.counter++,
      header: faker.address.city(),
      content: [`${faker.number.int({min: 1, max: 21})} Nächte`, `Flug von Wien`],
      from: new Date(),
      to: new Date(),
      price: faker.number.int({min: 400, max: 1200})
    };
  }
}
