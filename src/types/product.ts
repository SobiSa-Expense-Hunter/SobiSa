import type { Alternatives } from '@/types/result';

export interface Product {
  title?: string;
  image?: string;
  price?: number;
  initTitle?: string;
  productId?: string;
  category1?: string;
  category2?: string;
  brand?: string;
}

export interface UserSelected {
  product: Product;
  savingAmount: number;
}
export interface UserSearchHistory extends UserSelected {
  Alternative_title: Alternatives['title'][];
  searchDate: string;
}
