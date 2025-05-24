// types/types.ts

export interface Person {
  id: number;
  name: string;
  age: number;
  gender: string;
  address: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface HeaderProps extends Person {
  personDetails: Person[];
  state: Product[];
}
