export interface NaverProductResponse {
  title: string;
  link: string;
  image: string;
  price: number;
  productType: number;
}

export interface Product {
  title: string;
  image: string;
  price: number;
}

export interface UserSelected {
  product: Product;
  savingAmount: number;
}

export interface Alternatives {
  title: string;
  image?: string;
  price: number;
  unit: string;
}
