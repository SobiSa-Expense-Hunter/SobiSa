import type { Product } from '@/types/product';

const searchSuggestions: Product[] = [
  {
    title: '신라호텔 망고빙수',
    image:
      'https://wimg.mk.co.kr/meet/neds/2022/04/image_readtop_2022_367328_16508732825021261.jpg',
    price: 98000,
    brand: '신라호텔',
  },
  {
    title: 'APPLE 비전 프로',
    image:
      'https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/hero_endframe__dz973mndvu82_large.jpg',
    price: 4500000,
    brand: 'apple',
  },
  {
    title: 'Space X 화성 여행',
    image: 'https://www.sciencetimes.co.kr/wp-content/uploads/2020/01/MC1.jpg',
    price: 560000000,
    brand: 'Space X',
  },
  {
    title: '1 BTC',
    image:
      'https://images.pexels.com/photos/5980738/pexels-photo-5980738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 37167921,
    brand: 'btc',
  },
];

export default searchSuggestions;
