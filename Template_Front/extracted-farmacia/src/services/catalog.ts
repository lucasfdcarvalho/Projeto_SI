import { categories as mockCategories } from '@/data/categories';
import { products as mockProducts } from '@/data/products';
import type { Category, Product } from '@/types/models';
import { getApiBase, simulateNetwork } from '@/services/config';

export async function getCategories(): Promise<Category[]> {
  const base = getApiBase();
  if (base) {
    const res = await fetch(`${base}/categories`);
    if (!res.ok) throw new Error('Falha ao carregar categorias');
    return res.json() as Promise<Category[]>;
  }
  return simulateNetwork(mockCategories);
}

export async function getProducts(filters?: {
  categoryId?: string;
  q?: string;
  featuredOnly?: boolean;
}): Promise<Product[]> {
  const base = getApiBase();
  if (base) {
    const params = new URLSearchParams();
    if (filters?.categoryId) params.set('categoryId', filters.categoryId);
    if (filters?.q) params.set('q', filters.q);
    if (filters?.featuredOnly) params.set('featured', 'true');
    const qs = params.toString();
    const res = await fetch(`${base}/products${qs ? `?${qs}` : ''}`);
    if (!res.ok) throw new Error('Falha ao carregar produtos');
    return res.json() as Promise<Product[]>;
  }

  let list = [...mockProducts];
  if (filters?.categoryId) {
    list = list.filter((p) => p.categoryId === filters.categoryId);
  }
  if (filters?.featuredOnly) {
    list = list.filter((p) => p.featured);
  }
  if (filters?.q?.trim()) {
    const needle = filters.q.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.shortDescription.toLowerCase().includes(needle),
    );
  }
  return simulateNetwork(list);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const base = getApiBase();
  if (base) {
    const res = await fetch(`${base}/products/${encodeURIComponent(id)}`);
    if (res.status === 404) return undefined;
    if (!res.ok) throw new Error('Falha ao carregar produto');
    return res.json() as Promise<Product>;
  }
  const found = mockProducts.find((p) => p.id === id);
  return simulateNetwork(found);
}
