interface NaverProductResponse {
  title: string;
  link: string;
  image: string;
  price: number;
  productType: number;
}

interface Product {
  title: string;
  image: string;
  price: number;
}

interface UserSelected {
  product: Product;
  savingAmount: number;
}
