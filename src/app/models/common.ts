import {Observable} from 'rxjs';

export interface Reise {
  id: number;
  header: string;
  content$: Observable<string[]>;
  from: Date;
  to: Date;
  price: number;
}

export interface Basket {
  items: Reise[];
}
