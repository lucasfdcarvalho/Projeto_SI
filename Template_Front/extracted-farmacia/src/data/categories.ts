import type { Category } from '@/types/models';

export const categories: Category[] = [
  { id: 'medicamentos', name: 'Medicamentos', icon: 'pill', colorClass: 'bg-blue-100 text-blue-600' },
  { id: 'vitaminas', name: 'Vitaminas', icon: 'heart', colorClass: 'bg-red-100 text-red-600' },
  { id: 'infantil', name: 'Infantil', icon: 'baby', colorClass: 'bg-pink-100 text-pink-600' },
  { id: 'beleza', name: 'Beleza', icon: 'sparkles', colorClass: 'bg-purple-100 text-purple-600' },
  { id: 'dermocosmeticos', name: 'Dermocosméticos', icon: 'droplet', colorClass: 'bg-cyan-100 text-cyan-600' },
  { id: 'higiene', name: 'Higiene', icon: 'shield', colorClass: 'bg-emerald-100 text-emerald-600' },
];
