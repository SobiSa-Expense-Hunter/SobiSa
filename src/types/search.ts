import type { Product } from '@/types/product';

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
