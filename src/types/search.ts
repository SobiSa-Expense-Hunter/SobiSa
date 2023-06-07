import type { Product, UserSelected } from '@/types/product';

export type Action =
  | { type: 'ADD_PRODUCT'; item: Product }
  | { type: 'ADD_SAVINGAMOUNT'; item: number }
  | { type: 'SET_DEFAULT'; item: UserSelected };

export interface NaverProductResponse {
  title: string;
  link: string;
  image: string;
  price: number;
  productType: number;
}
