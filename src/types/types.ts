export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};
export type Rating = { rate: number; count: number };

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: Address | undefined | null;
  __v: number;
};

export type Address = {
  geolocation?: {
    lat?: string;
    long?: string;
  };
  city?: string;
  street: string;
  number: number;
  zipcode: string;
};

export type Users = User[];