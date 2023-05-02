export interface NaverProductItemResponse {
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  image: string;
  link: string;
  lprice: string;
  maker: string;
  mallName: string;
  productId: string;
  productType: string;
  title: string;
}

export interface NaverProductResponse {
  items: NaverProductItemResponse[];
  display: string;
  lastBuildDate: string;
  start: string;
  total: string;
}

export interface Product {
  title: string;
  image: string;
  price: string;
  productId: string;
}

export interface UserSelected {
  product: Product;
  savingAmount: number;
}
