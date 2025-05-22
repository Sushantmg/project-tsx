 export type HeaderProps={
    id :number;
    name: string;
    age:number;
    gender:string;
    address:string;
    personDetails:{id:number; name:string; age:number; gender:string; address:string}[]
};
export type Product = {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};