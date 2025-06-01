export interface Reise {
  id: number;
  header: string;
  content: string[];
  from: Date;
  to: Date;
  price: number;
}

export interface Basket {
  items: Reise[];
}
