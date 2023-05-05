export type Action =
  | { type: 'ADD_PRODUCT'; item: Product }
  | { type: 'ADD_SAVINGAMOUNT'; item: number };

export interface NaverProductResponse {
  title: string;
  link: string;
  image: string;
  price: number;
  productType: number;
}

export interface Product {
  title?: string;
  image?: string;
  price?: number;
}

export interface UserSelected {
  product: Product;
  savingAmount: number;
}
