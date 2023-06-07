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

export function isUserSelectedType(typeObj: any): typeObj is UserSelected {
  return 'product' in typeObj && 'savingAmount' in typeObj;
}
