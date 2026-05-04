import type { Promotion } from '@/types/models';

export const promotions: Promotion[] = [
  {
    id: 'promo-genericos',
    title: '15% OFF em genéricos',
    oldPrice: 100,
    currentPrice: 85,
    discountPercent: 15,
    imageUrl: 'https://picsum.photos/seed/promo1/600/320',
  },
  {
    id: 'promo-dermo',
    title: 'Dermocosméticos selecionados',
    productId: 'protetor-solar-fps50',
    oldPrice: 99.9,
    currentPrice: 69.9,
    discountPercent: 30,
    imageUrl: 'https://picsum.photos/seed/promo2/600/320',
  },
  {
    id: 'promo-vitaminas',
    title: 'Combo vitaminas Ômega + D3',
    oldPrice: 96.9,
    currentPrice: 79.9,
    discountPercent: 18,
    imageUrl: 'https://picsum.photos/seed/promo3/600/320',
  },
];
