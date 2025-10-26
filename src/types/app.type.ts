export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  alt: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface IFooterLink {
  name: string;
}
